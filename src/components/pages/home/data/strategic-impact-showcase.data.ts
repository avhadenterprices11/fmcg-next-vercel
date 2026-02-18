import { ImpactShowcaseItem } from '../types/strategic-impact-showcase.types';

export const impactShowcaseItems: ImpactShowcaseItem[] = [

    {
        id: "spirits-liquors",
        title: "Spirits & Liquors",
        subtitle: "Distilled perfection",
        description: [
            "Whisky, vodka, gin, rum & tequila",
            "Liqueurs, aperitifs & RTD formats",
            "Premium, craft & private‑label spirits"
        ],
        image: "/categories/Product Categories/Spirits.jpg",
        tags: ["Premium", "Craft", "Global"]
    },
    {
        id: "wines-champagnes",
        title: "Wines & Champagnes",
        subtitle: "Vineyard excellence",
        description: [
            "Red, white & rosé wines from top regions",
            "Sparkling wines & Prosecco",
            "Champagne & premium cuvées",
            "Private‑label & bespoke bottlings"
        ],
        image: "/categories/Product Categories/Wine and Champagne.jpg",
        stats: [
            { label: "Regions", value: "40+" },
            { label: "Vintages", value: "Premium" }
        ],
        tags: ["Fine Wine", "Sparkling", "Cuvée"]
    },
     {
        id: "beers-craft",
        title: "Beers & Craft",
        subtitle: " artisanal & mainstream brews",
        description: [
            "Premium Lagers & Ales",
            "Craft Beer Selection",
            "Regional Specialties"
        ],
        image: "/categories/Product Categories/BEER and Cider.jpg",
        stats: [
            { label: "Varieties", value: "500+" },
            { label: "Breweries", value: "150+" }
        ],
        tags: ["Craft", "Lager", "Ale"]
    },
    {
        id: "speciality-beverages",
        title: "Speciality Beverages",
        subtitle: "Curated liquid refreshment",
        description: [
            "Soft drinks, juices & functional beverages",
            "Premium Mixers, tonics & soda waters",
            "Energy drinks & hydration solutions",
            "Alcohol‑free spirits alternatives"
        ],
        image: "/categories/Product Categories/Soft drink -Cocktail mixer tonic.jpg",
        tags: ["Functional", "Mixers", "Zero-Alc"]
    },
     {
        id: "food-grocery",
        title: "Food & Grocery",
        subtitle: "Essential Pantry Staples",
        description: [
            "Dry goods and pantry staples sourced globally",
            "Sweeteners and natural sugar alternatives",
            "Travel‑retail and duty‑free compliant SKUs"
        ],
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop",
        stats: [
            { label: "SKUs", value: "2000+" },
            { label: "Reach", value: "Global" }
        ],
        tags: ["Pantry", "Organic", "Staples"]
    }
    
    
];
