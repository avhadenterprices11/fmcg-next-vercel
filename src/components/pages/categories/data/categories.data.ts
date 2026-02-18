import { CategoryTier1 } from "../types/category.types";

export const CATEGORIES: CategoryTier1[] = [
    {
        id: 'spirits',
        name: 'Spirits',
        image: 'https://images.unsplash.com/photo-1603227574074-ac767defcf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBzaGVsZiUyMHNwaXJpdHMlMjBib3R0bGVzfGVufDF8fHx8MTc2NjA3NjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        descriptor: 'Whisky, Vodka, Rum, Gin, Tequila, Cognac',
        tradeGuidance: 'Core category for premium trade, private label, and market entry programs.',
        gridArea: 'md:col-span-2 md:row-span-2', // Big feature card
        tier2: [
            {
                name: 'Whisky',
                tier3: ['Scotch', 'Irish', 'American', 'Japanese', 'World Whisky', 'Whisky Liqueur']
            },
            {
                name: 'Vodka',
                tier3: ['Plain', 'Flavoured', 'Vodka Liqueur']
            },
            {
                name: 'Rum',
                tier3: ['White', 'Spiced', 'Gold', 'Dark', 'Aged & Añejo', 'Flavoured', 'Rum Liqueur', 'Cachaça & Other Rum']
            },
            {
                name: 'Gin',
                tier3: ['Dry Gin', 'Old Tom', 'Genever', 'Sloe', 'Flavoured', 'Pink', 'Gin Liqueur']
            },
            {
                name: 'Tequila & Mezcal',
                tier3: ['Silver / Blanco / Plata', 'Reposado', 'Añejo', 'Flavoured Tequila', 'Mezcal']
            },
            {
                name: 'Cognac & Brandy',
                tier3: ['Cognac', 'Brandy', 'Armagnac']
            },
            {
                name: 'Liqueurs & Other Spirits',
                tier3: ['Absinthe', 'Amaretto', 'Anisette', 'Benedictine', 'Irish Cream', 'Sake', 'Sambuca', 'Schnapps', 'Flavoured Liqueur', 'Low & No Spirits', 'Other Spirits']
            }
        ]
    },
    {
        id: 'wine',
        name: 'Wine & Champagne',
        image: 'https://images.unsplash.com/photo-1734490037300-6ff9ffd4ed13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMGNlbGxhcnxlbnwxfHx8fDE3NjYwNzYyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        descriptor: 'Red, White, Rosé, Champagne, Sparkling',
        tradeGuidance: 'High-demand for premium import, market entry, and hospitality trade.',
        gridArea: 'md:col-span-1 md:row-span-2', // Tall vertical card
        tier2: [
            {
                name: 'Red Wine',
                tier3: ['Amarone', 'Barbera', 'Barossa Valley', 'Bobal', 'Cabernet Franc', 'Cabernet Sauvignon', 'Carignan', 'Carménère', 'Grenache', 'Lambrusco', 'Malbec', 'Merlot', 'Monastrell', 'Moscato', 'Nebbiolo', 'Piedmont Wine', 'Pinot Noir', 'Pinotage', 'Sangiovese', 'Shiraz', 'Sparkling Red Wine', 'Tempranillo', 'Zinfandel', 'Other Red Wine', 'Caladoc']
            },
            {
                name: 'White Wine',
                tier3: ['Albariño', 'Chardonnay', 'Garganega', 'Gewürztraminer', 'Marsanne', 'Muscat', 'Pinot Grigio', 'Other White Wines', 'Riesling', 'Sauvignon Blanc', 'Semillon', 'Silvaner', 'Sweet White Wine', 'Torrontés', 'Verdicchio', 'Viognier', 'Bacchus']
            },
            {
                name: 'Rosé Wine',
                tier3: ['Provence Rosé', 'Other Rosé Wine']
            },
            {
                name: 'Fortified Wine',
                tier3: ['Canned Wines', 'Dessert Wines', 'Madeira', 'Marsala', 'Mead', 'Mulled Wine', 'Port Wine', 'Sherry', 'Tonic Wine', 'Vermouth', 'Other Wines']
            },
            {
                name: 'Champagne & Sparkling',
                tier3: ['Champagne', 'Pink Champagne', 'Fruity Champagne', 'Elderflower Champagne', 'Sparkling Wine', 'Prosecco', 'Pink Prosecco', 'Flavoured Prosecco', 'Cava']
            }
        ]
    },
    {
        id: 'beer',
        name: 'Beer & Cider',
        image: 'https://images.unsplash.com/photo-1763819527425-544b6613336e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVyJTIwdGFwJTIwYm90dGxlc3xlbnwxfHx8fDE3NjYwNzYyODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        descriptor: 'Craft Beer, Lager, Ale, Cider, Kegs',
        tradeGuidance: 'Strong for bulk trade, clearance, and hospitality supply.',
        gridArea: 'md:col-span-1 md:row-span-1', // Standard card
        tier2: [
            {
                name: 'Beer',
                tier3: ['Alcoholic Ginger Beer', 'Beer Kegs', 'Ale and Bitter', 'Blond Beer', 'Craft Beers', 'Fruit Beer', 'Stout & Porter', 'Wheat / White Beer', 'Pale Ale', 'Lager & Pilsner']
            },
            {
                name: 'Cider',
                tier3: ['Apple Cider', 'Cloudy Cider', 'Dry Cider', 'Fruit & Flavoured Cider', 'Medium Cider', 'Pear Cider & Perry', 'Rose Cider', 'Scrumpy', 'Sweet Cider']
            }
        ]
    },
    {
        id: 'cocktails',
        name: 'Cocktail & Mixers',
        image: 'https://images.unsplash.com/photo-1761250385211-08b16b58d5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMHNldHVwfGVufDF8fHx8MTc2NjA3NjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        descriptor: 'RTD Cocktails, Mixers, Tonics, Soft Drinks',
        tradeGuidance: 'Essential for cocktail programs, on-trade, and hospitality.',
        gridArea: 'md:col-span-2 md:row-span-1', // Wide card
        tier2: [
            {
                name: 'Ready Made Cocktails',
                tier3: ['Canned & RTD', 'Hard Seltzers', 'Premixed Cocktails', 'Frozen Cocktails', 'Cocktail Kits']
            },
            {
                name: 'Cocktail Essentials',
                tier3: ['Bitters', 'Garnishes', 'Purees', 'Syrups']
            },
            {
                name: 'Soft Drinks & Mixers',
                tier3: ['Cola', 'Energy Drinks', 'Ginger Ale', 'Ginger Beer', 'Juice', 'Lemonade', 'Soda Water', 'Other Soft Drinks']
            },
            {
                name: 'Tonics',
                tier3: ['Flavoured', 'Indian', 'Light Tonics', 'Mediterranean']
            },
            {
                name: 'Water',
                tier3: ['Still Water', 'Sparkling & Carbonated Water', 'Flavoured Water']
            }
        ]
    }
];
