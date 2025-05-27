# 🧩 React Project – Form, Routing, and State Management

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/SynytskaK/vite-project.git
   cd vite-project
   ```
2. **Install dependencies**
   ```bash
    npm install
   ```
3. **Run the development server**
    ```bash
    npm run dev
    ```
4. **Open in your browser**
  ```bash
    Navigate to http://localhost:5173/
   ```

## 📁 Project Structure
```bash
.
├── pages/          # Main app pages (used for routing)
│   ├── Overview.tsx   # Home page
│   └── Users.tsx    
    └── Settings.tsx   
│
├── shared/         # Reusable components and constants
│   ├── components/ # UI components used across the app
│   └── constants/  # Field definitions, config values, etc.
│
├── App.tsx #entry point
 ```

## 🧠 Implementation Details
### ✅ Routing

Routing is handled through React-router. Each file in the pages/ folder represents a primary route or screen.

### ✅ State Management
Form state is managed using React Hook Form with Zod validation via zodResolver.

UI-level state (such as theme toggling or checkbox values) uses the standard useState hook.

Theme context is provided via a shadecn library ThemeProvider.

### ✅ Components
Reusable UI elements are placed in shared folder.

Field configurations and constants live in shared/constants.

Styled with Tailwind CSS and shadcn/ui for a modern UI.

Theme switching uses a <Switch> component with light/dark logic.

## 📝 Notes
Built with Vite for fast development and HMR.

Written in TypeScript for full type safety.

Modular structure for maintainability and scalability.

Follows modern React patterns (hooks, schema validation, reusable components).