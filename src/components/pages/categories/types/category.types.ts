export interface CategoryTier3 {
    name: string;
}

export interface CategoryTier2 {
    name: string;
    tier3?: string[];
}

export interface CategoryTier1 {
    id: string;
    name: string;
    image: string;
    descriptor: string;
    tradeGuidance: string;
    tier2: CategoryTier2[];
    gridArea?: string;
}
