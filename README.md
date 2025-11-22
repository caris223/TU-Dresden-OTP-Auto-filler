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

After installing the extension, you need to configure your Indexed Secret:

1. Go to `chrome://extensions/`.
2. Find **TU Dresden OTP Auto-filler**.
3. Click **Details**.
4. Scroll down and click **Extension options**.
5. Enter your 25-character Indexed Secret in the input field and click **Save Settings**.

Alternatively, you can right-click the extension icon in the toolbar and select **Options**.

## License

MIT
