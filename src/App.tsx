
import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './shared/AppSidebar'
import { Navigate, Route, Routes } from 'react-router'
import { Overview } from './pages/Overview'
import { Users } from './pages/Users'
import { Settings } from './pages/Settings'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
