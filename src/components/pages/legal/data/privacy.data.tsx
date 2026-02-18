import { Eye, FileCheck, Lock, Users, Globe } from "lucide-react";
import { LegalSection } from "../types/legal.types";

export const PRIVACY_SECTIONS: LegalSection[] = [
    {
        id: "collection",
        title: "Information We Collect",
        icon: <Eye className="w-5 h-5" />,
        content: (
            <>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Business information (company name, industry, trade requirements)</li>
                    <li>Communication preferences and inquiry details</li>
                    <li>Account credentials for registered users</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                    We also automatically collect certain information when you visit our website, such as IP address, browser type, device information, and usage patterns.
                </p>
            </>
        )
    },
    {
        id: "usage",
        title: "How We Use Your Information",
        icon: <FileCheck className="w-5 h-5" />,
        content: (
            <>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>Process and respond to your trade inquiries</li>
                    <li>Facilitate connections with brand owners and distribution partners</li>
                    <li>Provide market intelligence and trade coordination services</li>
                    <li>Send you relevant business updates and communications</li>
                    <li>Improve our services and user experience</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Comply with legal obligations and industry regulations</li>
                </ul>
            </>
        )
    },
    {
        id: "security",
        title: "Data Security",
        icon: <Lock className="w-5 h-5" />,
        content: (
            <>
                <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Secure data storage and backup procedures</li>
                </ul>
                <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 my-6 text-amber-900 dark:text-amber-200 text-sm">
                    However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your information.
                </div>
            </>
        )
    },
    {
        id: "sharing",
        title: "Information Sharing",
        icon: <Users className="w-5 h-5" />,
        content: (
            <>
                <p>We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li><strong>With Trade Partners:</strong> When facilitating business connections, we share relevant information with brand owners and distribution partners</li>
                    <li><strong>Service Providers:</strong> We engage trusted third-party service providers to support our operations</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="mt-4 font-bold text-emerald-700 dark:text-emerald-400">
                    We do not sell your personal information to third parties.
                </p>
            </>
        )
    },
    {
        id: "rights",
        title: "Your Rights",
        icon: <Globe className="w-5 h-5" />,
        content: (
            <>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate or incomplete information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to object to or restrict certain processing activities</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                    To exercise any of these rights, please contact us at <a href="mailto:privacy@osmo.com" className="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-500/20 underline-offset-4 hover:decoration-emerald-500">privacy@osmo.com</a>
                </p>
            </>
        )
    },
    {
        id: "contact",
        title: "Contact Us",
        content: (
            <>
                <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-card text-card-foreground rounded-xl p-8 mt-6 border border-border shadow-sm">
                    <p className="font-bold text-lg mb-2 text-emerald-500">OSMO Privacy Team</p>
                    <p className="text-muted-foreground">Email: privacy@osmo.com</p>
                    <p className="text-muted-foreground">Address: [Your Business Address]</p>
                </div>
            </>
        )
    }
];
