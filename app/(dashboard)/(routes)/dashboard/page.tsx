"use client"
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    },
    {
        label: "Image",
        icon: ImageIcon,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        href: "/image"
    },
    {
        label: "Video",
        icon: VideoIcon,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        href: "/video"
    },
    {
        label: "Music",
        icon: Music,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/music"
    },
    {
        label: "Code",
        icon: Code,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        href: "/code"
    },
];

const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explor the True Power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    G-AI is a leading AI website that generates diverse AI-based content, including images, videos, chat interactions, and code. Using advanced machine learning algorithms, the platform offers users a seamless and customizable experience for creating realistic and high-quality content across various domains.
                 </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool)=>
                (
                    <Card
                    onClick={()=>router.push(tool.href)}
                    key={tool.href}
                    className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-3">
                            <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default DashboardPage;