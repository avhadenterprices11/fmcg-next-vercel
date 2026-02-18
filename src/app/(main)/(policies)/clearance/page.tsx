"use client";

import { LegalLayout } from "@/components/pages/legal/components/LegalLayout";
import { ShoppingBag } from "lucide-react";
import { CLEARANCE_SECTIONS } from "@/components/pages/legal/data/clearance.data";

export default function ClearancePage() {
    return (
        <LegalLayout
            title="Short Date & Clearance"
            lastUpdated="January 14, 2026"
            sections={CLEARANCE_SECTIONS}
            icon={<ShoppingBag className="w-6 h-6" />}
        >
            <p>
                Our Clearance and Short Date Inventory Policy outlines the terms for purchasing discounted stock with limited shelf life.
                These offers provide significant value but come with specific conditions of sale.
            </p>
        </LegalLayout>
    );
}
