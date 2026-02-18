import { Truck, RotateCcw, PackageX, AlertCircle } from "lucide-react";
import { LegalSection } from "../types/legal.types";

export const DELIVERY_SECTIONS: LegalSection[] = [
    {
        id: "shipping-zones",
        title: "Shipping Zones & Times",
        icon: <Truck className="w-5 h-5" />,
        content: (
            <>
                <p>
                    We currently ship to certified trade partners across the following regions. Delivery times are estimated and commence from the date of shipping, rather than the date of order.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                        <h4 className="font-bold text-foreground mb-2">Domestic (UK)</h4>
                        <p className="text-sm text-muted-foreground">Standard: 2-3 Business Days</p>
                        <p className="text-sm text-muted-foreground">Express: Next Business Day</p>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                        <h4 className="font-bold text-foreground mb-2">International (EU)</h4>
                        <p className="text-sm text-muted-foreground">Standard: 3-5 Business Days</p>
                        <p className="text-sm text-muted-foreground">Express: 1-2 Business Days</p>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                        <h4 className="font-bold text-foreground mb-2">Rest of World</h4>
                        <p className="text-sm text-muted-foreground">Standard: 5-10 Business Days</p>
                        <p className="text-sm text-muted-foreground">Express: 3-5 Business Days</p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: "returns-policy",
        title: "Returns Policy",
        icon: <RotateCcw className="w-5 h-5" />,
        content: (
            <>
                <p>
                    We operate a B2B trade platform. Returns are accepted only under specific conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500 mt-4">
                    <li>Items must be returned within 14 days of receipt.</li>
                    <li>Goods must be unopened, in original packaging, and in resalable condition.</li>
                    <li>Returns must be authorized by our team prior to shipping.</li>
                </ul>
                <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 my-6 text-amber-900 dark:text-amber-200">
                    <strong>Note:</strong> We do not accept returns for change of mind on large volume trade orders once the PI has been signed and goods dispatched.
                </div>
            </>
        )
    },
    {
        id: "damaged-goods",
        title: "Damaged or Defective Items",
        icon: <PackageX className="w-5 h-5" />,
        content: (
            <>
                <p>
                    If you receive damaged or defective goods, please contact us within 48 hours of delivery with photographic evidence.
                </p>
                <p>
                    We will arrange for a replacement or credit note at our discretion. Do not dispose of damaged items until authorized, as we may require them to be returned for inspection.
                </p>
            </>
        )
    },
    {
        id: "failed-delivery",
        title: "Failed Deliveries",
        icon: <AlertCircle className="w-5 h-5" />,
        content: (
            <>
                <p>
                    It is the customer's responsibility to ensure that the delivery address is correct and that someone is available to receive the goods.
                </p>
                <p>
                    If a delivery fails due to incorrect address details or unavailability, re-delivery charges may apply.
                </p>
            </>
        )
    }
];
