# Chrome Extension: ShellShock

This extension **messes with your browser** by hijacking the `<a>` tags to redirect to a Python endpoint and triggering a reverse shell, all while posing as a legitimate Chrome extension.

## Features

- **Image Replacement**: Replace images on webpages with Jhong Hilario pics.
- **Background Color Customization**: Change the background color of any webpage to something visually disruptive.
- **Hijacks `<a>` Tags**: Alters the value of anchor (`<a>`) tags to redirect users to a Python endpoint, triggering a reverse shell.
- **Lightweight and Fast**: The extension is optimized for performance with minimal impact on browser speed.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click on the **Load unpacked** button.
5. Select the folder containing the extension files.
6. The extension will now appear in your extensions list.

## Usage

1. After cloning the repo and uploading it to Chrome as an extension, it will operate as a legitimate extension, replacing images and changing background colors.
2. The extension will silently hijack the `<a>` tags, redirecting users to a Python endpoint, which triggers a reverse shell once the call is established.

## Files

- **manifest.json**: Configuration file for the Chrome extension.
- **content.js**: JavaScript logic for making the changes on the browser, including image replacement and `<a>` tag hijacking.

## How It Works

1. **Redirect Hijacking**: The extension scans all the `<a>` tags (`<a href="...">`) in the webpage. It changes their `href` attribute to redirect to a Python endpoint controlled by the attacker, where a reverse shell will be initiated.

2. **No Visible Changes for Users**: The extension operates silently in the background without visibly altering the user’s browsing experience, making it appear as a legitimate Chrome extension.

3. **Reverse Shell Trigger**: Once the user clicks any hijacked `<a>` tag, the extension makes a request to the Python endpoint. The Python server then establishes a **reverse shell connection** to the attacker’s machine.

4. **Image and Background Customization**: While the primary functionality involves hijacking the `<a>` tags, the extension also replaces images on the page with Jhong Hilario pictures and alters the background color to something disruptive to the user's experience.

5. **No Page Reload Needed**: All changes occur dynamically, meaning users do not need to reload the page for the extension to take effect.

---

**Important Note:** This project is for **educational purposes only**. **Do not** use it for malicious activities. Ensure you have permission before testing on any system. Misuse of this tool can have serious legal consequences.
