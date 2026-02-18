import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export interface MobileRecordField {
    label: string;
    value: React.ReactNode;
}

export interface MobileRecordCardProps {
    title: string;
    subtitle?: string;
    primaryValue?: React.ReactNode;
    imageUrl?: string | null;
    badges?: React.ReactNode;
    fields?: MobileRecordField[];
    onClick?: () => void;
}

const MobileRecordCard: React.FC<MobileRecordCardProps> = ({
    title,
    subtitle,
    primaryValue,
    imageUrl,
    badges,
    fields = [],
    onClick,
}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            className={`
        bg-card rounded-2xl border border-border
        p-3 sm:p-4
        shadow-sm hover:shadow-md
        flex flex-col gap-3
        transition-all active:scale-[0.99]
        ${onClick ? 'cursor-pointer hover:bg-accent/50' : ''}
      `}
        >
            {/* HEADER */}
            <div className="flex items-start gap-3">
                {/* IMAGE */}
                {imageUrl && (
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                        {/* Using standard img for external URLs if not configured in next.config.js, 
                            otherwise use Image from next/image */}
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                )}

                {/* MAIN CONTENT */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground line-clamp-2 break-words">
                                {title}
                            </p>

                            {subtitle && (
                                <p className="mt-1 text-xs text-muted-foreground break-words">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        {/* EXPAND BUTTON */}
                        {fields.length > 0 && (
                            <button
                                type="button"
                                aria-expanded={expanded}
                                aria-label={expanded ? "Collapse details" : "Expand details"}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click
                                    setExpanded((prev) => !prev);
                                }}
                                className="
                  p-2 rounded-lg
                  text-muted-foreground hover:text-foreground
                  hover:bg-accent
                  transition-colors
                  shrink-0
                "
                            >
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ${expanded ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                        )}
                    </div>

                    {/* PRIMARY VALUE + BADGES */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        {primaryValue && (
                            <span className="text-sm font-semibold text-foreground">
                                {primaryValue}
                            </span>
                        )}
                        {badges}
                    </div>
                </div>
            </div>

            {/* EXPANDED DETAILS */}
            {expanded && fields.length > 0 && (
                <div className="pt-2 border-t border-border text-xs text-muted-foreground space-y-2">
                    {fields.map((field) => (
                        <div
                            key={field.label}
                            className="flex items-start justify-between gap-4"
                        >
                            <span className="font-medium text-muted-foreground shrink-0">
                                {field.label}
                            </span>
                            <span className="text-right break-words text-foreground">
                                {field.value}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export { MobileRecordCard };
