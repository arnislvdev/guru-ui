package build

import (
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
)

// CopyAndOptimizeCSS copies CSS files and optionally optimizes them
func CopyAndOptimizeCSS(src, dest, name string) error {
	// Check if source exists
	if _, err := os.Stat(src); os.IsNotExist(err) {
		return fmt.Errorf("source file %s does not exist", src)
	}

	// Create destination directory if it doesn't exist
	destDir := filepath.Dir(dest)
	if err := os.MkdirAll(destDir, 0755); err != nil {
		return fmt.Errorf("failed to create destination directory: %w", err)
	}

	// Copy the file
	if err := copyFile(src, dest); err != nil {
		return fmt.Errorf("failed to copy %s: %w", name, err)
	}

	// Optimize the CSS if it's a main stylesheet
	if strings.Contains(name, "style.css") {
		if err := optimizeCSS(dest); err != nil {
			return fmt.Errorf("failed to optimize %s: %w", name, err)
		}
	}

	return nil
}

// copyFile copies a file from src to dst
func copyFile(src, dst string) error {
	sourceFile, err := os.Open(src)
	if err != nil {
		return err
	}
	defer sourceFile.Close()

	destFile, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destFile.Close()

	_, err = io.Copy(destFile, sourceFile)
	return err
}

// optimizeCSS performs basic CSS optimization
func optimizeCSS(filePath string) error {
	// Read the CSS file
	content, err := os.ReadFile(filePath)
	if err != nil {
		return err
	}

	// Basic optimizations
	optimized := string(content)

	// Remove unnecessary whitespace and comments
	optimized = removeCSSComments(optimized)
	optimized = compressWhitespace(optimized)

	// Write back the optimized content
	return os.WriteFile(filePath, []byte(optimized), 0644)
}

// removeCSSComments removes CSS comments
func removeCSSComments(css string) string {
	// Simple comment removal - in production you'd want a more robust parser
	lines := strings.Split(css, "\n")
	var result []string

	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if !strings.HasPrefix(trimmed, "/*") && !strings.HasSuffix(trimmed, "*/") {
			result = append(result, line)
		}
	}

	return strings.Join(result, "\n")
}

// compressWhitespace compresses unnecessary whitespace
func compressWhitespace(css string) string {
	// Remove multiple spaces
	css = strings.ReplaceAll(css, "  ", " ")
	css = strings.ReplaceAll(css, "\t", " ")

	// Remove spaces around certain characters
	css = strings.ReplaceAll(css, " {", "{")
	css = strings.ReplaceAll(css, "{ ", "{")
	css = strings.ReplaceAll(css, " }", "}")
	css = strings.ReplaceAll(css, "} ", "}")
	css = strings.ReplaceAll(css, ": ", ":")
	css = strings.ReplaceAll(css, " :", ":")
	css = strings.ReplaceAll(css, "; ", ";")
	css = strings.ReplaceAll(css, " ;", ";")

	return css
}
