"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface WhatsAppWidgetProps {
    phoneNumber?: string;
    companyName?: string;
    replyTimeText?: string;
    defaultMessage?: string;
}

export const WhatsAppWidget = ({
    phoneNumber = "8080217673",
    companyName = "FMCG Support",
    replyTimeText = "Typically replies in minutes",
    defaultMessage = "Hello! How can we help you today?",
}: WhatsAppWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false); // Feedback state
    const inputRef = useRef<HTMLInputElement>(null);

    // Show widget after delay
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Focus input when opening
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!message.trim()) return;

        const mode = process.env.NEXT_PUBLIC_WHATSAPP_MODE || 'link';

        if (mode === 'api') {
            setIsSending(true);
            try {
                const response = await fetch('/api/whatsapp/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message }),
                });

                if (response.ok) {
                    setIsSent(true);
                    setMessage("");
                    // Reset sent state after 2 seconds
                    setTimeout(() => setIsSent(false), 2000);
                } else {
                    console.error("Failed to send message via API");
                }
            } catch (error) {
                console.error("Error sending message:", error);
            } finally {
                setIsSending(false);
            }
        } else {
            // Phase 1: Direct Link Strategy
            const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
            setMessage(""); // Clear input
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">

                    {/* Chat Window */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="pointer-events-auto w-[320px] sm:w-[380px] bg-background border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                            >
                                {/* Header */}
                                <div className="bg-[#075E54] p-4 flex items-center justify-between text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075E54] rounded-full"></span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-base leading-tight">{companyName}</h3>
                                            <p className="text-xs text-white/80">{replyTimeText}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="flex-1 bg-[url('/whatsapp-bg.png')] bg-repeat bg-opacity-5 p-4 min-h-[250px] max-h-[400px] overflow-y-auto flex flex-col gap-4 relative">
                                    {/* Simulated Background Pattern (CSS fallback if image missing) */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />

                                    {/* Admin Message */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-white dark:bg-zinc-800 self-start rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 shadow-sm max-w-[85%] border border-border/5 text-sm"
                                    >
                                        <p className="text-foreground">{defaultMessage}</p>
                                        <span className="text-[10px] text-muted-foreground mt-1 block text-right">
                                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* input Area */}
                                <div className="p-3 bg-secondary/30 border-t border-border/50 flex items-center gap-2">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type a message..."
                                        className="flex-1 bg-background border border-border/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#25D366] transition-all"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!message.trim() || isSending}
                                        className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                                            message.trim()
                                                ? "bg-[#25D366] text-white hover:bg-[#20b858] shadow-md"
                                                : "bg-muted text-muted-foreground cursor-not-allowed",
                                            isSending && "opacity-70 cursor-wait"
                                        )}
                                    >
                                        {isSending ? (
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : isSent ? (
                                            <span className="text-white text-xs font-bold">✓</span>
                                        ) : (
                                            <Send className="w-4 h-4 ml-0.5" />
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating Action Button */}
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="pointer-events-auto w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white relative group transition-shadow hover:shadow-xl hover:shadow-[#25D366]/20"
                    >
                        {/* Tooltip */}
                        <AnimatePresence>
                            {isHovered && !isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, x: -5 }}
                                    className="absolute right-[110%] top-1/2 -translate-y-1/2 bg-background/90 text-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-md border border-border/50 whitespace-nowrap backdrop-blur-md"
                                >
                                    Chat with us
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Ping Animation */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>

                        {isOpen ? (
                            <X className="w-6 h-6 rotate-90 transition-transform duration-300" />
                        ) : (
                            <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" />
                        )}

                        {/* Notification Badge */}
                        {!isOpen && (
                            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
                        )}
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
};
