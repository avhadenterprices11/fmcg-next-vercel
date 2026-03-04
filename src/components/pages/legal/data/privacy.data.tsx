import { Cookie, Info, ShieldCheck, Mail, Settings } from "lucide-react";
import { LegalSection } from "../types/legal.types";

export const PRIVACY_SECTIONS: LegalSection[] = [
    {
        id: "website-cookies",
        title: "Website Cookies",
        icon: <Cookie className="w-5 h-5" />,
        content: (
            <>
                <p>
                    This website uses cookies to store information on your computer. Some of these cookies are essential to make our site work, and others help us improve our website by giving us insights into site use.
                </p>
            </>
        )
    },
    {
        id: "what-are-cookies",
        title: "What are Cookies?",
        icon: <Info className="w-5 h-5" />,
        content: (
            <>
                <p>
                    Cookies are small pieces of information that a website stores on your computer. They are often there to make your browsing experience more enjoyable or to gather information about the site user’s behaviour. There are two types of cookie:
                </p>
                <div className="space-y-4 mt-4">
                    <div>
                        <p className="font-bold text-emerald-600 dark:text-emerald-400">Session Cookies</p>
                        <p className="text-muted-foreground text-sm">
                            These cookie files are erased when you close your browser. This cookie stores your browsing information and will be active until you leave a site and close your browser.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-emerald-600 dark:text-emerald-400">Persistent Cookies</p>
                        <p className="text-muted-foreground text-sm">
                            These files stay in one of a browser’s subfolder until they are deleted manually or your browser deletes them based on the duration period contained within the persistent cookie’s file. You can set your browser to automatically remove these cookies on login off.
                        </p>
                    </div>
                </div>
                <p className="mt-4 text-sm italic">
                    More Information: <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Read all about cookies here &gt;</a>
                </p>
            </>
        )
    },
    {
        id: "cookies-usage",
        title: "What are Cookies used for?",
        icon: <ShieldCheck className="w-5 h-5" />,
        content: (
            <>
                <p>
                    Cookies are an important part of the internet. They make using our website much smoother and affect lots of the useful features of the website.
                </p>
            </>
        )
    },
    {
        id: "specific-cookies",
        title: "What Cookies does FMCG Next use?",
        icon: <Settings className="w-5 h-5" />,
        content: (
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-lg mb-2">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                        <strong>Cookie Details:</strong> _utma, _utmb, _utmc_utmz
                    </p>
                    <p className="text-sm">
                        <strong>Cookie Purpose:</strong> We anonymously keep track of user behaviour to help us keep our site content relevant and easy to find. It’s also useful to identify trends and patterns of how people navigate through our site.
                    </p>
                    <p className="mt-2 text-sm italic">
                        More Information: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">View a Google privacy overview here &gt;</a>
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">Hot Jar</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                        <strong>Cookie Details:</strong> hjSiteLang, X-Access-Key, JSESSIONID, NREUM, NRAGENT, _ga
                    </p>
                    <p className="text-sm">
                        <strong>Cookie Purpose:</strong> We anonymously keep track of user behaviour to help us keep our site content relevant and easy to find. It’s also useful to identify trends and patterns of how people navigate through our site.
                    </p>
                    <p className="mt-2 text-sm italic">
                        More Information: <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">View further information on Hot Jar here &gt;</a>
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">Add This Social Sharing</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                        <strong>Cookie Details:</strong> __atuvc
                    </p>
                    <p className="text-sm">
                        <strong>Cookie Purpose:</strong> Enabling you to share stories and page content via social media components, like Facebook and Twitter.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "disabling-cookies",
        title: "How to turn cookies off",
        content: (
            <>
                <p className="mb-4">If you do not want these cookies to be used, you can turn cookies off in your browser by following these steps:</p>
                <ol className="list-decimal pl-6 space-y-2 text-sm">
                    <li>Click Tools &amp; select Options.</li>
                    <li>Click the Privacy tab, and select Advanced.</li>
                    <li>Click Override automatic cookie handling.</li>
                    <li>Specify how you wish to handle cookies from first-party Websites and third-party Websites.</li>
                </ol>
            </>
        )
    },
    {
        id: "email-communications",
        title: "E-Mail communications – Privacy Policy",
        icon: <Mail className="w-5 h-5" />,
        content: (
            <>
                <p className="mb-4">We use open tracking to track performance of email campaigns.</p>
                <p className="mb-4">
                    By signing up to receive our e-mail communications you accept when we send you email campaigns, an open tracker will be added to each email. An open tracker is a tiny, invisible graphic embedded to the bottom of the HTML email, unique to each campaign sent.
                </p>
                <p>
                    Every time the email is opened, the open-tracker graphic is downloaded and allows us to track opens and any links clicked.
                </p>
            </>
        )
    }
];

