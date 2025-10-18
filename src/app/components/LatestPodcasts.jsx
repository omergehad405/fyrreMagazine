"use client";

import { useEffect, useRef, useState } from "react";
import { usePodcasts } from "@/context/podcastsContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function LatestPodcasts() {
    const { podcasts } = usePodcasts();
    const [lineVisible, setLineVisible] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false)
    const [cardsVisible, setCardsVisible] = useState(false)
    const sectionRef = useRef(null);
    const headerRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        // 🔹 Observer for the line animation
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setLineVisible(true);
            });
        }, {
            threshold: 0,
            rootMargin: "0px 0px -150px 0px",
        });

        // 🔹 Observer for the header animation
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setHeaderVisible(true);
            });
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px 10px 0px",
        });

        // 🔹 Observer for the cards' **parent grid**
        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // when the grid (parent div) enters the viewport
                if (entry.isIntersecting) {
                    setCardsVisible(true); // 🔥 trigger all cards
                }
            });
        }, {
            threshold: 0.3, // triggers when 30% of grid is visible
            rootMargin: "0px 0px -100px 0px", // little delay
        });

        // 🔹 Attach observers
        if (sectionRef.current) lineObserver.observe(sectionRef.current);
        if (headerRef.current) headerObserver.observe(headerRef.current);
        if (cardsRef.current) cardsObserver.observe(cardsRef.current); // ✅ parent of all cards

        // 🔹 Cleanup observers on unmount
        return () => {
            if (sectionRef.current) lineObserver.unobserve(sectionRef.current);
            if (headerRef.current) headerObserver.unobserve(headerRef.current);
            if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
        };
    }, []);


    return (
        <section ref={sectionRef} className="mt-35 relative overflow-hidden">
            {/* Animated Line */}
            <span
                className={`bg-black h-[1px] block mb-20 transition-all duration-[1200ms] ease-in-out ${lineVisible ? "w-full" : "w-0"
                    }`}
            ></span>

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <h1 ref={headerRef} className={`${headerVisible ? "top-0 opacity-100" : "top-[10rem] opacity-0"} relative font-bold lg:text-9xl text-5xl uppercase transtion-all duration-700`}>Podcasts</h1>
                <Link
                    href={"/podcasts"}
                    className="font-bold uppercase items-center gap-3 lg:pr-0 pr-5 inline-flex"
                >
                    <span className="lg:block hidden">all Podcasts</span>
                    <FaArrowRight />
                </Link>
            </div>

            {/* Podcast Grid */}
            <div ref={cardsRef} className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0 border">
                {podcasts.map((podcast) => (
                    <div
                        key={podcast.id}
                        className={`${cardsVisible ? "opacity-100 rotate-0 top-0" : "opacity-0 rotate-[15deg] top-[5rem]"
                            } relative border p-10 flex flex-col gap-5 hover:shadow-lg transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]`}
                    >
                        {/* Podcast Image */}
                        <Image
                            src={podcast.image}
                            alt={podcast.title}
                            width={400}
                            height={400}
                            className="w-full object-cover scale-100 hover:scale-105 transition-all duration-300"
                        />

                        {/* Podcast Info */}
                        <Link
                            href={`/podcasts/${podcast.id}`}
                            className="font-bold text-2xl leading-snug"
                        >
                            {podcast.title}
                        </Link>

                        <div className="flex items-center gap-10 mt-auto">
                            <p className="text-sm font-bold">
                                Date <span className="font-normal ml-1">{podcast.date}</span>
                            </p>
                            <p className="text-sm font-bold">
                                Duration{" "}
                                <span className="font-normal ml-1">{podcast.duration}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LatestPodcasts;
