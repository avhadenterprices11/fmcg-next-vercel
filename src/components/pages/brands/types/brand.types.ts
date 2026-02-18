export type TradeIntent = 'market-entry' | 'on-trade-cocktail' | 'export-portfolio' | 'private-label' | 'volume-strategic';

export interface Product {
    name: string;
    image: string;
    abv: string;
    size: string;
    description?: string;
}

export interface PortfolioRange {
    id: string;
    rangeName: string;
    categoryPath: string;
    tradePositioning: 'Core' | 'Premium' | 'Super-Premium' | 'Limited' | string;
    commonTradeUse: string[];
    typicalFormats: string[];
    regionalNote?: string;
    relevantFor: TradeIntent[];
}

export interface Brand {
    id: string;
    name: string;
    country: string;
    countryCode: 'uk' | 'france' | 'italy' | 'spain' | 'usa' | 'japan' | 'scotland' | 'ireland' | 'poland' | 'barbados' | 'mexico' | 'argentina' | 'new-zealand' | 'portugal' | 'germany';
    positioning: string;
    category: string;
    description: string;
    categoryFit: string[];
    tradeCapabilities: {
        exportAvailable: boolean;
        privateLabel: boolean;
        ukDistribution: boolean;
        euDistribution: boolean;
        onTradeFocused: boolean;
        offTradeFocused: boolean;
    };
    image?: string;
    products: Product[];
    portfolioRanges: PortfolioRange[];
    marketConsiderations: string[];
    tradeIntents: string[];
}
