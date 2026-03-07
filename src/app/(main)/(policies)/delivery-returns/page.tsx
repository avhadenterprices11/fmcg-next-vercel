"use client";

import { LegalLayout } from "@/components/pages/legal/components/LegalLayout";
import { Truck } from "lucide-react";
import { DELIVERY_SECTIONS } from "@/components/pages/legal/data/delivery.data";

export default function DeliveryReturnsPage() {
    return (
        <LegalLayout
            title="Delivery & Returns"
            lastUpdated="January 14, 2026"
            sections={DELIVERY_SECTIONS}
            icon={<Truck className="w-6 h-6" />}
        >
            <p>
                These policies govern the shipment and return of goods purchased through OSMO.
                As a B2B platform, our terms may differ from standard consumer rights. Please read carefully.
            </p>
        </LegalLayout>
    );
}
