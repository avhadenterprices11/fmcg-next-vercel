"use client";

import type { ReactNode } from 'react';
import { ArrowLeft, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StickyHeader } from './StickyHeader';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
    label: string;
    onClick?: () => void;
    active?: boolean;
}

interface PageHeaderProps {
    /** Page title (H1) */
    title: string;

    /** Optional subtitle or description */
    subtitle?: string;

    /** Breadcrumb items to display above title */
    breadcrumbs?: BreadcrumbItem[];

    /** Function to call when back button is clicked in the header */
    onBack?: () => void;

    /** Primary actions (rendered on the right) */
    actions?: ReactNode;

    /** Optional customized back button icon (default: ChevronLeft) */
    backIcon?: 'arrow' | 'chevron';

    /** Optional content to render next to the title (e.g. status badges) */
    titleSuffix?: ReactNode;

    /** Optional top offset for sticky positioning (default: 80px for admin header) */
    topOffset?: number;

    /** Additional className */
    className?: string;
}

/**
 * PageHeader
 * 
 * Standard page header component that includes:
 * - Sticky positioning
 * - Breadcrumbs
 * - Title & Subtitle
 * - Back button
 * - Action buttons
 */
export function PageHeader({
    title,
    subtitle,
    breadcrumbs,
    onBack,
    actions,
    backIcon = 'chevron',
    titleSuffix,
    topOffset = 70,
    className
}: PageHeaderProps) {
    const Icon = backIcon === 'arrow' ? ArrowLeft : ChevronLeft;

    return (
        <StickyHeader className={className} topOffset={topOffset}>
            <div className="space-y-4">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <div className="flex items-center gap-2 text-sm">
                        {breadcrumbs.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {index > 0 && <span className="text-muted-foreground">/</span>}
                                <button
                                    type="button"
                                    onClick={item.onClick}
                                    disabled={item.active || !item.onClick}
                                    className={cn(
                                        "transition-colors",
                                        item.active
                                            ? "text-foreground font-medium cursor-default"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Header Content */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        {/* Back Button */}
                        {onBack && (
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={onBack}
                                className="rounded-full h-10 w-10 shrink-0"
                            >
                                <Icon className="size-4" />
                            </Button>
                        )}

                        {/* Title & Subtitle */}
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-foreground mb-1">{title}</h1>
                                {subtitle && (
                                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                                )}
                            </div>
                            {titleSuffix && (
                                <div className="hidden lg:flex items-center gap-2">
                                    {titleSuffix}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    {actions && (
                        <div className="flex items-center gap-3">
                            {actions}
                        </div>
                    )}
                </div>
            </div>
        </StickyHeader>
    );
}
