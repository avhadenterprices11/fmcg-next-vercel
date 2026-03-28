"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
    Send, 
    CheckCircle2, 
    Zap, 
    Settings, 
    Globe, 
    BarChart, 
    Handshake, 
    ArrowUpRight,
    Loader2
} from "lucide-react";
import { PremiumSelect } from "@/components/ui/premium-select";

const REASONS = [
    {
        title: "Strategy + Execution",
        description: "Moving from theory to results with one unified system.",
        icon: Zap
    },
    {
        title: "Full Implementation",
        description: "We don't just consult; we build and manage your presence.",
        icon: Settings
    },
    {
        title: "Multinodal Scalability",
        description: "Built to drive consistent growth across multiple regions.",
        icon: Globe
    },
    {
        title: "ROI-Focused",
        description: "Performance-driven approach with a focus on your bottom line.",
        icon: BarChart
    },
    {
        title: "Growth Partnership",
        description: "A long-term commitment to your brand's global success.",
        icon: Handshake
    }
];

const BUDGET_OPTIONS = [
    { value: "starter", label: "$1,000 - $3,000" },
    { value: "growth", label: "$3,000 - $10,000" },
    { value: "scale", label: "$10,000 +" },
];

export default function DigitalEnquiryForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        brandName: "",
        category: "",
        currentMarkets: "",
        targetMarkets: "",
        website: "",
        budget: "",
        goals: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (isSubmitted) {
        return (
            <section className="relative py-24 bg-background">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto flex flex-col items-center justify-center p-20 text-center space-y-8 bg-card border border-emerald-500/20 rounded-[3rem] shadow-2xl shadow-emerald-500/5"
                    >
                        <div className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                            <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-bold tracking-tight">Strategy Request Received</h3>
                            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                                Our core strategy team is already reviewing your brand details. Expect a clinical analysis and growth roadmap within 24-48 hours.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-lg font-bold text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                        >
                            Submit another enquiry
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="enquiry" className="relative py-24 bg-background px-4">
            <div className="max-w-[1800px] mx-auto bg-card rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-border/50">
                <div className="grid lg:grid-cols-5 min-h-[800px]">
                    {/* Left Side - Info Side */}
                    <div className="lg:col-span-2 bg-muted/30 p-8 md:p-12 lg:p-16 flex flex-col relative overflow-hidden group">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-12">
                                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
                                    Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Scale</span> Your Brand?
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Let's build your digital ecosystem. Provide your details and we'll craft a strategy tailored for your global expansion.
                                </p>
                            </div>

                            <div className="space-y-8 grow">
                                {REASONS.map((reason, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-5"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center text-emerald-600 shadow-sm">
                                            <reason.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">{reason.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-snug">{reason.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 pt-12 border-t border-border/50">
                                <p className="text-sm text-muted-foreground">
                                    Trusted by brands across <span className="text-foreground font-bold italic">15+ Markets</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form Side */}
                    <div className="lg:col-span-3 bg-background p-8 md:p-12 lg:p-20 relative">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 ml-1 transition-colors group-focus-within:text-emerald-600">
                                        Brand Name
                                    </label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.brandName}
                                        onChange={(e) => handleInputChange("brandName", e.target.value)}
                                        placeholder="Your Brand" 
                                        className="w-full px-0 py-4 bg-transparent border-b-2 border-border transition-colors text-xl font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-emerald-500 rounded-none" 
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 ml-1 transition-colors group-focus-within:text-emerald-600">
                                        Product Category
                                    </label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.category}
                                        onChange={(e) => handleInputChange("category", e.target.value)}
                                        placeholder="e.g. Beverages" 
                                        className="w-full px-0 py-4 bg-transparent border-b-2 border-border transition-colors text-xl font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-emerald-500 rounded-none" 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 ml-1 transition-colors group-focus-within:text-emerald-600">
                                        Current Markets
                                    </label>
                                    <input 
                                        type="text" 
                                        value={formData.currentMarkets}
                                        onChange={(e) => handleInputChange("currentMarkets", e.target.value)}
                                        placeholder="e.g. India" 
                                        className="w-full px-0 py-4 bg-transparent border-b-2 border-border transition-colors text-xl font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-emerald-500 rounded-none" 
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 ml-1 transition-colors group-focus-within:text-emerald-600">
                                        Target Markets
                                    </label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.targetMarkets}
                                        onChange={(e) => handleInputChange("targetMarkets", e.target.value)}
                                        placeholder="e.g. UK, EU, UAE" 
                                        className="w-full px-0 py-4 bg-transparent border-b-2 border-border transition-colors text-xl font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-emerald-500 rounded-none" 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                                <div className="group">
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 ml-1 transition-colors group-focus-within:text-emerald-600">
                                        Website (Optional)
                                    </label>
                                    <input 
                                        type="url" 
                                        value={formData.website}
                                        onChange={(e) => handleInputChange("website", e.target.value)}
                                        placeholder="https://..." 
                                        className="w-full px-0 py-4 bg-transparent border-b-2 border-border transition-colors text-xl font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-emerald-500 rounded-none" 
                                    />
                                </div>
                                <div className="group">
                                    <PremiumSelect 
                                        label="Budget Range (Monthly)"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={(val) => handleInputChange("budget", val)}
                                        options={BUDGET_OPTIONS}
                                        placeholder="Select Range"
                                        className="z-20"
                                    />
                                </div>
                            </div>

                            <div className="group pt-4">
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 ml-1 transition-colors group-focus-within:text-emerald-600">
                                    Requirements / Goals
                                </label>
                                <textarea 
                                    required 
                                    rows={4} 
                                    value={formData.goals}
                                    onChange={(e) => handleInputChange("goals", e.target.value)}
                                    placeholder="Describe your growth goals and specific requirements..." 
                                    className="w-full px-0 py-4 bg-transparent border-b-2 border-border transition-colors text-xl leading-relaxed font-medium text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-emerald-500 rounded-none resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                                <p className="text-xs text-muted-foreground max-w-sm">
                                    By submitting this enquiry, you agree to our <span className="underline hover:text-emerald-600 cursor-pointer">Privacy Policy</span> and data processing terms.
                                </p>
                                <motion.button
                                    disabled={isLoading}
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full md:w-auto py-5 px-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/20 disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            Submit Brand Details
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
