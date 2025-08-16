package build

// BuildInfo contains information about the build
type BuildInfo struct {
	Timestamp string `json:"timestamp"`
	Version   string `json:"version"`
	Node      string `json:"node"`
	Platform  string `json:"platform"`
	GoVersion string `json:"goVersion"`
}

// BuildStats contains build performance metrics
type BuildStats struct {
	BuildTime      string `json:"buildTime"`
	BundleSize     int64  `json:"bundleSize"`
	CSSSize        int64  `json:"cssSize"`
	ComponentCount int    `json:"componentCount"`
}

// ComponentInfo contains information about a UI component
type ComponentInfo struct {
	Name        string `json:"name"`
	Framework   string `json:"framework"`
	Size        int64  `json:"size"`
	Complexity  string `json:"complexity"`
	LastUpdated string `json:"lastUpdated"`
}
