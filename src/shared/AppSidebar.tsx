import { Home, Rocket, Settings, Users } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { useLocation } from "react-router";

// Menu items.
const items = [
    {
        title: "Overview",
        url: "/overview",
        icon: Home,
    },
    {
        title: "Users",
        url: "/users",
        icon: Users,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]

export const AppSidebar = () => {
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center gap-2 border-b text-sm font-semibold">
                        <Rocket className="w-4 h-4" />
                        Vite+React Project</SidebarGroupLabel>
                    <SidebarGroupContent className="pt-4">
                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = location.pathname === item.url;

                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild
                                            className={` ${isActive
                                                ? "bg-blue-300 text-white hover:bg-blue-300 hover:text-white"
                                                : "hover:bg-blue-300 text-muted-foreground hover:text-white"
                                                }`}>
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
