"use client";

import { usePodcasts } from "@/context/podcastsContext";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaUser, FaUserCircle, FaFacebook, FaInstagram, FaTwitter, FaArrowRight, FaSpotify, FaApple, FaSoundcloud } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
function PodcastPage() {
    const { podcasts } = usePodcasts();
    const params = useParams();
    const [visibleCards, setVisibleCards] = useState({});
    const [lineVisible, setLineVisible] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false)
    const cardRefs = useRef([]);
    const sectionRef = useRef(null);
    const headerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("data-id");
                        setVisibleCards((prev) => ({ ...prev, [id]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [podcasts]);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const headerEl = headerRef.current;

        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setLineVisible(true);
            });
        }, {
            threshold: 0,
            rootMargin: "0px 0px -150px 0px",
        });

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setHeaderVisible(true);
            });
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px 10px 0px",
        });

        if (sectionEl) lineObserver.observe(sectionEl);
        if (headerEl) headerObserver.observe(headerEl);

        return () => {
            if (sectionEl) lineObserver.unobserve(sectionEl);
            if (headerEl) headerObserver.unobserve(headerEl);
        };
    }, []);


    // Find the podcast by ID
    const podcast = podcasts.find(podcast => podcast.id === parseInt(params.id));

    // Handle case where podcast is not found
    if (!podcast) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">podcast Not Found</h1>
                    <p className="text-lg mb-8">The podcast you are looking for doesn not exist.</p>
                    <Link
                        href="/podcasts"
                        className="inline-flex items-center gap-2 bg-black font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <FaArrowLeft />
                        go back
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen border-t w-[95%] mx-auto bg-white">
            <div className="w-full py-8 flex items-center justify-between ">
                <Link
                    href="/podcasts"
                    className="uppercase inline-flex items-center gap-2 font-bold text-lg"
                >
                    <FaArrowLeft />
                    go Back
                </Link>

                <h1 className="font-bold uppercase text-3xl">podcast</h1>

            </div>
            {/* Podcast content  */}
            <div className="flex items-start justify-center gap-10 flex-wrap lg:w-[80%] w-[95%] mx-auto py-12">
                <div className="w-full lg:w-[300px] lg:sticky top-20 ">
                    <div className="border-b pb-5">
                        {/* Article image  */}
                        <Image
                            src={podcast.image}
                            alt={podcast.title}
                            width={130}
                            height={130}
                            className="w-full h-full object-cover mb-5"
                            priority
                        />

                        <div className="flex items-center justify-between">
                            <span className="uppercase font-bold">listen on</span>
                            <div className="flex items-center gap-3">
                                <Link href={"https://open.spotify.com/"}><FaSpotify /></Link>
                                <Link href={"https://music.apple.com/us/new"}><FaApple /></Link>
                                <Link href={"https://soundcloud.com/"}><FaSoundcloud /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mt-5">
                        <div className="flex justify-between text-lg font-bold capitalize">
                            date
                            <span className="text-sm text-gray-500">{podcast.date}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold capitalize">
                            duration
                            <span className="text-sm text-gray-500">{podcast.duration}</span>
                        </div>
                        <div className="flex justify-between font-bold capitalize">
                            share
                            <div className="flex items-center gap-5 text-black text-xl">
                                <Link href={"https://www.facebook.com/"} className="text-sm"><FaFacebook /></Link>
                                <Link href={"https://www.instagram.com/"} className="text-sm"><FaInstagram /></Link>
                                <Link href={"https://x.com/"} className="text-sm"><FaTwitter /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[600px]">
                    <span className="uppercase font-bold">Episode 0{podcast.id}</span>

                    <h1 className="font-bold lg:text-7xl text-4xl my-5 uppercase">{podcast.title}</h1>

                    <p className="text-md font-bold mb-8">
                        {podcast.description}
                    </p>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
                        </p>
                        <p>
                            Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
                        </p>

                    </div>

                    <div className="font-bold lg:text-5xl text-3xl flex gap-10 border-y py-10 my-10">
                        <ImQuotesLeft className="text-7xl" />
                        <span>The greatest glory in living lies not in never falling, but in rising every time we fall.</span>

                    </div>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="font-bold text-black">Est pellentesque elit ullamcorper dignissim. Consectetur a erat nam at. Blandit libero volutpat sed cras ornare arcu. Iaculis urna id volutpat lacus laoreet. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                        <p>
                            Vitae turpis massa sed elementum tempus egestas sed. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Viverra justo nec ultrices dui sapien eget. At risus viverra adipiscing at in tellus integer feugiat. Elementum eu facilisis sed odio morbi quis commodo. Arcu cursus vitae congue mauris rhoncus aenean. Auctor elit sed vulputate mi sit amet mauris commodo quis. Lectus sit amet est placerat in egestas erat imperdiet sed. Eu mi bibendum neque egestas congue quisque. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Pharetra vel turpis nunc eget lorem. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. In metus vulputate eu scelerisque felis imperdiet. Elementum pulvinar etiam non quam lacus suspendisse. Sem fringilla ut morbi tincidunt augue. Id venenatis a condimentum vitae sapien. Varius quam quisque id diam vel.</p>
                        <p>
                            Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Neque vitae tempus quam pellentesque nec. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Mattis enim ut tellus elementum sagittis. In fermentum et sollicitudin ac orci phasellus. Est sit amet facilisis magna etiam tempor orci. Lacinia at quis risus sed vulputate odio ut. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aenean vel elit scelerisque mauris pellentesque. Gravida arcu ac tortor dignissim. Ac tortor dignissim convallis aenean.
                        </p>

                    </div>

                </div>
            </div>

            {/* Latest podcasts  */}

            <div ref={sectionRef} className="my-30">
                {/* Animated Line */}
                <span
                    className={`bg-black h-[1px] block mb-20 transition-all duration-[1200ms] ease-in-out ${lineVisible ? "w-full" : "w-0"
                        }`}
                ></span>

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h1 ref={headerRef} className={`${headerVisible ? "top-0 opacity-100" : "top-[10rem] opacity-0"} relative font-bold lg:text-8xl text-5xl uppercase transtion-all duration-700`}>Latest Posts</h1>
                    <Link
                        href={"/podcasts"}
                        className="lg:inline-flex hidden font-bold uppercase items-center gap-3 lg:pr-0 pr-5"
                    >
                        <span className="">see all</span>
                        <FaArrowRight />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {podcasts.slice(-3).map((podcast, idx) => (
                        <div
                            key={podcast.id}
                            data-id={podcast.id}
                            ref={(el) => (cardRefs.current[idx] = el)}
                            className={`relative border p-10 flex flex-col gap-5 hover:shadow-lg transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${visibleCards[podcast.id]
                                ? "opacity-100 translate-y-0 rotate-0"
                                : "opacity-0 translate-y-10 rotate-[5deg]"
                                }`}
                        >

                            {/* Article Image */}
                            <Link href={`/podcasts/${podcast.id}`}>
                                <Image
                                    src={podcast.image}
                                    alt={podcast.title}
                                    width={400}
                                    height={400}
                                    className="w-full object-cover scale-100 hover:scale-105 transition-all duration-300"
                                />
                            </Link>

                            {/* Article Info */}
                            <Link
                                href={`/podcasts/${podcast.id}`}
                                className="font-bold text-2xl leading-snug"
                            >
                                {podcast.title}
                            </Link>

                            <p className="text-lg leading-[1.5]">{podcast.description}</p>

                            <div className="flex items-center gap-10 mt-auto">
                                <p className="text-sm font-bold capitalize">
                                    date
                                    <Link
                                        href={"/podcasts"}
                                        className="font-normal ml-2"
                                    >
                                        {podcast.date}
                                    </Link>
                                </p>

                                <p className="text-sm font-bold capitalize">
                                    duration
                                    <span className="font-normal ml-2">{podcast.duration}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href={"/podcasts"}
                    className="lg:hidden inline-flex items-center gap-3 text-xl mt-10 font-bold uppercase"
                >
                    <span className="">see all</span>
                    <FaArrowRight />
                </Link>
            </div>


        </div>
    );
}

export default PodcastPage;
