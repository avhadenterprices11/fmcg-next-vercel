import { Home, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface BreadcrumbItem {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
}

interface NavigationControlsProps {
    breadcrumbs: BreadcrumbItem[];
    onHome: () => void;
    className?: string;
}

export const NavigationControls = ({ breadcrumbs, onHome, className = "fixed top-6 left-6 md:top-8 md:left-8" }: NavigationControlsProps) => {
    // Using semantic tokens for theme adaptability
    const textColor = 'text-foreground';
    const borderColor = 'border-border';
    const hoverBg = 'hover:bg-accent';
    const separatorColor = 'text-muted-foreground';

    return (
        <div className={`${className} z-50 flex items-center gap-2 pointer-events-none`}>
            {/* Home Button - Enable pointer events */}
            <motion.button
                onClick={onHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 rounded-full border ${borderColor} ${textColor} ${hoverBg} backdrop-blur-md transition-colors pointer-events-auto shadow-sm`}
            >
                <Home size={18} />
            </motion.button>

            {/* Breadcrumbs */}
            <AnimatePresence mode="popLayout">
                {breadcrumbs.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-2 pointer-events-auto"
                    >
                        <ChevronRight size={14} className={separatorColor} />

                        <motion.button
                            onClick={item.onClick}
                            disabled={item.isActive}
                            whileHover={!item.isActive ? { scale: 1.02 } : {}}
                            className={`px-3 py-1.5 rounded-full backdrop-blur-md bg-background/50 border border-border/10 text-sm tracking-wide shadow-sm hover:shadow-md transition-all ${item.isActive ? 'font-bold bg-background/80' : 'font-medium opacity-80 hover:opacity-100 hover:bg-background/80'} ${textColor}`}
                        >
                            {item.label}
                        </motion.button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
