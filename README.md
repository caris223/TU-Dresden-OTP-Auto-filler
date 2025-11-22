# TU Dresden OTP Auto-filler

A simple Chrome extension that automatically fills the "Indexed Secret" OTP field on the TU Dresden IDP login page.

## Features

- Automatically detects the requested character positions (e.g., "Position 1 & 17").
- Extracts the corresponding characters from your stored password.
- Fills the input field automatically.

## Installation

1. **Download or Clone** this repository to a folder on your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** 
5. Select the folder containing these files.

## Configuration

The password is currently hardcoded in `content.js`. If your Indexed Secret password changes:
1. Open `content.js`.
2. Update the `password` variable at the top of the file.
3. Save the file and click the **Reload** icon on the extension in `chrome://extensions/`.

## License

MIT
