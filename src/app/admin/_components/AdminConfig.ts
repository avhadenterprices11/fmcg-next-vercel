
import {
    Home,
    LayoutDashboard,
    ShoppingCart,
    Image,
} from "lucide-react";

export type NavItem = {
    id: string;
    label: string;
    icon?: any;
    path?: string;
    submenu?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: Home,
        path: "/admin",
    },
    {
        id: "trade-offers",
        label: "Trade Offers",
        icon: ShoppingCart, // Using ShoppingCart as placeholder, similar to original config
        path: "/admin/trade-offers",
    },
    {
        id: "hero-banners",
        label: "Hero Banners",
        icon: Image,
        path: "/admin/hero-banners",
    },
    // Add more items here as needed for migration
];
