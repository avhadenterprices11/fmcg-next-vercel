import { Handshake, CheckCircle, AlertTriangle, Shield, Scale } from "lucide-react";
import { LegalSection } from "../types/legal.types";

export const TERMS_SECTIONS: LegalSection[] = [
    {
        id: "service-description",
        title: "Service Description",
        icon: <Handshake className="w-5 h-5" />,
        content: (
            <>
                <p>
                    OSMO provides trade coordination and brand access services in the FMCG and spirits sectors. Our services include:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>Facilitating connections between qualified trade partners and brand owners</li>
                    <li>Providing market intelligence and trade insights</li>
                    <li>Coordinating access to brand portfolios based on availability and mandate</li>
                    <li>Supporting regulatory compliance and distribution strategy</li>
                </ul>
                <div className="bg-muted/50 border-l-4 border-primary p-6 my-6 italic text-muted-foreground">
                    Important: All trade engagements are conducted offline. We do not facilitate online transactions or guarantee supply of any listed brand.
                </div>
            </>
        )
    },
    {
        id: "eligibility",
        title: "Eligibility",
        icon: <CheckCircle className="w-5 h-5" />,
        content: (
            <>
                <p>To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal authority to enter into binding agreements</li>
                    <li>Represent a legitimate business entity for B2B trade purposes</li>
                    <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                    <li>Provide accurate and complete information</li>
                </ul>
                <p className="mt-4 text-muted-foreground font-medium">
                    We reserve the right to verify your eligibility and refuse service to any party at our discretion.
                </p>
            </>
        )
    },
    {
        id: "disclaimers",
        title: "Disclaimers and Limitations",
        icon: <AlertTriangle className="w-5 h-5" />,
        content: (
            <>
                <p>Please note the following important disclaimers:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li><strong>No Guarantees:</strong> We do not guarantee access to any listed brand, market, or distribution channel</li>
                    <li><strong>Availability:</strong> Brand availability varies by market, timing, mandate, and brand owner approval</li>
                    <li><strong>No Ownership:</strong> Listings do not imply exclusivity, ownership, or guaranteed supply</li>
                    <li><strong>Inquiry-Based:</strong> All engagements are handled on an inquiry basis through direct offline discussions</li>
                    <li><strong>Third-Party Relationships:</strong> Final agreements are between you and brand owners/partners, not OSMO</li>
                </ul>
                <p className="mt-4 font-bold text-foreground">
                    Services are provided "as is" without warranties of any kind, express or implied.
                </p>
            </>
        )
    },
    {
        id: "responsibilities",
        title: "User Responsibilities",
        icon: <Shield className="w-5 h-5" />,
        content: (
            <>
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Use our services only for lawful business purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable trade laws and regulations</li>
                </ul>
            </>
        )
    },
    {
        id: "liability",
        title: "Limitation of Liability",
        icon: <Scale className="w-5 h-5" />,
        content: (
            <>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                    <li>OSMO shall not be liable for any indirect, incidental, special, or consequential damages</li>
                    <li>We are not responsible for the actions or omissions of third-party brand owners or partners</li>
                    <li>We do not guarantee the accuracy, completeness, or timeliness of information provided</li>
                    <li>Our total liability shall not exceed the fees paid by you for our services in the 12 months preceding the claim</li>
                </ul>
            </>
        )
    },
    {
        id: "disputes",
        title: "Governing Law and Disputes",
        content: (
            <>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p className="mt-4">
                    Any disputes arising from these Terms or use of our services shall be resolved through:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500 mt-2">
                    <li>Good faith negotiation between the parties</li>
                    <li>Mediation, if negotiation is unsuccessful</li>
                    <li>Binding arbitration or court proceedings as a last resort</li>
                </ul>
            </>
        )
    },
    {
        id: "changes",
        title: "Changes to Terms",
        content: (
            <>
                <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500 mt-2">
                    <li>Posting the updated Terms on our website</li>
                    <li>Updating the "Last Updated" date</li>
                    <li>Sending email notifications to registered users for significant changes</li>
                </ul>
                <p className="mt-4 text-foreground font-medium">
                    Your continued use of our services after changes become effective constitutes acceptance of the revised Terms.
                </p>
            </>
        )
    },
    {
        id: "contact",
        title: "Contact Information",
        content: (
            <>
                <p>
                    For questions or concerns regarding these Terms of Service, please contact:
                </p>
                <div className="bg-card text-card-foreground rounded-xl p-8 mt-6 border border-border shadow-sm">
                    <p className="font-bold text-lg mb-2 text-emerald-500">OSMO Legal Team</p>
                    <p className="text-muted-foreground">Email: legal@osmo.com</p>
                    <p className="text-muted-foreground">Address: [Your Business Address]</p>
                </div>
            </>
        )
    }
];
