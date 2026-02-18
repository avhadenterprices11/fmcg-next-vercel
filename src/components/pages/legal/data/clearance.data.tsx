import { CalendarX, CircleOff, Tag, AlertTriangle } from "lucide-react";
import { LegalSection } from "../types/legal.types";

export const CLEARANCE_SECTIONS: LegalSection[] = [
    {
        id: "short-date-definition",
        title: "Short Date Definition",
        icon: <CalendarX className="w-5 h-5" />,
        content: (
            <>
                <p>
                    "Short Date" products are items that are within a specific timeframe of their Best Before Date (BBD) or Expiry Date.
                </p>
                <p>
                    We clearly label the BBD on all short-dated stock listings. By purchasing these items, you acknowledge the remaining shelf life.
                </p>
            </>
        )
    },
    {
        id: "non-returnable",
        title: "Non-Returnable Policy",
        icon: <CircleOff className="w-5 h-5" />,
        content: (
            <>
                <div className="bg-rose-50 dark:bg-rose-950/20 border-l-4 border-rose-500 p-6 mb-6 text-rose-900 dark:text-rose-200">
                    <strong>Strict No-Returns Policy:</strong> Short Date and Clearance items are sold on a final sale basis.
                </div>
                <p>
                    Due to the nature of these products and their limited shelf life, we typically do not accept returns or offer refunds for Short Date or Clearance items unless they are delivered in a damaged condition or differ significantly from the description.
                </p>
            </>
        )
    },
    {
        id: "quality-guarantee",
        title: "Quality Guarantee",
        icon: <Tag className="w-5 h-5" />,
        content: (
            <>
                <p>
                    Although these items are approaching their BBD, they are stored correctly and are safe for consumption and sale up to that date.
                </p>
                <p>
                    We guarantee that all Short Date stock is within the saleable condition as defined by relevant food safety standards at the time of dispatch.
                </p>
            </>
        )
    },
    {
        id: "resale-restrictions",
        title: "Resale Restrictions",
        icon: <AlertTriangle className="w-5 h-5" />,
        content: (
            <>
                <p>
                    Buyers of Short Date stock are responsible for ensuring these items are sold to the end consumer before the expiry date.
                </p>
                <p>
                    OSMO accepts no liability for stock that expires after it has been delivered and accepted by the buyer.
                </p>
            </>
        )
    }
];
