import { TradeOffersPage } from "@/components/pages/trade-opportunities/components/TradeOffersPage";
import { getTradeOffers } from "@/app/actions/trade-offers";

export default async function TradeOpportunitiesPage() {
    const { success, data: offers = [] } = await getTradeOffers(true); // activeOnly: true

    return <TradeOffersPage initialOffers={offers} />;
}
