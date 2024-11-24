import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { router, usePage } from '@inertiajs/react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import logo from "@/shared/assets/logo.svg";
import { useModal } from "@/context/modal-context";
import { navigationOptions } from "@/shared/navigation/domain/NavigationOptions";
import { Icon } from "@/components/ui/icon";

export function AppSidebar() {
    const { url, props } = usePage();
    const user = props.auth.user;
    const { t } = useTranslation();           
  
  const { setOpenModal } = useModal();

    const onOptionClick = async (url: (typeof navigationOptions)[number]["url"]) => {
        return (user || url === "/explore") ? router.visit(url) : setOpenModal("auth");
    };

  return (
    <Sidebar className="z-20 bg-white">
      <SidebarContent className="z-20 bg-white">
        <SidebarHeader>
          <img src={logo} alt="Logo" className="w-10 h-10 mx-auto mt-2" />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationOptions.map((item) => {
                const isActive = url.includes(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="flex-col h-14">
                      <button onClick={() => onOptionClick(item.url)} className="gap-y-1">
                        <Icon
                          name={isActive ? item.activeIcon : item.icon}
                          size={0.85}
                          className={clsx(isActive ? "text-indigo-500" : "text-neutral-500")}
                        />
                        <span
                          className={clsx(
                            isActive ? "text-indigo-500" : "text-neutral-500",
                            "text-xs font-bold"
                          )}
                        >
                          {t(item.title)}
                        </span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
