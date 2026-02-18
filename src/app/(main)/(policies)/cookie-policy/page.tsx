"use client";

import { LegalLayout } from "@/components/pages/legal/components/LegalLayout";
import { Cookie } from "lucide-react";
import { COOKIE_SECTIONS } from "@/components/pages/legal/data/cookie.data";

export default function CookiePolicyPage() {
    return (
        <LegalLayout
            title="Cookie Policy"
            lastUpdated="January 14, 2026"
            sections={COOKIE_SECTIONS}
            icon={<Cookie className="w-6 h-6" />}
        >
            <p>
                This Cookie Policy explains how OSMO uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
        </LegalLayout>
    );
}
