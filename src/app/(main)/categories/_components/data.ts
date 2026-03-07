import { CategoryTier1, Brand } from './types';

// ------------------------------------------------------------------
// 1. CATEGORY HIERARCHY (Navigation)
// ------------------------------------------------------------------

export const CATEGORIES: CategoryTier1[] = [
    {
        id: 'spirits',
        name: 'Spirits',
        image: '/categories/Product Categories/Spirits.jpg',
        descriptor: 'Whisky, Vodka, Rum, Gin, Tequila, Cognac',
        tradeGuidance: 'Core category for premium trade, private label, and market entry programs.',
        gridArea: 'md:col-span-2 md:row-span-2',
        isTrending: true,
        isGlobal: true,
        tier2: [
            {
                id: 'whisky',
                name: 'Whisky',
                image: '/categories/Spirits/Whisky/Scotch Whisky.png',
                description: 'Aged grain spirit distilled in oak casks.',
                tier3: [
                    { id: 'scotch', name: 'Scotch', image: '/categories/Spirits/Whisky/Scotch Whisky.png', description: 'Whisky made in Scotland.' },
                    { id: 'irish', name: 'Irish', image: '/categories/Spirits/Whisky/Jameson Irish Whiskey.webp', description: 'Smooth, triple-distilled whiskey from Ireland.' },
                    { id: 'american', name: 'American', image: '/categories/Spirits/Whisky/Jim beam amwrican whicsky.jpg', description: 'Bourbon and Rye whiskies from the USA.' },
                    { id: 'japanese', name: 'Japanese', image: '/categories/Spirits/Whisky/Hibiki japnees Whisky.jpg', description: 'Precision-crafted whiskies from Japan.' },
                    { id: 'world-whisky', name: 'World Whisky', image: '/categories/Spirits/Whisky/World Whiskyy.jpg', description: 'Emerging whisky regions including Australia and Taiwan.' }
                ]
            },
            {
                id: 'vodka',
                name: 'Vodka',
                image: '/categories/Spirits/Vodka/plain Vodka.webp',
                description: 'Clear, distilled spirit known for its purity.',
                tier3: [
                    { id: 'plain-vodka', name: 'Plain', image: '/categories/Spirits/Vodka/plain Vodka.webp', description: 'Unflavoured, pure vodka.' },
                    { id: 'flavoured-vodka', name: 'Flavoured', image: '/categories/Spirits/Vodka/Aperol Flavoured Liqueurs.webp', description: 'Infused with fruits, herbs, or spices.' }
                ]
            },
            {
                id: 'rum',
                name: 'Rum',
                image: '/categories/Spirits/Rum/Gold rum.webp',
                description: 'Made from sugarcane molasses or juice.',
                tier3: [
                    { id: 'white-rum', name: 'White', image: '/categories/Spirits/Rum/White Rm.jpg', description: 'Clear rum, often used in cocktails.' },
                    { id: 'spiced-rum', name: 'Spiced', image: '/categories/Spirits/Rum/Spiced rum.jpg', description: 'Flavoured with spices and caramel.' },
                    { id: 'aged-rum', name: 'Aged & Dark', image: '/categories/Spirits/Rum/Gold rum.webp', description: 'Matured in barrels for complexity.' }
                ]
            },
            {
                id: 'gin',
                name: 'Gin',
                image: '/categories/Live Trade Opportunities/Hendricks London Dry Gin.webp',
                description: 'Distilled spirit with juniper berry flavour.',
                tier3: [
                    { id: 'london-dry', name: 'London Dry', image: '/categories/Spirits/Gin/London Dry (Gin).jpg', description: 'Classic, juniper-forward style.' },
                    { id: 'flavoured-gin', name: 'Flavoured & Pink', image: '/categories/Spirits/Gin/Flavoured Gin.webp', description: 'Infused with fruit for colour and taste.' },
                    // { id: 'craft-gin', name: 'Craft Gin', image: '/categories/Spirits/Gin/London Dry (Gin).jpg', description: 'Small-batch artisanal gins.' }
                ]
            },
            {
                id: 'tequila-mezcal',
                name: 'Tequila & Mezcal',
                image: '/categories/Spirits/Tequila & Mezcal/Blanco.jpg',
                description: 'Agave-based spirits from Mexico.',
                tier3: [
                    { id: 'blanco', name: 'Blanco / Silver', image: '/categories/Spirits/Tequila & Mezcal/Blanco.jpg', description: 'Unaged tequila.' },
                    { id: 'reposado', name: 'Reposado', image: '/categories/Spirits/Tequila & Mezcal/Reposado.jpg', description: 'Aged for 2-12 months.' },
                    { id: 'mezcal', name: 'Mezcal', image: '/categories/Spirits/Tequila & Mezcal/Anejo.jpg', description: 'Smoky agave spirit.' }
                ]
            },
            {
                id: 'cognac-brandy',
                name: 'Cognac & Brandy',
                image: '/categories/Spirits/Cognac & Brandy/Cognac.jpg',
                description: 'Distilled wine aged in wooden casks.',
                tier3: [
                    { id: 'cognac', name: 'Cognac', image: '/categories/Spirits/Cognac & Brandy/Cognac.jpg', description: 'Brandy from the Cognac region of France.' },
                    { id: 'brandy', name: 'Brandy', image: '/categories/Spirits/Cognac & Brandy/Brandy.avif', description: 'Distilled wine spirit.' }
                ]
            },
            {
                id: 'liqueurs',
                name: 'Liqueurs',
                image: '/categories/Spirits/Whisky/Whisky liQUEUR.jpeg',
                description: 'Sweetened spirits with various flavours.',
                tier3: [
                    { id: 'amaretto', name: 'Amaretto', image: '/categories/Spirits/Whisky/Whisky liQUEUR.jpeg', description: 'Almond-flavoured Italian liqueur.' },
                    { id: 'cream-liqueur', name: 'Cream Liqueur', image: '/categories/Spirits/Vodka/Aperol Flavoured Liqueurs.webp', description: 'Liqueur with dairy cream.' },
                    { id: 'herbal-liqueur', name: 'Herbal', image: '/categories/Spirits/Vodka/Aperol Flavoured Liqueurs.webp', description: 'Liqueur flavoured with herbs.' }
                ]
            }
        ]
    },
    {
        id: 'wine',
        name: 'Wine & Champagne',
        image: '/categories/Product Categories/Wine and Champagne.jpg',
        descriptor: 'Red, White, Rosé, Champagne, Sparkling',
        tradeGuidance: 'High-demand for premium import, market entry, and hospitality trade.',
        gridArea: 'md:col-span-1 md:row-span-2',
        isGlobal: true,
        tier2: [
            {
                id: 'red-wine',
                name: 'Red Wine',
                image: '/categories/Wine & Champagne/Red Wine/REd Wine.webp',
                description: 'Wine made from dark-coloured grape varieties.',
                tier3: [
                    { id: 'malbec', name: 'Malbec', image: '/categories/Wine & Champagne/Red Wine/Malbac.jpg', description: 'Full-bodied red wine.' },
                    { id: 'cabernet-sauvignon', name: 'Cabernet Sauvignon', image: '/categories/Wine & Champagne/Red Wine/Cabernet Sauvignon.webp', description: 'Popular, bold red wine.' },
                    { id: 'chianti', name: 'Chianti / Sangiovese', image: '/categories/Wine & Champagne/Red Wine/Chianti Sangiovese 1.jpg', description: 'Italian red wine.' },
                    { id: 'pinot-noir', name: 'Pinot Noir', image: '/categories/Wine & Champagne/Red Wine/REd Wine.webp', description: 'Light-bodied red wine.' }
                ]
            },
            {
                id: 'white-wine',
                name: 'White Wine',
                image: '/categories/Wine & Champagne/White Wine/Sauvignon Blanco.webp',
                description: 'Wine produced without grape skin contact.',
                tier3: [
                    { id: 'sauvignon-blanc', name: 'Sauvignon Blanc', image: '/categories/Wine & Champagne/White Wine/Sauvignon Blanco.webp', description: 'Crisp, acidic white wine.' },
                    { id: 'chardonnay', name: 'Chardonnay', image: '/categories/Wine & Champagne/White Wine/Sauvignon Blanco.webp', description: 'Versatile white wine.' },
                    { id: 'pinot-grigio', name: 'Pinot Grigio', image: '/categories/Wine & Champagne/Red Wine/Pinot Grigio (1).webp', description: 'Light, zest white wine.' }
                ]
            },
            {
                id: 'rose-wine',
                name: 'Rosé Wine',
                image: '/categories/Wine & Champagne/Rose wine/Provence Rose.webp',
                description: 'Pink wine from red grapes.',
                tier3: [
                    { id: 'provence-rose', name: 'Provence Rosé', image: '/categories/Wine & Champagne/Rose wine/Provence Rose.webp', description: 'Dry, pale pink wine.' }
                ]
            },
            {
                id: 'sparkling',
                name: 'Champagne & Sparkling',
                image: '/categories/Champagne & Sparkling/Sparkling Wine.webp',
                description: 'Carbonated wine.',
                tier3: [
                    { id: 'champagne', name: 'Champagne', image: '/categories/Champagne & Sparkling/Champagne.jpg', description: 'French sparkling wine.' },
                    { id: 'prosecco', name: 'Prosecco', image: '/categories/Wine & Champagne/Champagen & Sparking/Prosecco.jpg', description: 'Italian sparkling wine.' },
                    { id: 'cava', name: 'Cava', image: '/categories/Wine & Champagne/Champagen & Sparking/Cava.jpg', description: 'Spanish sparkling wine.' }
                ]
            },
            {
                id: 'fortified',
                name: 'Fortified Wine',
                image: '/categories/Wine & Champagne/Fortified Wine/Port.webp',
                description: 'Wine with added spirit.',
                tier3: [
                    { id: 'port', name: 'Port', image: '/categories/Wine & Champagne/Fortified Wine/Port.webp', description: 'Sweet fortified wine from Portugal.' },
                    { id: 'sherry', name: 'Sherry', image: '/categories/Wine & Champagne/Fortified Wine/Sherry.jpg', description: 'Fortified wine from Spain.' }
                ]
            }
        ]
    },
    {
        id: 'beer',
        name: 'Beer & Cider',
        image: '/categories/Product Categories/BEER and Cider.jpg',
        descriptor: 'Craft Beer, Lager, Ale, Cider',
        tradeGuidance: 'Strong for bulk trade, clearance, and hospitality supply.',
        gridArea: 'md:col-span-1 md:row-span-1',
        isNew: true,
        tier2: [
            {
                id: 'beer',
                name: 'Beer',
                image: '/categories/Beer & Cider/Beer ]/Larger.jpg',
                description: 'Brewed cereal grain beverage.',
                tier3: [
                    { id: 'lager', name: 'Lager', image: '/categories/Beer & Cider/Beer ]/Larger.jpg', description: 'Crisp, bottom-fermented beer.' },
                    { id: 'ipa', name: 'IPA & Pale Ale', image: '/categories/Beer & Cider/Beer ]/IAp.jpg', description: 'Hoppy, top-fermented beer.' },
                    { id: 'stout', name: 'Stout', image: '/categories/Beer & Cider/Beer ]/Stout & Porter.jpg', description: 'Dark, roasted beer.' }
                ]
            },
            {
                id: 'cider',
                name: 'Cider',
                image: '/categories/Beer & Cider/Cider/Cider.jpg',
                description: 'Fermented apple juice.',
                tier3: [
                    { id: 'apple-cider', name: 'Apple Cider', image: '/categories/Beer & Cider/Cider/Apple Cider .jpg', description: 'Traditional cider.' },
                    { id: 'fruit-cider', name: 'Fruit Cider', image: '/categories/Beer & Cider/Cider/Fruit Cider.png', description: 'Cider with added fruit flavours.' }
                ]
            }
        ]
    },
    {
        id: 'cocktails',
        name: 'Cocktails & Mixers',
        image: '/categories/Product Categories/Soft drink -Cocktail mixer tonic.jpg',
        descriptor: 'RTD, Mixers, Tonics, Water',
        tradeGuidance: 'Essential for cocktail programs, on-trade, and hospitality.',
        gridArea: 'md:col-span-2 md:row-span-1',
        isTrending: true,
        isNew: true,
        tier2: [
            {
                id: 'rtd',
                name: 'Ready To Drink',
                image: '/categories/Cocktail Mixers & Tonics/Ready To Drink/Ready To Drink.jpg',
                description: 'Pre-mixed cocktails.',
                tier3: [
                    { id: 'canned-cocktails', name: 'Canned Cocktails', image: '/categories/Cocktail Mixers & Tonics/Ready To Drink/Can cocktail.webp', description: 'Convenient cocktail cans.' },
                    { id: 'bottled-cocktails', name: 'Bottled Cocktails', image: '/categories/Cocktail Mixers & Tonics/Ready To Drink/Bottled Cocktails.jpg', description: 'Premium bottled mixes.' }
                ]
            },
            {
                id: 'mixers',
                name: 'Mixers & Tonics',
                image: '/categories/Cocktail Mixers & Tonics/Mixers & Tonics.jpg',
                description: 'Non-alcoholic mixers.',
                tier3: [
                    { id: 'tonic', name: 'Tonic Water', image: '/categories/Cocktail Mixers & Tonics/Mixers & Tonics.jpg', description: 'Carbonated quinine water.' },
                    { id: 'soda', name: 'Sodas', image: '/categories/Cocktail Mixers & Tonics/Mixer Tonic/Soda.jpg', description: 'Flavoured carbonated water.' },
                    { id: 'bitters', name: 'Bitters & Syrups', image: '/categories/Cocktail Mixers & Tonics/Mixer Tonic/Bitters & Syrups.jpg', description: 'Concentrated flavourings.' }
                ]
            }
        ]
    }
];


