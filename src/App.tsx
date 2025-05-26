
import './App.css'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from './components/AppSidebar'
import type { ReactNode } from 'react'

function App({children}: {children: ReactNode}) {
  return (
    <>
  <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </>
  )
}

export default App
