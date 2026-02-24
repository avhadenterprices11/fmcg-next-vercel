import { Suspense } from "react";
import { getTradeOffers } from "@/app/actions/trade-offers";
import TradeOffersClient from "./client";
import { TradeOfferFormSkeleton } from "../_components/trade-offers/TradeOfferFormSkeleton";

async function TradeOffersContent() {
    const { success, data, error } = await getTradeOffers();

    if (!success) {
        return (
            <div className="p-4 text-red-500">
                Error loading trade offers: {error}
            </div>
        );
    }

    // Ensure data matches the interface expected by the client component
    // We might need to map or cast if the server action returns strict Mongoose documents
    const tradeOffers = data ? JSON.parse(JSON.stringify(data)) : [];

    return <TradeOffersClient initialData={tradeOffers} />;
}

export default function TradeOffersPage() {
    return (
        <Suspense fallback={<TradeOfferFormSkeleton />}>
            <TradeOffersContent />
        </Suspense>
    );
}
