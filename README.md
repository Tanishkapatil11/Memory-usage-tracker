# Memory Usage Tracker Extension

A lightweight and intuitive browser extension to monitor and manage your browser’s memory usage in real time.

## 🔍 Features

- ✅ Real-time display of JavaScript memory usage (Used / Total / Percentage)
- ✅ Visual progress bar for easy understanding
- ✅ List of currently open tabs
- ✅ One-click **“Close Tab”** functionality to manage memory
- ✅ **“Free Up Memory”** button to refresh and reduce memory load

---

## 🛠️ Technologies Used

- HTML  
- CSS  
- JavaScript  
- Chrome Extension APIs (Manifest V3)  
- `performance.memory` for memory stats  
- `chrome.tabs` API for tab management

## 🚀 Installation

1. Clone or download this repository
2. Open Chrome or Edge and go to: `chrome://extensions/` or `edge://extensions/`
3. Enable **Developer Mode**
4. Click **“Load unpacked”**
5. Select the folder where you cloned this project
6. The extension will appear in your toolbar!

---

## 🧠 How It Works

- `performance.memory` is used to fetch the current JavaScript heap memory usage.
- Memory data is displayed using a progress bar with percentage and formatted text.
- The extension fetches all open tabs using the `chrome.tabs.query` API and displays them in a list.
- Clicking "Close Tab" sends a command to close that tab using `chrome.tabs.remove`.
- The **“Free Up Memory”** button reloads the extension popup, giving a fresh reading of memory usage.

---

## 📂 Folder Structure

memory-usage-tracker/
│
├── popup.html         # Extension popup interface
├── popup.js           # Handles logic for memory and tab management
├── popup.css          # Styling for the popup UI
├── manifest.json      # Extension configuration file (Manifest V3)

## 🤝 Contributing

Feel free to fork this project and improve it! Pull requests are welcome.

## 📜 License

This project is open-source and free to use.

