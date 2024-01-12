"use client";



import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// generate routes array
const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
    },
    {
        label: "Image G-AI",
        icon: ImageIcon,
        href: "/image",
    },
    {
        label: "Video G-AI",
        icon: VideoIcon,
        href: "/video",
    },
    {
        label: "Music G-AI",
        icon: Music,
        href: "/music",
    },
    {
        label: "Code G-AI",
        icon: Code,
        href: "/code",
    },
    {
        label: "Setting",
        icon: Settings,
        href: "/setting",
    },
   
];

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="text-2xl font-bold">
                        <h1>G - AI</h1>
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.label}
                            href={route.href}
                            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                />
                                <span>{route.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;