
import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './shared/AppSidebar'
import { Navigate, Route, Routes } from 'react-router'
import { Overview } from './pages/Overview'
import { Users } from './pages/Users'
import { Settings } from './pages/Settings'
import { ThemeProvider } from './shared/ThemeProvider/ThemeProvider'

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </SidebarProvider>
      </ThemeProvider>
  )
}

export default App
