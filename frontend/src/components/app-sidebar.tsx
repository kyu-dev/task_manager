import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>Dashboard</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>Profil</SidebarMenuButton>
          </SidebarMenuItem>
          {/* Ajoutez d'autres éléments de menu selon vos besoins */}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
