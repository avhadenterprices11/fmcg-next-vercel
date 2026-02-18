"use client";

import React, { useEffect } from "react";
import { ChevronRight, ChevronDown, Settings, Home, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "./AdminConfig";
import type { NavItem } from "./AdminConfig";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/* ============================================================
   Types
============================================================ */

interface SidebarProps {
    isCollapsed: boolean;
    expandedMenus: string[];
    setExpandedMenus: React.Dispatch<React.SetStateAction<string[]>>;
}

/* ============================================================
   Component
============================================================ */

export function Sidebar({
    isCollapsed,
    expandedMenus,
    setExpandedMenus,
}: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();

    /* ============================================================
         Active Route Sync
      ============================================================ */

    const activeMenuId = React.useMemo(() => {
        let bestMatch: { id: string; length: number } | null = null;

        const checkItem = (item: NavItem) => {
            if (item.path && (pathname === item.path || pathname.startsWith(item.path + "/"))) {
                const len = item.path.length;
                if (!bestMatch || len > bestMatch.length) {
                    bestMatch = { id: item.id, length: len };
                }
            }
            if (item.submenu) {
                item.submenu.forEach(checkItem);
            }
        };

        NAV_ITEMS.forEach(checkItem);

        // Fallback or explicit check for exact root? 
        // If we are exactly at /admin, bestMatch will be dashboard.
        // If we are at /admin/unknown, bestMatch will be dashboard (shortest match).

        return bestMatch?.id ?? "dashboard";
    }, [pathname]);

    /* Auto-expand parent when child is active */
    useEffect(() => {
        NAV_ITEMS.forEach((item) => {
            if (
                item.submenu?.some((sub) => sub.id === activeMenuId) &&
                !expandedMenus.includes(item.id)
            ) {
                setExpandedMenus((prev) => [...prev, item.id]);
            }
        });
    }, [activeMenuId, expandedMenus, setExpandedMenus]);

    /* ============================================================
         Handlers
      ============================================================ */

    const toggleMenu = (id: string) => {
        if (isCollapsed) return;
        setExpandedMenus((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const HomeIcon = Home;

    /* ============================================================
         Helper Components
      ============================================================ */

    const NavItemButton = ({
        item,
        isActive,
        isChild = false,
        onClick,
    }: {
        item: NavItem;
        isActive: boolean;
        isChild?: boolean;
        onClick: () => void;
    }) => {
        const Icon = item.icon;

        const content = (
            <button
                onClick={onClick}
                className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                    // Base Text Color
                    "text-[var(--sidebar-text)]",
                    // Hover State
                    "hover:bg-[var(--sidebar-hover)] hover:text-[var(--text-white)]",
                    // Active State
                    isActive && "bg-[var(--sidebar-active)] text-[var(--text-white)] font-medium shadow-sm",
                    // Child Padding
                    isChild && !isCollapsed && "pl-11",
                    // Collapsed specific centering
                    isCollapsed && "justify-center px-0"
                )}
            >
                {/* Active Indicator Line (Left) - Optional purely visual accent */}
                {isActive && !isCollapsed && !isChild && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--primary-light)] rounded-r-md opacity-0 animate-in fade-in zoom-in duration-300 fill-mode-forwards" />
                )}

                {Icon && (
                    <Icon
                        className={cn(
                            "w-5 h-5 transition-transform duration-200",
                            // Hover effect on icon
                            "group-hover:scale-110",
                            isActive && "text-[var(--text-white)]"
                        )}
                    />
                )}

                {!isCollapsed && (
                    <span className="flex-1 text-left truncate text-sm tracking-wide">
                        {item.label}
                    </span>
                )}

                {!isCollapsed && item.submenu && (
                    expandedMenus.includes(item.id) ? (
                        <ChevronDown className="w-4 h-4 opacity-50" />
                    ) : (
                        <ChevronRight className="w-4 h-4 opacity-50" />
                    )
                )}
            </button>
        );

        if (isCollapsed) {
            return (
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>{content}</TooltipTrigger>
                    <TooltipContent side="right" className="font-medium bg-[var(--sidebar-active)] text-[var(--text-white)] border-[var(--sidebar-border)]">
                        {item.label}
                    </TooltipContent>
                </Tooltip>
            );
        }

        return content;
    };

    /* ============================================================
         Render
      ============================================================ */

    return (
        <TooltipProvider>
            <aside
                className={cn(
                    "flex flex-col h-[calc(100vh-16px)] m-2 transition-all duration-300 ease-in-out",
                    "bg-[var(--sidebar-bg)] border border-[var(--sidebar-border)] shadow-xl",
                    "rounded-2xl backdrop-blur-xl", // Glassmorphism hint
                    isCollapsed ? "w-[80px]" : "w-[280px]"
                )}
            >
                {/* ======================================================
                FIXED TOP — LOGO + DASHBOARD
            ====================================================== */}
                <div className="flex-none p-4 space-y-6">
                    {/* Logo Area */}
                    <div className={cn(
                        "flex items-center h-10 transition-all duration-300",
                        isCollapsed ? "justify-center" : "px-2"
                    )}>
                        <div className="flex items-center gap-3">
                            {/* Placeholder Logo Icon/Text */}
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary-purple)] flex items-center justify-center text-white font-bold text-xs shadow-lg">
                                AE
                            </div>
                            {!isCollapsed && (
                                <span className={cn(
                                    "font-bold text-lg tracking-tight text-[var(--text-white)]",
                                    "animate-in fade-in slide-in-from-left-2 duration-300"
                                )}>
                                    ADMIN
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Dashboard Button */}
                    <NavItemButton
                        item={{ id: "dashboard", label: "Dashboard", icon: HomeIcon, path: "/admin" }}
                        isActive={activeMenuId === "dashboard"}
                        onClick={() => router.push("/admin")}
                    />
                </div>

                {/* ======================================================
                SCROLLABLE MIDDLE
            ====================================================== */}
                <div className="flex-1 overflow-y-auto px-4 space-y-1 custom-scrollbar">
                    {/* Section Label */}
                    {!isCollapsed && (
                        <div className="px-3 py-2 text-xs font-semibold text-[var(--sidebar-text)] uppercase tracking-wider opacity-60">
                            Management
                        </div>
                    )}

                    <nav className="space-y-1">
                        {NAV_ITEMS.slice(1).map((item) => {
                            const submenu = item.submenu;
                            // Check if this item or any of its children are active
                            const isChildActive = submenu?.some((sub) => sub.id === activeMenuId);
                            const isActive = activeMenuId === item.id || isChildActive;

                            return (
                                <div key={item.id} className="space-y-1">
                                    <NavItemButton
                                        item={item}
                                        isActive={!!isActive} // strict boolean
                                        onClick={() => {
                                            if (item.path) router.push(item.path);
                                            if (submenu) toggleMenu(item.id);
                                        }}
                                    />

                                    {/* Submenu */}
                                    {!isCollapsed && submenu && (
                                        <div
                                            className={cn(
                                                "overflow-hidden transition-all duration-300 ease-in-out",
                                                expandedMenus.includes(item.id)
                                                    ? "max-h-[500px] opacity-100"
                                                    : "max-h-0 opacity-0"
                                            )}
                                        >
                                            <div className="space-y-1 mt-1 relative">
                                                {/* Connecting Line */}
                                                <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--sidebar-border)] opacity-30" />

                                                {submenu.map((sub) => (
                                                    <NavItemButton
                                                        key={sub.id}
                                                        item={sub}
                                                        isActive={activeMenuId === sub.id}
                                                        isChild
                                                        onClick={() => router.push(sub.path!)}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>

                {/* ======================================================
                FIXED BOTTOM — SETTINGS & PROFILE
            ====================================================== */}
                <div className="p-4 mt-auto">
                    <div className="space-y-1">
                        <NavItemButton
                            item={{ id: "settings", label: "Settings", icon: Settings, path: "/admin/settings" }}
                            isActive={activeMenuId === "settings"}
                            onClick={() => router.push("/admin/settings")}
                        />
                        {/* Logout - Optional, just visual for now */}
                        <button
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                                "text-[var(--sidebar-text)] hover:bg-[var(--destructive)]/10 hover:text-[var(--destructive)]",
                                isCollapsed && "justify-center"
                            )}
                        >
                            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            {!isCollapsed && <span className="text-sm font-medium">Log out</span>}
                        </button>
                    </div>
                </div>
            </aside>
        </TooltipProvider>
    );
}
