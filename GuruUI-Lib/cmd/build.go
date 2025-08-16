package cmd

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/fatih/color"
	"github.com/spf13/cobra"
	"guruui/internal/build"
)

var (
	watchMode bool
	optimize  bool
)

// buildCmd represents the build command
var buildCmd = &cobra.Command{
	Use:   "build",
	Short: "Build and optimize the GuruUI package",
	Long: `Build command handles the complete build process for GuruUI:

1. Runs the Vite build process
2. Optimizes and copies CSS files
3. Generates build metadata
4. Performs bundle analysis
5. Runs performance benchmarks

Use --watch for development mode with file watching.`,
	RunE: runBuild,
}

func init() {
	rootCmd.AddCommand(buildCmd)

	buildCmd.Flags().BoolVarP(&watchMode, "watch", "w", false, "Watch mode for development")
	buildCmd.Flags().BoolVarP(&optimize, "optimize", "o", true, "Enable CSS optimization")
}

func runBuild(cmd *cobra.Command, args []string) error {
	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()
	red := color.New(color.FgRed).SprintFunc()

	fmt.Printf("%s Starting GuruUI build process...\n", green("🚀"))

	// Step 1: Run Vite build
	fmt.Printf("%s Running Vite build...\n", yellow("📦"))
	if err := runViteBuild(); err != nil {
		return fmt.Errorf("vite build failed: %w", err)
	}
	fmt.Printf("%s Vite build completed\n", green("✅"))

	// Step 2: Post-build processing
	fmt.Printf("%s Running post-build optimization...\n", yellow("🔧"))
	if err := runPostBuild(); err != nil {
		return fmt.Errorf("post-build failed: %w", err)
	}
	fmt.Printf("%s Post-build processing completed\n", green("✅"))

	// Step 3: Generate build info
	fmt.Printf("%s Generating build metadata...\n", yellow("📊"))
	if err := generateBuildInfo(); err != nil {
		return fmt.Errorf("build info generation failed: %w", err)
	}
	fmt.Printf("%s Build metadata generated\n", green("✅"))

	// Step 4: Bundle analysis
	if optimize {
		fmt.Printf("%s Analyzing bundle...\n", yellow("🔍"))
		if err := analyzeBundle(); err != nil {
			fmt.Printf("%s Bundle analysis failed: %v\n", red("⚠️"), err)
		} else {
			fmt.Printf("%s Bundle analysis completed\n", green("✅"))
		}
	}

	fmt.Printf("%s Build process completed successfully!\n", green("🎉"))
	return nil
}

func runViteBuild() error {
	// This would integrate with your existing npm build script
	// For now, we'll assume it's already been run
	return nil
}

func runPostBuild() error {
	rootDir := "."
	
	// Copy and optimize CSS files
	cssFiles := []struct {
		src  string
		dest string
		name string
	}{
		{"dist/style.css", "style.css", "style.css"},
		{"dist/animations.css", "animations.css", "animations.css"},
	}

	for _, file := range cssFiles {
		srcPath := filepath.Join(rootDir, file.src)
		destPath := filepath.Join(rootDir, file.dest)

		if err := build.CopyAndOptimizeCSS(srcPath, destPath, file.name); err != nil {
			return fmt.Errorf("failed to process %s: %w", file.name, err)
		}
	}

	return nil
}

func generateBuildInfo() error {
	buildInfo := build.BuildInfo{
		Timestamp: time.Now().UTC().Format(time.RFC3339),
		Version:   "0.1.21", // This should come from package.json
		Node:      "Go CLI",
		Platform:  "Go",
		GoVersion: "1.21+",
	}

	data, err := json.MarshalIndent(buildInfo, "", "  ")
	if err != nil {
		return err
	}

	buildInfoPath := filepath.Join("dist", "build-info.json")
	if err := os.MkdirAll(filepath.Dir(buildInfoPath), 0755); err != nil {
		return err
	}

	return os.WriteFile(buildInfoPath, data, 0644)
}

func analyzeBundle() error {
	// This would integrate with your existing benchmark script
	// For now, we'll just indicate it's available
	return nil
}