// ------------------------------------------------------------------
// 2. FLAT BRAND LIST (Content)
// ------------------------------------------------------------------

export const BRANDS: Brand[] = [
    // --- WHISKY ---
    {
        id: 'highland-reserve',
        name: 'Highland Reserve',
        tier1Id: 'spirits',
        tier2Id: 'whisky',
        tier3Ids: ['scotch'],
        country: 'Scotland',
        countryCode: 'scotland',
        positioning: 'Premium Export',
        image: '/categories/Spirits/Whisky/Scotch Whisky.png',
        description: 'A classic Highland single malt with rich heritage and global recognition.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: '12 Year Old Single Malt', image: '/categories/Spirits/Whisky/Scotch Whisky.png', abv: '40%', size: '70cl', description: 'Rich fruit and spice.' }
        ]
    },
    {
        id: 'dublin-oak',
        name: 'Dublin Oak',
        tier1Id: 'spirits',
        tier2Id: 'whisky',
        tier3Ids: ['irish'],
        country: 'Ireland',
        countryCode: 'ireland',
        positioning: 'Hospitality Core',
        image: '/categories/Spirits/Whisky/Jameson Irish Whiskey.webp',
        description: 'Triple-distilled Irish whiskey with smooth character.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Original Blend', image: '/categories/Spirits/Whisky/Jameson Irish Whiskey.webp', abv: '40%', size: '70cl', description: 'Triple distilled smoothness.' }
        ]
    },
    {
        id: 'kentucky-heritage',
        name: 'Kentucky Heritage',
        tier1Id: 'spirits',
        tier2Id: 'whisky',
        tier3Ids: ['american'],
        country: 'United States',
        countryCode: 'usa',
        positioning: 'Market Entry',
        image: '/categories/Spirits/Whisky/Jim beam amwrican whicsky.jpg',
        description: 'Small-batch Kentucky bourbon with growing demand in European markets.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },
    {
        id: 'tokyo-single-malt',
        name: 'Tokyo Single Malt',
        tier1Id: 'spirits',
        tier2Id: 'whisky',
        tier3Ids: ['japanese'],
        country: 'Japan',
        countryCode: 'japan',
        positioning: 'Super Premium',
        image: '/categories/Spirits/Whisky/Hibiki japnees Whisky.jpg',
        description: 'Precision-crafted Japanese single malt with delicate balance.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: []
    },

    // --- VODKA ---
    {
        id: 'nordic-pure-vodka',
        name: 'Nordic Pure',
        tier1Id: 'spirits',
        tier2Id: 'vodka',
        tier3Ids: ['plain-vodka'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Ultra Premium',
        image: '/categories/Spirits/Vodka/plain Vodka.webp',
        description: 'Distilled using Nordic water sources and modern techniques.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Original Vodka', image: '/categories/Spirits/Vodka/plain Vodka.webp', abv: '40%', size: '70cl', description: 'Exceptionally pure grain vodka.' }
        ]
    },
    {
        id: 'czar-estate',
        name: 'Czar Estate Vodka',
        tier1Id: 'spirits',
        tier2Id: 'vodka',
        tier3Ids: ['plain-vodka'],
        country: 'Poland',
        countryCode: 'poland',
        positioning: 'Traditional',
        image: '/categories/Spirits/Vodka/plain Vodka.webp',
        description: 'A creamy, full-bodied potato vodka traditionally distilled in Poland.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: false, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Potato Reserve', image: '/categories/Spirits/Vodka/plain Vodka.webp', abv: '40%', size: '70cl', description: 'Creamy texture with earth notes.' }
        ]
    },

    // --- RUM ---
    {
        id: 'caribbean-gold',
        name: 'Caribbean Gold Rum',
        tier1Id: 'spirits',
        tier2Id: 'rum',
        tier3Ids: ['spiced-rum', 'aged-rum'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium Cocktail',
        image: '/categories/Spirits/Rum/Spiced rum.jpg',
        description: 'Caribbean-style rum with UK distribution. Ideal for premium cocktail programs.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Spiced Gold', image: '/categories/Spirits/Rum/Spiced rum.jpg', abv: '37.5%', size: '70cl', description: 'Smooth spiced rum for mixing.' }
        ]
    },
    {
        id: 'barbados-cove',
        name: 'Barbados Cove',
        tier1Id: 'spirits',
        tier2Id: 'rum',
        tier3Ids: ['white-rum'],
        country: 'Barbados',
        countryCode: 'barbados',
        positioning: 'Authentic',
        image: '/categories/Spirits/Rum/White Rm.jpg',
        description: 'Crystal clear white rum aged for 2 years and filtered.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Silver Edition', image: '/categories/Spirits/Rum/White Rm.jpg', abv: '40%', size: '70cl', description: 'Crisp, dry, and clean.' }
        ]
    },

    // --- GIN ---
    {
        id: 'artisan-spirits-london',
        name: 'Artisan Spirits London',
        tier1Id: 'spirits',
        tier2Id: 'gin',
        tier3Ids: ['london-dry', 'flavoured-gin'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium Craft',
        image: '/categories/Spirits/Gin/London Dry (Gin).jpg',
        description: 'A contemporary London Dry gin with a focus on botanical complexity.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'London Dry Gin', image: '/categories/Spirits/Gin/London Dry (Gin).jpg', abv: '42%', size: '70cl', description: 'Classic juniper-forward gin.' }
        ]
    },
    {
        id: 'highland-botanical',
        name: 'Highland Botanical Co.',
        tier1Id: 'spirits',
        tier2Id: 'gin',
        tier3Ids: ['craft-gin'],
        country: 'Scotland',
        countryCode: 'scotland',
        positioning: 'Small Batch',
        image: '/categories/Spirits/Gin/Flavoured Gin.webp',
        description: 'Distilled in the Scottish Highlands using wild botanicals.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },

    // --- TEQUILA ---
    {
        id: 'el-sagrado-tequila',
        name: 'El Sagrado',
        tier1Id: 'spirits',
        tier2Id: 'tequila-mezcal',
        tier3Ids: ['blanco', 'reposado'],
        country: 'Mexico',
        countryCode: 'mexico',
        positioning: 'Authentic Agave',
        image: '/categories/Spirits/Tequila & Mezcal/Blanco.jpg',
        description: 'Sourced from the highlands of Jalisco, offering traditional production methods.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Blanco', image: '/categories/Spirits/Tequila & Mezcal/Blanco.jpg', abv: '38%', size: '70cl', description: 'Unaged, pure agave flavor.' }
        ]
    },
    {
        id: 'oaxaca-smoke',
        name: 'Oaxaca Smoke Mezcal',
        tier1Id: 'spirits',
        tier2Id: 'tequila-mezcal',
        tier3Ids: ['mezcal'],
        country: 'Mexico',
        countryCode: 'mexico',
        positioning: 'Artisanal',
        image: '/categories/Spirits/Tequila & Mezcal/Anejo.jpg',
        description: 'Small batch Mezcal with characteristic smoky notes from earth-pit roasting.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: false, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: []
    },

    // --- COGNAC ---
    {
        id: 'maison-duvallier',
        name: 'Maison Duvallier',
        tier1Id: 'spirits',
        tier2Id: 'cognac-brandy',
        tier3Ids: ['cognac'],
        country: 'France',
        countryCode: 'france',
        positioning: 'Heritage',
        image: '/categories/Spirits/Cognac & Brandy/Cognac.jpg',
        description: 'A Grande Champagne Cognac producer focusing on aged eau-de-vie for the luxury market.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'VSOP Fine Champagne', image: '/categories/Spirits/Cognac & Brandy/Cognac.jpg', abv: '40%', size: '70cl', description: 'Balanced oak and floral notes.' }
        ]
    },

    // --- LIQUEURS ---
    {
        id: 'verona-spirits',
        name: 'Verona Spirits',
        tier1Id: 'spirits',
        tier2Id: 'liqueurs',
        tier3Ids: ['amaretto'],
        country: 'Italy',
        countryCode: 'italy',
        positioning: 'Traditional',
        image: '/categories/Spirits/Whisky/Whisky liQUEUR.jpeg',
        description: 'Producers of classic Amaretto and Sambuca using centuries-old family recipes.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },
    {
        id: 'emerald-cream',
        name: 'Emerald Cream',
        tier1Id: 'spirits',
        tier2Id: 'liqueurs',
        tier3Ids: ['cream-liqueur'],
        country: 'Ireland',
        countryCode: 'ireland',
        positioning: 'Value Premium',
        image: '/categories/Spirits/Vodka/Aperol Flavoured Liqueurs.webp',
        description: 'Made with fresh Irish dairy cream and aged whiskey.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },

    // --- RED WINE ---
    {
        id: 'tuscan-heritage',
        name: 'Tuscan Heritage',
        tier1Id: 'wine',
        tier2Id: 'red-wine',
        tier3Ids: ['chianti'],
        country: 'Italy',
        countryCode: 'italy',
        positioning: 'Regional Classic',
        image: '/categories/Wine & Champagne/Red Wine/Chianti Sangiovese 1.jpg',
        description: 'Tuscan red wines with regional authenticity.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Chianti Classico', image: '/categories/Wine & Champagne/Red Wine/Chianti Sangiovese 1.jpg', abv: '13.5%', size: '75cl', description: 'Notes of cherry and earth.' }
        ]
    },
    {
        id: 'andes-peaks',
        name: 'Andes Peaks',
        tier1Id: 'wine',
        tier2Id: 'red-wine',
        tier3Ids: ['malbec'],
        country: 'Argentina',
        countryCode: 'argentina',
        positioning: 'Steakhouse Staple',
        image: '/categories/Wine & Champagne/Red Wine/Malbac.jpg',
        description: 'Bold Malbec grown in the foothills of Mendoza. Excellent steakhouse wine.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Reserva Malbec', image: '/categories/Wine & Champagne/Red Wine/Malbac.jpg', abv: '14%', size: '75cl', description: 'Deep plum and blackberry.' }
        ]
    },

    // --- WHITE WINE ---
    {
        id: 'marlborough-sun',
        name: 'Marlborough Sun',
        tier1Id: 'wine',
        tier2Id: 'white-wine',
        tier3Ids: ['sauvignon-blanc'],
        country: 'New Zealand',
        countryCode: 'new-zealand',
        positioning: 'Export Grade',
        image: '/categories/Wine & Champagne/White Wine/Sauvignon Blanco.webp',
        description: 'Zesty, tropical New Zealand Sauvignon Blanc designed for the international palate.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Estate Sauvignon Blanc', image: '/categories/Wine & Champagne/White Wine/Sauvignon Blanco.webp', abv: '12.5%', size: '75cl', description: 'Passionfruit and gooseberry notes.' }
        ]
    },
    {
        id: 'burgundy-domain',
        name: 'Domaine de Bourgogne',
        tier1Id: 'wine',
        tier2Id: 'white-wine',
        tier3Ids: ['chardonnay'],
        country: 'France',
        countryCode: 'france',
        positioning: 'Classic',
        image: '/categories/Wine & Champagne/White Wine/Sauvignon Blanco.webp',
        description: 'Elegant white Burgundy focused on terroir and mineral finish.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: []
    },

    // --- ROSE ---
    {
        id: 'provence-azure',
        name: 'Château Côte d’Azur',
        tier1Id: 'wine',
        tier2Id: 'rose-wine',
        tier3Ids: ['provence-rose'],
        country: 'France',
        countryCode: 'france',
        positioning: 'Luxury',
        image: '/categories/Wine & Champagne/Rose wine/Provence Rose.webp',
        description: 'The quintessential pale pink Rosé from Provence. Dry, crisp, and fashionable.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Cuvée Prestige', image: '/categories/Wine & Champagne/Rose wine/Provence Rose.webp', abv: '12.5%', size: '75cl', description: 'Strawberry and saline finish.' }
        ]
    },

    // --- SPARKLING & FORTIFIED ---
    {
        id: 'maison-champagne',
        name: 'Maison Champagne',
        tier1Id: 'wine',
        tier2Id: 'sparkling',
        tier3Ids: ['champagne'],
        country: 'France',
        countryCode: 'france',
        positioning: 'Premium Hospitality',
        image: '/categories/Champagne & Sparkling/Champagne.jpg',
        description: 'Traditional Champagne house with heritage and quality.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Brut Réserve', image: '/categories/Champagne & Sparkling/Champagne.jpg', abv: '12%', size: '75cl', description: 'Crisp and elegant.' }
        ]
    },
    {
        id: 'italian-prosecco',
        name: 'Italian Prosecco House',
        tier1Id: 'wine',
        tier2Id: 'sparkling',
        tier3Ids: ['prosecco'],
        country: 'Italy',
        countryCode: 'italy',
        positioning: 'Bulk & Retail',
        image: '/categories/Wine & Champagne/Champagen & Sparking/Prosecco.jpg',
        description: 'DOC Prosecco from Veneto region. Available for bulk trade.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },
    {
        id: 'catalan-cava',
        name: 'Catalan Cava Co.',
        tier1Id: 'wine',
        tier2Id: 'sparkling',
        tier3Ids: ['cava'],
        country: 'Spain',
        countryCode: 'spain',
        positioning: 'Traditional Method',
        image: '/categories/Wine & Champagne/Champagen & Sparking/Cava.jpg',
        description: 'High-value sparkling wine made using the Champagne method.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },
    {
        id: 'douro-valley-ports',
        name: 'Douro Valley Ports',
        tier1Id: 'wine',
        tier2Id: 'fortified',
        tier3Ids: ['port'],
        country: 'Portugal',
        countryCode: 'portugal',
        positioning: 'Authentic',
        image: '/categories/Wine & Champagne/Fortified Wine/Port.webp',
        description: 'Traditional Ruby and Tawny ports from the heart of Portugal.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: false, offTradeFocused: true },
        products: []
    },
    {
        id: 'sevilla-sherry',
        name: 'Bodegas Sevilla',
        tier1Id: 'wine',
        tier2Id: 'fortified',
        tier3Ids: ['sherry'],
        country: 'Spain',
        countryCode: 'spain',
        positioning: 'Aperitif',
        image: '/categories/Wine & Champagne/Fortified Wine/Sherry.jpg',
        description: 'Dry Fino and sweet Cream Sherries for aperitifs.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: []
    },

    // --- BEER & CIDER ---
    {
        id: 'british-craft-brewery',
        name: 'British Craft Brewery',
        tier1Id: 'beer',
        tier2Id: 'beer',
        tier3Ids: ['ipa'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Modern Craft',
        image: '/categories/Beer & Cider/Beer ]/IAp.jpg',
        description: 'Award-winning craft beer with flexible supply options.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'IPA', image: '/categories/Beer & Cider/Beer ]/IAp.jpg', abv: '5.2%', size: '330ml / Keg', description: 'Hoppy and refreshing British IPA.' }
        ]
    },
    {
        id: 'bavarian-brewhouse',
        name: 'Bavarian Brewhouse',
        tier1Id: 'beer',
        tier2Id: 'beer',
        tier3Ids: ['lager'],
        country: 'Germany',
        countryCode: 'germany',
        positioning: 'Heritage',
        image: '/categories/Beer & Cider/Beer ]/Larger.jpg',
        description: 'Authentic German lager compliant with the Purity Law.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Munich Helles', image: '/categories/Beer & Cider/Beer ]/Larger.jpg', abv: '4.8%', size: '500ml', description: 'Crisp, golden lager.' }
        ]
    },
    {
        id: 'somerset-orchards',
        name: 'Somerset Orchards',
        tier1Id: 'beer',
        tier2Id: 'cider',
        tier3Ids: ['apple-cider'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Farmhouse',
        image: '/categories/Beer & Cider/Cider/Apple Cider .jpg',
        description: 'Traditional British cider made from pressed apples.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: false, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Vintage Dry', image: '/categories/Beer & Cider/Cider/Apple Cider .jpg', abv: '6.5%', size: '500ml', description: 'Strong, tannic apple cider.' }
        ]
    },

    // --- COCKTAILS & MIXERS ---
    {
        id: 'craft-cocktail-co',
        name: 'Craft Cocktail Co.',
        tier1Id: 'cocktails',
        tier2Id: 'rtd',
        tier3Ids: ['canned-cocktails'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium Convenience',
        image: '/categories/Cocktail Mixers & Tonics/Ready To Drink/Can cocktail.webp',
        description: 'Ready-to-drink cocktails made with premium spirits.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Espresso Martini', image: '/categories/Cocktail Mixers & Tonics/Ready To Drink/Can cocktail.webp', abv: '5%', size: '250ml', description: 'Rich coffee flavor in a convenient can.' }
        ]
    },
    {
        id: 'alchemy-mixology',
        name: 'Alchemy Mixology',
        tier1Id: 'cocktails',
        tier2Id: 'mixers',
        tier3Ids: ['bitters'],
        country: 'France',
        countryCode: 'france',
        positioning: 'Bar Grade',
        image: '/categories/Cocktail Mixers & Tonics/Mixer Tonic/Bitters & Syrups.jpg',
        description: 'High-concentration syrups and fruit purees designed specifically for mixologists.',
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Aromatic Bitters', image: '/categories/Cocktail Mixers & Tonics/Mixer Tonic/Bitters & Syrups.jpg', abv: '44%', size: '20cl', description: 'Essential for Old Fashioneds.' }
        ]
    },
    {
        id: 'soda-co-mixers',
        name: 'The Soda Co.',
        tier1Id: 'cocktails',
        tier2Id: 'mixers',
        tier3Ids: ['soda'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Craft',
        image: '/categories/Cocktail Mixers & Tonics/Mixer Tonic/Soda.jpg',
        description: 'Gourmet colas and lemonades with natural ingredients.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: []
    },
    {
        id: 'botanical-roots-tonic',
        name: 'Botanical Roots',
        tier1Id: 'cocktails',
        tier2Id: 'mixers',
        tier3Ids: ['tonic'],
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium Mixer',
        image: '/categories/Cocktail Mixers & Tonics/Mixers & Tonics.jpg',
        description: 'Quinine-forward tonics designed to pair with craft gin.',
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Elderflower Tonic', image: '/categories/Cocktail Mixers & Tonics/Mixers & Tonics.jpg', abv: '0%', size: '200ml', description: 'Floral and refreshing.' }
        ]
    }
];