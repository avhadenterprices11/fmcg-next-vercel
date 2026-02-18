"use client";

import React, { useState, useMemo } from "react";
import { GenericTable, ColumnConfig } from "../_components/data-table/GenericTable";
import { FiltersBar, FilterOption, SortOption } from "../_components/data-table/FiltersBar";
import { MetricsGrid, MetricItem } from "../_components/MetricsGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Layout, CheckCircle, Image as ImageIcon, Tag, Hash } from "lucide-react";
import { useRouter } from "next/navigation";
import { ICarousel as HeroBanner } from "@/models/Carousel";

interface HeroBannersClientProps {
    initialData: HeroBanner[];
}

export default function HeroBannersClient({ initialData }: HeroBannersClientProps) {
    const [data, setData] = useState<HeroBanner[]>(initialData);
    const [search, setSearch] = useState("");
    const router = useRouter();

    // Pagination state
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Sorting state
    const [sortKey, setSortKey] = useState<string>("order");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    // Filter state
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [layoutFilter, setLayoutFilter] = useState<string[]>([]);

    // Column visibility state
    const [columnsVisibility, setColumnsVisibility] = useState<Record<string, boolean>>({
        image: true,
        title: true,
        layout: true,
        status: true,
        order: true,
        actions: true
    });

    const toggleColumn = (key: string) => {
        setColumnsVisibility(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // --- FILTER & SORT LOGIC ---
    const filteredData = useMemo(() => {
        let result = [...initialData];

        // Search
        if (search) {
            const q = search.toLowerCase();
            result = result.filter(item =>
                item.title.toLowerCase().includes(q) ||
                (item.subtitle && item.subtitle.toLowerCase().includes(q))
            );
        }

        // Status Filter
        if (statusFilter.length > 0) {
            result = result.filter(item => statusFilter.includes(item.status));
        }

        // Layout Filter
        if (layoutFilter.length > 0) {
            result = result.filter(item => layoutFilter.includes(item.layout));
        }

        // Sort
        if (sortKey) {
            result.sort((a, b) => {
                const aValue = a[sortKey as keyof HeroBanner];
                const bValue = b[sortKey as keyof HeroBanner];

                if (aValue === bValue) return 0;

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return sortDirection === "asc"
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                }

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
                }

                return 0;
            });
        }

        return result;
    }, [initialData, search, statusFilter, layoutFilter, sortKey, sortDirection]);

    // --- PAGINATION LOGIC ---
    const paginatedData = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        return filteredData.slice(start, start + rowsPerPage);
    }, [filteredData, page, rowsPerPage]);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // --- CONFIGURATION ---
    const columns: ColumnConfig<HeroBanner>[] = [
        { key: "image", label: "Image", type: "image" as const, sortable: false },
        {
            key: "title",
            label: "Details",
            sortable: true,
            className: "font-medium",
            render: (val: unknown, row: HeroBanner) => (
                <div>
                    <div className="font-semibold text-foreground">{row.title}</div>
                    {row.subtitle && <div className="text-xs text-muted-foreground line-clamp-1">{row.subtitle}</div>}
                </div>
            )
        },
        {
            key: "layout",
            label: "Layout",
            sortable: true,
            render: (val: unknown) => (
                <Badge variant="outline" className="capitalize">
                    {String(val)}
                </Badge>
            )
        },
        {
            key: "order",
            label: "Order",
            sortable: true,
            className: "text-center",
            render: (val: unknown) => (
                <span className="font-mono text-xs">{String(val)}</span>
            )
        },
        {
            key: "status",
            label: "Status",
            type: "badge" as const,
            sortable: true,
            render: (val: unknown) => {
                const isActive = val === "active";
                return (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                        {String(val === "active" ? "Active" : "Draft")}
                    </span>
                )
            }
        }
    ].filter(col => columnsVisibility[String(col.key)] !== false);

    // Filter Options
    const statusOptions: FilterOption[] = [
        { label: "Active", value: "active", isActive: statusFilter.includes("active"), onSelect: (v) => setStatusFilter(prev => prev.includes(v) ? prev.filter(p => p !== v) : [...prev, v]) },
        { label: "Draft", value: "draft", isActive: statusFilter.includes("draft"), onSelect: (v) => setStatusFilter(prev => prev.includes(v) ? prev.filter(p => p !== v) : [...prev, v]) },
    ];

    const layoutOptions: FilterOption[] = ["norman", "found", "measured", "centered"].map(l => ({
        label: l.charAt(0).toUpperCase() + l.slice(1),
        value: l,
        isActive: layoutFilter.includes(l),
        onSelect: (v) => setLayoutFilter(prev => prev.includes(v) ? prev.filter(p => p !== v) : [...prev, v])
    }));

    const sortOptions: SortOption[] = [
        { label: "Order (Asc)", value: "order", direction: "asc", isActive: sortKey === "order" && sortDirection === "asc", onSelect: () => { setSortKey("order"); setSortDirection("asc"); } },
        { label: "Order (Desc)", value: "order", direction: "desc", isActive: sortKey === "order" && sortDirection === "desc", onSelect: () => { setSortKey("order"); setSortDirection("desc"); } },
        { label: "Title (A-Z)", value: "title", direction: "asc", isActive: sortKey === "title" && sortDirection === "asc", onSelect: () => { setSortKey("title"); setSortDirection("asc"); } },
    ];

    // --- METRICS ---
    const metrics: MetricItem[] = useMemo(() => {
        const total = initialData.length;
        const active = initialData.filter(i => i.status === 'active').length;
        const drafts = initialData.filter(i => i.status === 'draft').length;

        return [
            {
                title: "Total Banners",
                value: total,
                icon: ImageIcon,
                iconBg: "#EEF2FF",
                iconClass: "text-[#6366F1]",
            },
            {
                title: "Active Banners",
                value: active,
                icon: CheckCircle,
                iconBg: "#ECFDF5",
                iconClass: "text-[#10B981]",
            },
            {
                title: "Draft Banners",
                value: drafts,
                icon: Tag,
                iconBg: "#F3F4F6",
                iconClass: "text-[#6B7280]",
            },
            {
                title: "Avg Order",
                value: total > 0 ? (initialData.reduce((acc, curr) => acc + curr.order, 0) / total).toFixed(1) : 0,
                icon: Hash,
                iconBg: "#FFF7ED",
                iconClass: "text-[#F97316]",
            }
        ];
    }, [initialData]);

    const actions = [
        { label: "Add New Banner", icon: <Plus className="h-4 w-4" />, onClick: () => router.push("/admin/hero-banners/create") }
    ];

    return (
        <div className="space-y-6 max-w-[100vw] overflow-x-hidden p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Hero Banners</h1>
                    <p className="text-muted-foreground mt-1">
                        Manage your website's hero carousel and banners.
                    </p>
                </div>
                <Button onClick={() => router.push("/admin/hero-banners/create")}>
                    <Plus className="mr-2 h-4 w-4" /> Add Banner
                </Button>
            </div>

            <MetricsGrid metrics={metrics} />

            <FiltersBar
                search={search}
                onSearchChange={(s) => { setSearch(s); setPage(1); }}
                searchPlaceholder="Search banners..."
                filterGroups={[
                    { id: "status", label: "Status", options: statusOptions },
                    { id: "layout", label: "Layout", options: layoutOptions }
                ]}
                sortOptions={sortOptions}
                visibleColumns={[
                    { key: "image", label: "Image", visible: !!columnsVisibility.image },
                    { key: "title", label: "Title", visible: !!columnsVisibility.title },
                    { key: "layout", label: "Layout", visible: !!columnsVisibility.layout },
                    { key: "order", label: "Order", visible: !!columnsVisibility.order },
                    { key: "status", label: "Status", visible: !!columnsVisibility.status },
                ]}
                onToggleColumn={toggleColumn}
                actions={actions}
                onClearFilters={() => {
                    setSearch("");
                    setStatusFilter([]);
                    setLayoutFilter([]);
                    setPage(1);
                }}
            />

            <GenericTable
                data={paginatedData}
                loading={false}
                page={page}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                totalItems={filteredData.length}
                onPageChange={setPage}
                onRowsPerPageChange={(r) => { setRowsPerPage(r); setPage(1); }}
                getRowId={(row) => row._id as string}
                columns={columns}
                selectable={true}
                selectionMode="multiple"
                sortKey={sortKey}
                sortDirection={sortDirection}
                onSortChange={(key, dir) => { setSortKey(key); setSortDirection(dir); }}
                onRowClick={(row) => router.push(`/admin/hero-banners/${row._id}`)}
                rowActionsBuilder={(row) => [
                    { label: "Edit", onClick: () => router.push(`/admin/hero-banners/${row._id}`) }
                ]}
            />
        </div>
    );
}
