#!/bin/bash

echo "🚀 Setting up APJ Institute Website..."

# Navigate to client directory
cd client

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create Tailwind config
echo "🎨 Configuring Tailwind CSS..."
npx tailwindcss init -p

# Create necessary CSS file
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOF

# Create main.jsx if it doesn't exist
cat > src/main.jsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

# Create tailwind config
cat > tailwind.config.js << 'EOF'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create postcss config
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create vite config
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOF

# Create index.html
cat > index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>APJ Institute Dantewada</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. npm run dev     (Start development server)"
echo "   2. Open http://localhost:5173 in your browser"
echo ""
echo "📚 For more details, check NAVBAR_GUIDE.md"
