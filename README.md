# 🎨 ComfyUI Color Palettes

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Customize your ComfyUI experience with a vibrant collection of handcrafted color palettes!**

This repository provides a curated selection of JSON color palettes specifically designed for [ComfyUI](https://github.com/comfyanonymous/ComfyUI), allowing you to personalize the look and feel of your node-based workflow.

---

## ✨ Why Use These Palettes?

*   **👁️ Visual Appeal:** Replace the default ComfyUI colors with themes ranging from sleek and professional dark modes to vibrant and playful light modes. Find a style that suits your mood and reduces eye strain during long sessions.
*   **💡 Enhanced Clarity:** Different node types and data connections are assigned distinct colors, making complex workflows easier to read, debug, and understand at a glance.
*   **📂 Organized Collection:** Palettes are meticulously organized into intuitive categories (Dark, Light, Vibrant, Nature, Gradient, Monochrome, Popular), making it simple to browse and find the perfect theme.
*   **🔧 Easy Customization:** Themes are provided as simple JSON files. Feel free to tweak them or use them as a starting point for your own unique creations!

---

## 🚀 Getting Started

There are two primary ways to apply a theme:

**Method 1: Using the ComfyUI Settings Menu (Recommended)**

1.  **Start ComfyUI:** Launch ComfyUI as usual.
2.  **Open Settings:** Click the gear icon (⚙️) to open the settings panel.
3.  **Navigate to Appearance:** Find and select the "Appearance" section within the settings.
4.  **Load Palette:** Under the "Color Palette" options, click the "Load" button (it might look like an upload icon).
5.  **Select File:** Browse your computer and select the downloaded `.json` theme file you want to apply.
6.  **Apply:** The theme should apply immediately. You might need to close and reopen the settings panel to see the full effect.

**Method 2: Placing the File Manually**

1.  **Download:** Clone this repository or download the ZIP file.
2.  **Browse:** Navigate through the `themes/` directory to explore the different categories and find a palette file (`*-comfy-ui-palette.json`) you like.
3.  **Locate ComfyUI Directory:** Find your ComfyUI installation folder.
4.  **Place the File:** Copy the chosen `.json` palette file into the `ComfyUI/web/data/` directory within your ComfyUI installation.
5.  **Restart ComfyUI:** Close and restart ComfyUI.
6.  **Select Theme:** The new palette should now be available in the ComfyUI settings/options menu (Appearance -> Color Palette dropdown). Select it to apply the new theme.

---

## 📁 Theme Categories

Our collection is organized for easy browsing:

*   `themes/dark/` - For those who prefer the night. 🌃
*   `themes/light/` - Bright and clean interfaces. ☀️
*   `themes/vibrant/` - High-contrast and colorful options. 🌈
*   `themes/nature/` - Inspired by the great outdoors. 🌲🌊
*   `themes/gradient/` - Smooth transitions and sky-like colors. 🌅
*   `themes/monochrome/` - Elegant single-color variations. ⚫⚪
*   `themes/popular/` - Community favorites like Dracula, Nord, and Solarized Dark. ⭐

*(Note: The `popular` folder contains copies of themes found in other categories for convenience.)*

---

## 🔧 Structure of a Palette File

Each theme follows a specific JSON structure (version `102`):

```json
{
  "version": 102,
  "id": "theme_identifier", // e.g., "solarized_dark"
  "name": "Theme Name",     // e.g., "Solarized Dark"
  "colors": {
    "node_slot": { // Colors for node connection types (IMAGE, MASK, MODEL, etc.)
      "CLIP": "#b58900",
      // ... other slots
    },
    "litegraph_base": { // Colors for the LiteGraph canvas elements
      "CLEAR_BACKGROUND_COLOR": "#002b36",
      "NODE_TITLE_COLOR": "#93a1a1",
      // ... other litegraph keys
    },
    "comfy_base": { // Colors for the general ComfyUI interface
      "fg-color": "#839496",
      "bg-color": "#002b36",
      // ... other comfy_base keys
    }
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! If you've created a cool theme and want to share it:

1.  Ensure your theme follows the naming convention: `<theme-name>-comfy-ui-palette.json`.
2.  Validate your JSON structure against the examples and rules.
3.  Place your theme file in the most relevant category folder within `themes/`.
4.  Submit a Pull Request!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) file for details. 