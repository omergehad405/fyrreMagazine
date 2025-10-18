import React from "react";
import NewsTicker from "./components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import LatestMagazene from "./components/LatestMagazene";
import LatestArticles from "./components/LatestArticles";
import LatestPodcasts from "./components/LatestPodcasts";
import PopularAuthors from "./components/PopularAuthors";

function page() {
  return (
    <div className="w-[95%] mx-auto">
      <HeroSection text="Art & life"/>
      <NewsTicker />
      <LatestMagazene />
      <LatestArticles />
      <LatestPodcasts/>
      <PopularAuthors/>
    </div>
  );
}

export default page;
