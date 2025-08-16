package cmd

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/fatih/color"
	"github.com/fsnotify/fsnotify"
	"github.com/gorilla/mux"
	"github.com/spf13/cobra"
)

var (
	port     int
	host     string
	watchDir string
)

// devCmd represents the development server command
var devCmd = &cobra.Command{
	Use:   "dev",
	Short: "Start development server with hot reload",
	Long: `Development server provides:

• Hot reload for component changes
• Live preview of components
• API endpoints for component testing
• File watching and automatic rebuilds
• Performance monitoring

Perfect for component development and testing.`,
	RunE: runDevServer,
}

func init() {
	rootCmd.AddCommand(devCmd)

	devCmd.Flags().IntVarP(&port, "port", "p", 3000, "Port to run the server on")
	devCmd.Flags().StringVar(&host, "host", "localhost", "Host to bind the server to")
	devCmd.Flags().StringVarP(&watchDir, "watch", "w", "src", "Directory to watch for changes")
}

func runDevServer(cmd *cobra.Command, args []string) error {
	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()
	blue := color.New(color.FgBlue).SprintFunc()

	fmt.Printf("%s Starting GuruUI development server...\n", green("🚀"))
	fmt.Printf("%s Server will be available at: http://%s:%d\n", blue("🌐"), host, port)
	fmt.Printf("%s Watching directory: %s\n", yellow("👀"), watchDir)

	// Set up file watcher
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		return fmt.Errorf("failed to create file watcher: %w", err)
	}
	defer watcher.Close()

	// Start file watching in a goroutine
	go watchFiles(watcher, watchDir)

	// Set up HTTP server
	router := setupRoutes()
	
	server := &http.Server{
		Addr:         fmt.Sprintf("%s:%d", host, port),
		Handler:      router,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	fmt.Printf("%s Development server started successfully!\n", green("✅"))
	fmt.Printf("%s Press Ctrl+C to stop the server\n", yellow("⏹️"))

	return server.ListenAndServe()
}

func setupRoutes() *mux.Router {
	router := mux.NewRouter()

	// API routes
	api := router.PathPrefix("/api").Subrouter()
	api.HandleFunc("/components", handleComponents).Methods("GET")
	api.HandleFunc("/components/{name}", handleComponent).Methods("GET")
	api.HandleFunc("/build", handleBuild).Methods("POST")
	api.HandleFunc("/health", handleHealth).Methods("GET")

	// Static file serving
	router.PathPrefix("/").Handler(http.FileServer(http.Dir(".")))

	return router
}

func watchFiles(watcher *fsnotify.Watcher, dir string) {
	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()

	// Add the directory to watch
	if err := watcher.Add(dir); err != nil {
		fmt.Printf("Error watching directory %s: %v\n", dir, err)
		return
	}

	// Add subdirectories
	filepath.WalkDir(dir, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			watcher.Add(path)
		}
		return nil
	})

	for {
		select {
		case event, ok := <-watcher.Events:
			if !ok {
				return
			}
			if event.Has(fsnotify.Write) || event.Has(fsnotify.Create) || event.Has(fsnotify.Remove) {
				fmt.Printf("%s File change detected: %s\n", yellow("🔄"), event.Name)
				handleFileChange(event.Name)
			}
		case err, ok := <-watcher.Errors:
			if !ok {
				return
			}
			fmt.Printf("Watcher error: %v\n", err)
		}
	}
}

func handleFileChange(filename string) {
	// Determine what type of file changed and handle accordingly
	ext := filepath.Ext(filename)
	
	switch ext {
	case ".tsx", ".ts", ".jsx", ".js":
		fmt.Printf("React/TypeScript file changed: %s\n", filename)
		// Trigger rebuild or hot reload
	case ".vue":
		fmt.Printf("Vue file changed: %s\n", filename)
		// Trigger Vue-specific rebuild
	case ".css":
		fmt.Printf("CSS file changed: %s\n", filename)
		// Trigger CSS hot reload
	default:
		fmt.Printf("Other file changed: %s\n", filename)
	}
}

// HTTP handlers
func handleComponents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"components": ["Button", "Modal", "Input", "Card"]}`))
}

func handleComponent(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	componentName := vars["name"]
	
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(fmt.Sprintf(`{"name": "%s", "status": "active"}`, componentName)))
}

func handleBuild(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status": "build_started", "message": "Build process initiated"}`))
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status": "healthy", "timestamp": "` + time.Now().Format(time.RFC3339) + `"}`))
}
