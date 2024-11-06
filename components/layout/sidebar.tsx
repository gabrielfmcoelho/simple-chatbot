"use client";

import Icon from "@/components/icon";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";
import { page_routes } from "@/lib/routes-config";
import { ChevronRight, ChevronsUpDown, Sparkles } from "lucide-react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export default function Sidebar() {
  return (
    <SidebarContainer collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Logo className="me-2 group-data-[collapsible=icon]:me-0" />
                  <div className="truncate font-semibold group-data-[collapsible=icon]:hidden">
                    Shadcn UI Kit
                  </div>
                  <ChevronsUpDown className="ml-auto group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Ecommerce</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>CRM</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Web Analiytics</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea>
          {page_routes.map((route, key) => (
            <SidebarGroup key={key}>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {route.items.map((item, key) => (
                    <SidebarMenuItem key={key}>
                      {item.items?.length ? (
                        <Collapsible className="group/collapsible">
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={item.title}>
                              {item.icon && <Icon name={item.icon} className="h-4 w-4" />}
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.items.map((item2, key) => (
                                <SidebarMenuSubItem key={key}>
                                  <SidebarMenuSubButton asChild>
                                    <a href={item2.href}>
                                      {item2.icon && <Icon name={item2.icon} className="h-4 w-4" />}
                                      <span>{item2.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SidebarMenuButton asChild tooltip={item.title}>
                          <a href={item.href}>
                            {item.icon && <Icon name={item.icon} className="h-4 w-4" />}
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      )}
                      {item.isComing ? (
                        <SidebarMenuBadge className="opacity-50">Coming</SidebarMenuBadge>
                      ) : null}
                      {item.isNew ? (
                        <SidebarMenuBadge className="text-green-500 dark:text-green-200">
                          New
                        </SidebarMenuBadge>
                      ) : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <Card className="group-data-[collapsible=icon]:hidden">
          <CardHeader className="p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Get pro now to own all templates, components and pages for life.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button variant="secondary" className="w-full" asChild>
              <Link
                href="https://bundui.lemonsqueezy.com/buy/385ebdb6-6193-4d37-9148-057ab89b9c8d"
                target="_blank">
                <Sparkles className="me-2 size-4" />
                Upgrade Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </SidebarContainer>
  );
}
