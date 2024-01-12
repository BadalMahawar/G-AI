"use client";



import Image from "next/image";
import Link from "next/link";
import React from "react";
const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-16 h-8">
                        <Image 
                        fill
                        src="/logo.png"
                        alt="Logo"
                        />
                    </div>
                    <div className="text-2xl font-bold">
                        <h1>G - AI</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;