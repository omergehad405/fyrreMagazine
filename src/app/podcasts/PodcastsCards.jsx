"use client"

import { usePodcasts } from "@/context/podcastsContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function PodcastsCards() {
    const { podcasts } = usePodcasts()
    return (
        <section className="my-20 w-[95%] mx-auto">
            {/* Cards */}
            <div className="">
                {podcasts.map((podcast, idx) => (
                    <div key={podcast.id} className="flex flex-wrap items-center justify-between border-b py-10">
                        <div className="flex flex-wrap items-center lg:gap-15 gap-5">

                            <div className="flex lg:items-center lg:flex-row flex-col-reverse lg:gap-10 gap-5">
                                <span className="font-bold text-xl">0{podcast.id}</span>
                                {/* podcast Image */}
                                <Link href={`/podcast/${podcast.id}`}>
                                    <Image
                                        src={podcast.image}
                                        alt={podcast.title}
                                        width={130}
                                        height={130}
                                        className="w-full lg:h-full h-[50vh] lg:object-cover object-contain"
                                    />
                                </Link>
                            </div>
                            {/* podcast title */}
                            <Link
                                href={`/podcasts/${podcast.id}`}
                                className="lg:w-[350px] font-bold text-3xl leading-snug"
                            >
                                {podcast.title}
                            </Link>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:items-center gap-5 mt-5">
                            <p className="text-md font-bold capitalize">
                                date
                                <Link
                                    href={"/podcasts"}
                                    className="font-normal ml-2"
                                >
                                    {podcast.date}
                                </Link>
                            </p>

                            <p className="text-md font-bold capitalize">
                                Duration
                                <span className="font-normal ml-2">{podcast.duration}</span>
                            </p>

                            <Link href={`podcasts/${podcast.id}`} className="hidden lg:flex uppercase font-bold text-sm items-center gap-2">
                                listen
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default PodcastsCards;