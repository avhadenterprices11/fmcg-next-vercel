import type { ExpertiseItem } from '../types/expertise.types';

/**
 * Expertise accordion items data
 */
export const expertiseItems: ExpertiseItem[] = [
    {
        id: 1,
        title: 'Product Availability & Market Inquiry',
        subtitle: 'Inquiry',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop',
        description: [
            "Buyers submit their requirements (SKUs, volumes, destinations).",
            "We confirm stock availability, pricing, and lead times.",
            "Market restrictions and duty‑free eligibility are checked upfront."
        ]
    },
    {
        id: 2,
        title: 'Offer & Compliance Verification',
        subtitle: 'Verification',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
        description: [
            "A formal offer is issued with full product details and commercial terms.",
            "Buyer credentials are verified through trade references and documentation.",
            "Compliance packs (certificates, registrations, company documents) are exchanged."
        ]
    },
    {
        id: 3,
        title: 'Order Confirmation & Payment Terms',
        subtitle: 'Confirmation',
        image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2670&auto=format&fit=crop',
        description: [
            "Final quantities, prices, and delivery terms are agreed.",
            "Proforma invoice is issued.",
            "Payment is secured via deposit, escrow, or agreed method with sales manager."
        ]
    },
    {
        id: 4,
        title: 'Logistics, Handling & Documentation',
        subtitle: 'Logistics',
        image: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=2670&auto=format&fit=crop',
        description: [
            "Goods are prepared, inspected, and packed according to destination requirements.",
            "Export documents (invoice, packing list, COO, health certificates, etc.) are arranged.",
            "Shipment is booked and tracked until departure."
        ]
    },
    {
        id: 5,
        title: 'Delivery & Post‑Trade Support',
        subtitle: 'Support',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        description: [
            "Buyer receives all shipping documents for customs clearance.",
            "Delivery is monitored until goods arrive safely.",
            "After‑sales support is provided for future orders, availability updates, and long‑term cooperation."
        ]
    },
];
