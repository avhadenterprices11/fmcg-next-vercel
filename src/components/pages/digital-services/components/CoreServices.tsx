"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { 
    Layout, 
    TrendingUp, 
    Palette, 
    ShoppingCart, 
    Settings, 
    Globe2, 
    ArrowUpRight,
    Search,
    Video,
    Share2,
    BarChart
} from "lucide-react";

const SERVICES = [
    {
        title: "Digital Strategy & Foundation",
        subtitle: "The base for scalable growth",
        icon: Layout,
        features: ["Website Development", "Marketplace Setup", "Conversion Pages", "Platform Architecture"],
        color: "emerald"
    },
    {
        title: "Growth & Performance",
        subtitle: "Driving demand & acquisition",
        icon: TrendingUp,
        features: ["Performance Marketing", "Social Media Management", "Influencer Collaborations", "Campaign Strategy"],
        color: "blue"
    },
    {
        title: "Branding & Creative",
        subtitle: "How your brand performs visually",
        icon: Palette,
        features: ["Graphic Design", "Video Production", "Content Creation", "Brand Identity"],
        color: "purple"
    },
    {
        title: "E-commerce Management",
        subtitle: "End-to-end store optimization",
        icon: ShoppingCart,
        features: ["Store Optimization", "Catalog Management", "CRO Strategy", "Performance Tracking"],
        color: "amber"
    },
    {
        title: "Digital Operations",
        subtitle: "We run your digital engine",
        icon: Settings,
        features: ["Platform Management", "Campaign Scaling", "Content Pipelines", "Customer Journey"],
        color: "pink"
    },
    {
        title: "Market Expansion",
        subtitle: "Multi-region scaling frameworks",
        icon: Globe2,
        features: ["Market Entry Strategy", "Localized Positioning", "Region Scaling", "Demand Creation"],
        color: "cyan"
    }
];

export default function CoreServices() {
    return (
        <section id="services" className="relative py-24 bg-background">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#10b9810a,transparent_50%)] pointer-events-none" />

            <div className="container relative z-10 px-4">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full border border-border/10 bg-muted/30 text-xs font-bold uppercase tracking-widest"
                    >
                        Core Capabilities
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
                    >
                        Precision-Built <br />
                        <span className="text-emerald-500">Service Ecosystem</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-muted-foreground max-w-2xl"
                    >
                        A complete suite of digital solutions designed to work in synergy, 
                        transforming your brand into a scalable market leader.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border/10 rounded-3xl overflow-hidden bg-background/50 backdrop-blur-sm">
                    {SERVICES.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="group relative p-10 lg:p-12 border border-border/10 hover:bg-muted/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative Background Accent */}
                            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-${service.color}-500/5 rounded-full blur-3xl group-hover:bg-${service.color}-500/10 transition-colors duration-500`} />
                            
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-start justify-between">
                                    <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/10 border border-${service.color}-500/20 flex items-center justify-center text-${service.color}-500 group-hover:scale-110 transition-transform duration-500`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed h-10">
                                        {service.subtitle}
                                    </p>
                                </div>

                                <ul className="space-y-4 pt-6 mt-6 border-t border-border/10">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Reveal Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground">
                        Looking for a custom solution? <Link href="#enquiry" className="text-emerald-500 hover:underline font-bold">Contact our strategy team</Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function Link({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}
