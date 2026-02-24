import { Brand } from "../types/brand.types";

export const BRANDS: Brand[] = [
    // GIN BRANDS
    {
        id: 'artisan-spirits-london',
        name: 'Artisan Spirits London',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium craft gin for cocktail and on-trade programs.',
        category: 'Gin',
        image: '/categories/Hendricks London Dry Gin.webp',
        description: 'A contemporary London Dry gin with a focus on botanical complexity and mixability. Designed for premium cocktail programs and discerning on-trade partners.\n\nBest Trade Use:\nMost commonly discussed for premium on-trade programs, export portfolio building.',
        categoryFit: ['Gin', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            {
                name: 'London Dry Gin',
                image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=400',
                abv: '42%',
                size: '70cl',
                description: 'Classic juniper-forward gin with citrus notes.'
            },
            {
                name: 'Pink Grapefruit Gin',
                image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400',
                abv: '40%',
                size: '70cl',
                description: 'Zesty refreshing gin with natural grapefruit infusion.'
            }
        ],
        portfolioRanges: [
            {
                id: 'range-1',
                rangeName: 'Classic Range',
                categoryPath: 'Gin → Core Range',
                tradePositioning: 'Core',
                commonTradeUse: ['On-Trade', 'Export', 'Retail'],
                typicalFormats: ['700ml', '750ml', '1L'],
                relevantFor: ['market-entry', 'on-trade-cocktail', 'export-portfolio', 'volume-strategic']
            },
            {
                id: 'range-2',
                rangeName: 'Premium Selection',
                categoryPath: 'Gin → Premium',
                tradePositioning: 'Premium',
                commonTradeUse: ['On-Trade', 'Gifting', 'Export'],
                typicalFormats: ['700ml', '750ml'],
                regionalNote: 'Subject to regional allocation',
                relevantFor: ['on-trade-cocktail', 'export-portfolio']
            },
            {
                id: 'range-3',
                rangeName: 'Reserve Collection',
                categoryPath: 'Gin → Super-Premium',
                tradePositioning: 'Super-Premium',
                commonTradeUse: ['On-Trade', 'Gifting', 'Specialist Retail'],
                typicalFormats: ['700ml'],
                regionalNote: 'Limited allocation by market',
                relevantFor: ['on-trade-cocktail', 'export-portfolio']
            },
            {
                id: 'range-4',
                rangeName: 'Private Label Program',
                categoryPath: 'Gin → Custom Solutions',
                tradePositioning: 'Core',
                commonTradeUse: ['White Label', 'Private Label', 'Export'],
                typicalFormats: ['Custom volumes available'],
                regionalNote: 'MOQ requirements apply',
                relevantFor: ['private-label', 'volume-strategic']
            }
        ],
        marketConsiderations: [
            'Regional distribution rights apply',
            'Volume thresholds may be required',
            'Regulatory approvals vary by market',
            'All engagements are enquiry-based'
        ],
        tradeIntents: ['Market Entry', 'On-Trade', 'Export Portfolio', 'Private Label']
    },
    {
        id: 'highland-botanical',
        name: 'Highland Botanical Co.',
        country: 'Scotland',
        countryCode: 'scotland',
        positioning: 'Scottish craft gin with wild botanicals.',
        category: 'Gin',
        image: '/categories/Hendricks London Dry Gin.webp',
        description: 'Distilled in the Scottish Highlands using wild botanicals and traditional methods. Suitable for export markets and premium hospitality trade.',
        categoryFit: ['Gin', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'Highland Wild Gin',
                image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=400',
                abv: '43%',
                size: '70cl',
                description: 'Distilled with hand-foraged heather and bog myrtle.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'mediterranean-dry',
        name: 'Mediterranean Dry Gin',
        country: 'Spain',
        countryCode: 'spain',
        positioning: 'Mediterranean-inspired gin for export.',
        category: 'Gin',
        image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=800',
        description: 'A Spanish gin featuring Mediterranean citrus and herbs. Strong presence in EU markets with growing export potential.',
        categoryFit: ['Gin', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: false, offTradeFocused: true },
        products: [
            {
                name: 'Citrus Edition',
                image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=400',
                abv: '40%',
                size: '70cl',
                description: 'Infused with Seville oranges and lemons.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // WHISKY
    {
        id: 'highland-reserve',
        name: 'Highland Reserve',
        country: 'Scotland',
        countryCode: 'scotland',
        positioning: 'Premium Scotch whisky for export.',
        category: 'Whisky',
        image: '/categories/Johnnie Walker Black  Label Scotch Whisky.webp',
        description: 'A classic Highland single malt with rich heritage and global recognition. Ideal for market entry and premium trade.',
        categoryFit: ['Whisky', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: '12 Year Old Single Malt',
                image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?auto=format&fit=crop&q=80&w=400',
                abv: '40%',
                size: '70cl',
                description: 'Rich fruit and spice notes with a smooth finish.'
            },
            {
                name: '18 Year Old Reserve',
                image: 'https://images.unsplash.com/photo-1527281400683-1a22129e8756?auto=format&fit=crop&q=80&w=400',
                abv: '43%',
                size: '70cl',
                description: 'Complex oak and sherry character.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'dublin-oak',
        name: 'Dublin Oak',
        country: 'Ireland',
        countryCode: 'ireland',
        positioning: 'Irish whiskey for hospitality.',
        category: 'Whisky',
        image: '/categories/Jameson Irish Whiskey.webp',
        description: 'Triple-distilled Irish whiskey with smooth character. Strong performance in on-trade and premium retail channels.',
        categoryFit: ['Whisky', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'Original Blend',
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
                abv: '40%',
                size: '70cl',
                description: 'Triple distilled for exceptional smoothness.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'kentucky-heritage',
        name: 'Kentucky Heritage',
        country: 'United States',
        countryCode: 'usa',
        positioning: 'American bourbon for UK and EU market entry.',
        category: 'Whisky',
        image: '/categories/Jack Daniels Tennessee  American Whiskey.webp',
        description: 'Small-batch Kentucky bourbon with growing demand in European markets. Suitable for premium hospitality and retail.',
        categoryFit: ['Whisky', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'Small Batch Bourbon',
                image: 'https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?auto=format&fit=crop&q=80&w=400',
                abv: '45%',
                size: '70cl',
                description: 'Rich vanilla and caramel notes.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'tokyo-single-malt',
        name: 'Tokyo Single Malt',
        country: 'Japan',
        countryCode: 'japan',
        positioning: 'Japanese whisky for premium trade.',
        category: 'Whisky',
        image: '/categories/Spirits/Hibiki japnees Whisky.jpg',
        description: 'Precision-crafted Japanese single malt with delicate balance. High demand in premium hospitality and specialist retail.',
        categoryFit: ['Whisky', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            {
                name: 'Mizunara Cask Finish',
                image: 'https://images.unsplash.com/photo-1608649437172-e64e52579308?auto=format&fit=crop&q=80&w=400',
                abv: '46%',
                size: '70cl',
                description: 'Finished in rare Japanese Mizunara oak.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // CHAMPAGNE
    {
        id: 'maison-champagne',
        name: 'Maison Champagne',
        country: 'France',
        countryCode: 'france',
        positioning: 'Premium Champagne for hospitality.',
        category: 'Champagne & Sparkling',
        image: '/categories/Veuve Clicquot GB Champagne.webp',
        description: 'Traditional Champagne house with heritage and quality. Strong in hospitality trade and corporate gift programs.',
        categoryFit: ['Champagne & Sparkling', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'Brut Réserve',
                image: 'https://images.unsplash.com/photo-1594910243224-ca872ca93be8?auto=format&fit=crop&q=80&w=400',
                abv: '12%',
                size: '75cl',
                description: 'Crisp and elegant classic Champagne.'
            },
            {
                name: 'Rosé Vintage',
                image: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&q=80&w=400',
                abv: '12%',
                size: '75cl',
                description: 'Red berry fruit with delicate bubbles.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'italian-prosecco',
        name: 'Italian Prosecco House',
        country: 'Italy',
        countryCode: 'italy',
        positioning: 'Italian Prosecco for bulk trade.',
        category: 'Champagne & Sparkling',
        image: '/categories/Champagne & Sparkling/Sparkling Wine.webp',
        description: 'DOC Prosecco from Veneto region. Available for bulk trade, private label, and high-volume hospitality supply.',
        categoryFit: ['Champagne & Sparkling', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // RED WINE
    {
        id: 'tuscan-heritage',
        name: 'Tuscan Heritage',
        country: 'Italy',
        countryCode: 'italy',
        positioning: 'Premium Italian red wine.',
        category: 'Red Wine',
        image: '/categories/Wine & Champagne/REd Wine.webp',
        description: 'Tuscan red wines with regional authenticity. Suitable for premium hospitality, retail, and export programs.',
        categoryFit: ['Red Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'Chianti Classico',
                image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=400',
                abv: '13.5%',
                size: '75cl',
                description: 'Notes of cherry and earth.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // RUM
    {
        id: 'caribbean-gold',
        name: 'Caribbean Gold Rum',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium aged rum for cocktails.',
        category: 'Rum',
        image: '/categories/Captain Morgan Spiced Rum.jpg',
        description: 'Caribbean-style rum with UK distribution. Ideal for premium cocktail programs and hospitality trade.',
        categoryFit: ['Rum', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            {
                name: 'Spiced Gold',
                image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80&w=400',
                abv: '37.5%',
                size: '70cl',
                description: 'Smooth spiced rum for mixing.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // COCKTAILS
    {
        id: 'craft-cocktail-co',
        name: 'Craft Cocktail Co.',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium RTD cocktails.',
        category: 'Ready Made Cocktails',
        image: '/categories/Cocktail Mixers & Tonics/photo-1693479302024-660177a556d5.jpg',
        description: 'Ready-to-drink cocktails made with premium spirits. Designed for on-trade, events, and convenience retail.',
        categoryFit: ['Ready Made Cocktails', 'Cocktail, Mixers & Tonics'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'Espresso Martini',
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
                abv: '5%',
                size: '250ml',
                description: 'Rich coffee flavor in a convenient can.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // BEER
    {
        id: 'british-craft-brewery',
        name: 'British Craft Brewery',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Craft beer for bulk trade.',
        category: 'Beer',
        image: '/categories/Beer & Cider/Craft Beers.jpg',
        description: 'Award-winning craft beer with flexible supply options. Suitable for bulk trade, kegs, and hospitality programs.',
        categoryFit: ['Beer', 'Beer & Cider'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            {
                name: 'IPA',
                image: 'https://images.unsplash.com/photo-1535958636474-b021ee8876a3?auto=format&fit=crop&q=80&w=400',
                abv: '5.2%',
                size: '330ml / Keg',
                description: 'Hoppy and refreshing British IPA.'
            },
            {
                name: 'Golden Lager',
                image: 'https://images.unsplash.com/photo-1535958636474-b021ee8876a3?auto=format&fit=crop&q=80&w=400',
                abv: '4.5%',
                size: '330ml / Keg',
                description: 'Crisp, clean lager.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'nordic-pure-vodka',
        name: 'Nordic Pure',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Ultra-premium vodka.',
        category: 'Vodka',
        image: '/categories/Spirits/Vodka/plain Vodka.webp',
        description: 'Distilled using Nordic water sources and modern techniques. Available for private label programs and high-volume cocktail trade.',
        categoryFit: ['Vodka', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            {
                name: 'Original Vodka',
                image: 'https://images.unsplash.com/photo-1616235165971-d68a35624147?auto=format&fit=crop&q=80&w=400',
                abv: '40%',
                size: '70cl',
                description: 'Exceptionally pure grain vodka.'
            }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    // --- MISSING BRANDS SYNC ---

    // VODKA
    {
        id: 'czar-estate',
        name: 'Czar Estate Vodka',
        country: 'Poland',
        countryCode: 'poland',
        positioning: 'Traditional Potato Vodka',
        category: 'Vodka',
        image: '/categories/Spirits/Vodka/plain Vodka.webp', // Reusing placeholder style
        description: 'A creamy, full-bodied potato vodka traditionally distilled in Poland. Known for its earthy character and smooth finish.',
        categoryFit: ['Vodka', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: false, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Potato Reserve', image: 'https://images.unsplash.com/photo-1616235165971-d68a35624147?auto=format&fit=crop&q=80&w=400', abv: '40%', size: '70cl', description: 'Creamy texture with earth notes.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // RUM
    {
        id: 'barbados-cove',
        name: 'Barbados Cove',
        country: 'Barbados',
        countryCode: 'barbados',
        positioning: 'Authentic White Rum',
        category: 'Rum',
        image: '/categories/Spirits/Rum/White Rm.jpg',
        description: 'Crystal clear white rum aged for 2 years and filtered. Perfect for mojitos and daiquiris.',
        categoryFit: ['Rum', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Silver Edition', image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80&w=400', abv: '40%', size: '70cl', description: 'Crisp, dry, and clean.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // TEQUILA & MEZCAL
    {
        id: 'el-sagrado-tequila',
        name: 'El Sagrado',
        country: 'Mexico',
        countryCode: 'mexico',
        positioning: 'Authentic Highland Tequila',
        category: 'Tequila & Mezcal',
        image: '/categories/Live Trade Opportunities/Mived Spirits.webp',
        description: 'Sourced from the highlands of Jalisco, offering traditional production methods and 100% blue agave.',
        categoryFit: ['Tequila & Mezcal', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Blanco', image: 'https://images.unsplash.com/photo-1541544181051-e46698967975?auto=format&fit=crop&q=80&w=400', abv: '38%', size: '70cl', description: 'Unaged, pure agave flavor.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'oaxaca-smoke',
        name: 'Oaxaca Smoke Mezcal',
        country: 'Mexico',
        countryCode: 'mexico',
        positioning: 'Artisanal Mezcal',
        category: 'Tequila & Mezcal',
        image: '/categories/Live Trade Opportunities/Mived Spirits.webp',
        description: 'Small batch Mezcal with characteristic smoky notes from earth-pit roasting.',
        categoryFit: ['Tequila & Mezcal', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: false, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // COGNAC
    {
        id: 'maison-duvallier',
        name: 'Maison Duvallier',
        country: 'France',
        countryCode: 'france',
        positioning: 'Heritage Cognac',
        category: 'Cognac & Brandy',
        image: '/categories/Live Trade Opportunities/Mived Spirits.webp',
        description: 'A Grande Champagne Cognac producer focusing on aged eau-de-vie for the luxury market.',
        categoryFit: ['Cognac & Brandy', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'VSOP Fine Champagne', image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=400', abv: '40%', size: '70cl', description: 'Balanced oak and floral notes.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // LIQUEURS
    {
        id: 'verona-spirits',
        name: 'Verona Spirits',
        country: 'Italy',
        countryCode: 'italy',
        positioning: 'Traditional Italian Liqueurs',
        category: 'Liqueurs',
        image: '/categories/Aperol Flavoured Liqueurs.webp',
        description: 'Producers of classic Amaretto and Sambuca using centuries-old family recipes.',
        categoryFit: ['Liqueurs', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'emerald-cream',
        name: 'Emerald Cream',
        country: 'Ireland',
        countryCode: 'ireland',
        positioning: 'Premium Cream Liqueur',
        category: 'Liqueurs',
        image: '/categories/Baileys Irish Cream Liqueur.jpg',
        description: 'Made with fresh Irish dairy cream and aged whiskey. A luxurious treat.',
        categoryFit: ['Liqueurs', 'Spirits'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // WINE
    {
        id: 'andes-peaks',
        name: 'Andes Peaks',
        country: 'Argentina',
        countryCode: 'argentina',
        positioning: 'Steakhouse Staple',
        category: 'Red Wine',
        image: '/categories/Wine & Champagne/REd Wine.webp',
        description: 'Bold Malbec grown in the foothills of Mendoza. Excellent steakhouse wine.',
        categoryFit: ['Red Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Reserva Malbec', image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=400', abv: '14%', size: '75cl', description: 'Deep plum and blackberry.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'marlborough-sun',
        name: 'Marlborough Sun',
        country: 'New Zealand',
        countryCode: 'new-zealand',
        positioning: 'Export Grade Sauvignon',
        category: 'White Wine',
        image: '/categories/Wine & Champagne/Sauvignon Blanco.webp',
        description: 'Zesty, tropical New Zealand Sauvignon Blanc designed for the international palate.',
        categoryFit: ['White Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Estate Sauvignon Blanc', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80&w=400', abv: '12.5%', size: '75cl', description: 'Passionfruit and gooseberry notes.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'burgundy-domain',
        name: 'Domaine de Bourgogne',
        country: 'France',
        countryCode: 'france',
        positioning: 'Classic Burgundy',
        category: 'White Wine',
        image: '/categories/Wine & Champagne/white wine.jpg',
        description: 'Elegant white Burgundy focused on terroir and mineral finish.',
        categoryFit: ['White Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'provence-azure',
        name: 'Château Côte d’Azur',
        country: 'France',
        countryCode: 'france',
        positioning: 'Luxury Rosé',
        category: 'Rosé Wine',
        image: '/categories/Wine & Champagne/REd Wine.webp',
        description: 'The quintessential pale pink Rosé from Provence. Dry, crisp, and fashionable.',
        categoryFit: ['Rosé Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Cuvée Prestige', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80&w=400', abv: '12.5%', size: '75cl', description: 'Strawberry and saline finish.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'catalan-cava',
        name: 'Catalan Cava Co.',
        country: 'Spain',
        countryCode: 'spain',
        positioning: 'Traditional Method Cava',
        category: 'Champagne & Sparkling',
        image: '/categories/Champagne & Sparkling/Sparkling Wine.webp',
        description: 'High-value sparkling wine made using the Champagne method. Perfect for events and catering.',
        categoryFit: ['Champagne & Sparkling', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'douro-valley-ports',
        name: 'Douro Valley Ports',
        country: 'Portugal',
        countryCode: 'portugal',
        positioning: 'Authentic Port',
        category: 'Fortified Wine',
        image: '/categories/Wine & Champagne/REd Wine.webp',
        description: 'Traditional Ruby and Tawny ports from the heart of Portugal.',
        categoryFit: ['Fortified Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: false, offTradeFocused: true },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'sevilla-sherry',
        name: 'Bodegas Sevilla',
        country: 'Spain',
        countryCode: 'spain',
        positioning: 'Classic Sherry',
        category: 'Fortified Wine',
        image: '/categories/Wine & Champagne/white wine.jpg',
        description: 'Dry Fino and sweet Cream Sherries for aperitifs.',
        categoryFit: ['Fortified Wine', 'Wine & Champagne'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // BEER & CIDER
    {
        id: 'bavarian-brewhouse',
        name: 'Bavarian Brewhouse',
        country: 'Germany',
        countryCode: 'germany',
        positioning: 'Heritage Lager',
        category: 'Beer',
        image: '/categories/Beer & Cider/Lager & Pilsner.jpg',
        description: 'Authentic German lager compliant with the Purity Law.',
        categoryFit: ['Beer', 'Beer & Cider'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Munich Helles', image: 'https://images.unsplash.com/photo-1535958636474-b021ee8876a3?auto=format&fit=crop&q=80&w=400', abv: '4.8%', size: '500ml', description: 'Crisp, golden lager.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'somerset-orchards',
        name: 'Somerset Orchards',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Farmhouse Cider',
        category: 'Cider',
        image: '/categories/Beer & Cider/Apple Cider.jpg',
        description: 'Traditional British cider made from pressed apples.',
        categoryFit: ['Cider', 'Beer & Cider'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: false, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Vintage Dry', image: 'https://images.unsplash.com/photo-1573804867119-943a41c6d3bc?auto=format&fit=crop&q=80&w=400', abv: '6.5%', size: '500ml', description: 'Strong, tannic apple cider.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },

    // MIXERS
    {
        id: 'alchemy-mixology',
        name: 'Alchemy Mixology',
        country: 'France',
        countryCode: 'france',
        positioning: 'Bar Grade Mixers',
        category: 'Mixers & Tonics',
        image: '/categories/Cocktail Mixers & Tonics/Water.jpg',
        description: 'High-concentration syrups and fruit purees designed specifically for mixologists.',
        categoryFit: ['Mixers & Tonics', 'Cocktail, Mixers & Tonics'],
        tradeCapabilities: { exportAvailable: true, privateLabel: false, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: false },
        products: [
            { name: 'Aromatic Bitters', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400', abv: '44%', size: '20cl', description: 'Essential for Old Fashioneds.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'soda-co-mixers',
        name: 'The Soda Co.',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Craft Sodas',
        category: 'Mixers & Tonics',
        image: '/categories/Cocktail Mixers & Tonics/coka cola.jpg',
        description: 'Gourmet colas and lemonades with natural ingredients.',
        categoryFit: ['Mixers & Tonics', 'Cocktail, Mixers & Tonics'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    },
    {
        id: 'botanical-roots-tonic',
        name: 'Botanical Roots',
        country: 'United Kingdom',
        countryCode: 'uk',
        positioning: 'Premium Tonic',
        category: 'Mixers & Tonics',
        image: '/categories/Cocktail Mixers & Tonics/Water.jpg',
        description: 'Quinine-forward tonics designed to pair with craft gin.',
        categoryFit: ['Mixers & Tonics', 'Cocktail, Mixers & Tonics'],
        tradeCapabilities: { exportAvailable: true, privateLabel: true, ukDistribution: true, euDistribution: true, onTradeFocused: true, offTradeFocused: true },
        products: [
            { name: 'Elderflower Tonic', image: 'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?auto=format&fit=crop&q=80&w=400', abv: '0%', size: '200ml', description: 'Floral and refreshing.' }
        ],
        portfolioRanges: [],
        marketConsiderations: [],
        tradeIntents: []
    }
];
