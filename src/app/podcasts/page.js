import HeroSection from "@/components/HeroSection";
import PodcastsCards from "./PodcastsCards";

function PodcastsPage() {

    return (<>
        <h1>
            <HeroSection text="podcast" />
            <PodcastsCards />
        </h1>
    </>)
}

export default PodcastsPage;
