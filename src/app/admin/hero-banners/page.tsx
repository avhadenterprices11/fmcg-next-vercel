import { getCarouselItems } from "@/app/actions/carousel";
import HeroBannersClient from "./client";

export default async function HeroBannersPage() {
    // Fetch all banners including drafts for the admin dashboard
    const banners = await getCarouselItems(true);

    return <HeroBannersClient initialData={banners} />;
}
