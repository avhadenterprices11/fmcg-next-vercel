"use client";

import { LegalLayout } from "@/components/pages/legal/components/LegalLayout";
import { Shield } from "lucide-react";
import { PRIVACY_SECTIONS } from "@/components/pages/legal/data/privacy.data";

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy & Cookie Policy"
            lastUpdated="March 04, 2026"
            sections={PRIVACY_SECTIONS}
            icon={<Shield className="w-6 h-6" />}
        >
            <p>
                This document outlines our policies regarding cookies and email communications to ensure transparency on how we handle your information and improve your user experience.
            </p>
        </LegalLayout>
    );
}
