import { Cookie, Settings, Fingerprint, Globe, ShieldAlert } from "lucide-react";
import { LegalSection } from "../types/legal.types";

export const COOKIE_SECTIONS: LegalSection[] = [
    {
        id: "what-are-cookies",
        title: "What Are Cookies",
        icon: <Cookie className="w-5 h-5" />,
        content: (
            <>
                <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember your preferences and actions over a period of time.
                </p>
                <p>
                    We use cookies to ensure that our website functions properly, to analyze our traffic, and to personalize content and ads.
                </p>
            </>
        )
    },
    {
        id: "types-of-cookies",
        title: "Types of Cookies We Use",
        icon: <Settings className="w-5 h-5" />,
        content: (
            <>
                <p>We use the following types of cookies on our website:</p>
                <ul className="list-disc pl-6 space-y-4 marker:text-emerald-500">
                    <li>
                        <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                    </li>
                    <li>
                        <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                    </li>
                    <li>
                        <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </li>
                    <li>
                        <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                    </li>
                </ul>
            </>
        )
    },
    {
        id: "managing-cookies",
        title: "Managing Cookies",
        icon: <Fingerprint className="w-5 h-5" />,
        content: (
            <>
                <p>
                    You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                </p>
                <div className="bg-muted/50 border-l-4 border-primary p-6 my-6 text-muted-foreground">
                    <p className="font-semibold mb-2">Browser Settings:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Safari</li>
                        <li>Microsoft Edge</li>
                    </ul>
                </div>
            </>
        )
    },
    {
        id: "third-party",
        title: "Third-Party Cookies",
        icon: <Globe className="w-5 h-5" />,
        content: (
            <>
                <p>
                    In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
                </p>
            </>
        )
    },
    {
        id: "updates",
        title: "Updates to This Policy",
        icon: <ShieldAlert className="w-5 h-5" />,
        content: (
            <>
                <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
            </>
        )
    }
];
