"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function DigitalEnquiryForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-12 text-center space-y-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl"
            >
                <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Enquiry Received</h3>
                    <p className="text-muted-foreground max-w-sm">
                        Thank you for reaching out. Our strategy team will review your brand details and contact you within 24-48 hours.
                    </p>
                </div>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-bold text-emerald-500 hover:underline"
                >
                    Submit another enquiry
                </button>
            </motion.div>
        );
    }

    return (
        <section id="enquiry" className="relative py-24 bg-background">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Content Side */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Scale Your Brand?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Let’s build your digital ecosystem and drive consistent growth across regions. Provide some initial details and we will build a strategy tailored for your expansion.
                                </p>
                            </div>
                            
                            <div className="space-y-4 pt-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">Why brands work with us:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Strategy + Execution in one system",
                                        "Full implementation, not just consulting",
                                        "Built for multinodal scalability",
                                        "Performance-driven ROI focus",
                                        "Long-term growth partnership"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl border border-border/10 bg-muted/20 backdrop-blur-xl shadow-2xl space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Brand Name</label>
                                        <input required type="text" placeholder="Your Brand" className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Product Category</label>
                                        <input required type="text" placeholder="e.g. Beverages" className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Markets</label>
                                        <input type="text" placeholder="e.g. India" className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Target Markets</label>
                                        <input required type="text" placeholder="e.g. UK, EU, UAE" className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Website (If any)</label>
                                    <input type="url" placeholder="https://..." className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Monthly Budget Range</label>
                                    <select required defaultValue="" className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors appearance-none">
                                        <option value="" disabled>Select Range</option>
                                        <option value="starter">$1,000 - $3,000</option>
                                        <option value="growth">$3,000 - $10,000</option>
                                        <option value="scale">$10,000 +</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Requirements / Goals</label>
                                    <textarea required rows={4} placeholder="Describe your growth goals..." className="w-full bg-background border border-border/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-colors resize-none"></textarea>
                                </div>

                                <button 
                                    disabled={isLoading}
                                    type="submit" 
                                    className="w-full py-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Submit Brand Details
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
