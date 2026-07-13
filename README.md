# EasyApply.ai

EasyApply.ai is an intelligent, AI-powered Chrome browser copilot designed to automate, parse, and streamline job application workflows. By leveraging local extraction models and intelligent form matching, the extension simplifies the process of completing online job applications across various job portals.

---

## 🚀 Features

- 🤖 AI-powered job application assistant
- 📝 Intelligent form parsing and autofill
- 🔍 Context-aware field matching
- 💻 Runs locally for privacy and performance
- 🌐 Works directly inside Google Chrome

---

# Installation

Follow the steps below to build and load the extension into Chrome.

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm
- Google Chrome

---

## Step 1: Build the Extension

Clone the repository and install dependencies.

```bash
npm install
```

Build the production version of the extension.

```bash
npm run build
```

This command compiles the React frontend along with the background AI parsing scripts and generates a production-ready build inside the `dist/` directory.

---

## Step 2: Open Chrome Extensions

Open Google Chrome and navigate to:

```
chrome://extensions
```

---

## Step 3: Enable Developer Mode

1. Locate the **Developer mode** toggle in the top-right corner.
2. Turn **Developer mode** **ON**.

---

## Step 4: Load the Extension

1. Click **Load unpacked**.
2. Browse to your local `easyapply-ai` project.
3. Select the generated **dist** folder.

```
easyapply-ai/
├── dist/
├── src/
├── package.json
└── ...
```

Chrome will install the extension.

---

## Step 5: Start Using EasyApply.ai

After installation:

- The **EasyApply.ai** extension will appear in your extensions list.
- Pin the extension to your Chrome toolbar for quick access.
- Browse supported job boards and launch the AI assistant whenever needed.

---

## Development

To start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

---

## Project Structure

```
easyapply-ai/
│
├── src/                # React application source
├── public/             # Static assets
├── dist/               # Production build (generated)
├── package.json
├── vite.config.js
└── README.md
```

---

## Technologies

- React
- TypeScript / JavaScript
- Chrome Extensions API
- AI-powered form parsing
- Local inference models

---

## Notes

- The `dist` directory is generated after running:

```bash
npm run build
```

- If the extension doesn't appear after loading, refresh the Extensions page and try loading the `dist` folder again.

---

## License

MIT License
