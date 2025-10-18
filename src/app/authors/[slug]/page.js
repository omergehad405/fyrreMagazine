"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
import { useAuthors } from "@/context/authorsContext";
import { useArticles } from "@/context/articlesContext";

export default function AuthorPage() {
    const { slug } = useParams();
    const { authors } = useAuthors();
    const author = authors.find(a => a.slug === slug);
    const { articles } = useArticles();
    const [lineVisible, setLineVisible] = useState(false)
    const [headerVisible, setHeaderVisible] = useState(false)
    const [authorCardVisible, setAuthorCardVisible] = useState([])
    const authorCardRef = useRef([])
    const sectionRef = useRef(null)
    const headerRef = useRef(null)

    const filteredArticles = articles.filter(
        (article) => article.author &&
            article.author.toLowerCase().trim() === author.name.toLowerCase().trim()
    );

    useEffect(() => {
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLineVisible(true);
                }
            });
        }, {
            root: null, threshold: 0, rootMargin: "0px 0px -150px 0px",
        })

        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                }
            });
        }, {
            root: null, threshold: 0.2, rootMargin: "0px 0px 10px 0px"
        })

        const authorCardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"));
                    setAuthorCardVisible((prev) => {
                        const updated = [...prev];
                        updated[index] = true;
                        return updated;
                    });
                }
            });
        }, { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0.3 }
        )

        if (sectionRef.current) lineObserver.observe(sectionRef.current);
        if (headerRef.current) headerObserver.observe(headerRef.current);
        authorCardRef.current.forEach((card) => {
            if (card) authorCardObserver.observe(card);
        });

        return () => {
            if (sectionRef.current) lineObserver.unobserve(sectionRef.current);
            if (headerRef.current) headerObserver.unobserve(headerRef.current);
            authorCardRef.current.forEach((card) => {
                if (card) authorCardObserver.unobserve(card);
            });
        };
    }, [filteredArticles])

    // Handle case where author is not found
    if (!author) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">author Not Found</h1>
                    <p className="text-lg mb-8">The author you're looking for doesn't exist.</p>
                    <Link
                        href="/authors"
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
                    href="/authors"
                    className="uppercase inline-flex items-center gap-2 font-bold text-lg"
                >
                    <FaArrowLeft />
                    go Back
                </Link>

                <h1 className="font-bold uppercase text-3xl">author</h1>

            </div>
            {/* author content  */}
            <div className="flex items-start justify-center gap-10 flex-wrap lg:w-[80%] w-[95%] mx-auto py-12">
                <div className="w-full lg:w-[300px] lg:sticky top-20 ">
                    <div className="border-b pb-5">
                        {/* Article image  */}
                        <Image
                            src={author.image}
                            alt={author.title}
                            width={100}
                            height={100}
                            className="w-full h-full rounded-full mb-5"
                            priority
                        />

                        <div className="flex items-center justify-between">
                            <span className="uppercase font-bold">follow</span>
                            <div className="flex items-center gap-3">
                                <Link href={"https://www.facebook.com/"} className="text-sm"><FaFacebook /></Link>
                                <Link href={"https://www.instagram.com/"} className="text-sm"><FaInstagram /></Link>
                                <Link href={"https://x.com/"} className="text-sm"><FaTwitter /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mt-5">
                        <div className="flex justify-between text-lg font-bold capitalize">
                            job
                            <span className="text-sm font-normal">{author.job}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold capitalize">
                            city
                            <span className="text-sm font-normal">{author.city}</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[600px]">
                    <h1 className="font-bold lg:text-7xl text-4xl my-5 uppercase">{author.name}</h1>

                    <p className="text-md font-bold mb-8">
                        {author.description}
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
            {/* Author articles  */}
            <div ref={sectionRef} className="my-30">
                {/* Animated Line */}
                <span
                    className={`bg-black h-[1px] block mb-20 transition-all duration-[1200ms] ease-in-out ${lineVisible ? "w-full" : "w-0"
                        }`}
                ></span>

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h1 ref={headerRef} className={`${headerVisible ? "top-0 opacity-100" : "top-[10rem] opacity-0"} relative font-bold lg:text-5xl text-3xl transtion-all duration-700`}>Articles by
                        <span className="capitalize ml-3">{author.name}</span></h1>
                </div>

                {/* Articles section */}
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article, i) => (
                            <div
                                key={article.id}
                                ref={(el) => (authorCardRef.current[i] = el)}
                                data-index={i}
                                className={`
                                ${article.id % 2 == 0 ? "lg:border-l-transparent" : "lg:border-r-transparent"}
                                ${authorCardVisible[i]
                                        ? "opacity-100 top-0"
                                        : "opacity-0 top-[10rem]"}
                                         relative border flex items-center gap-5 p-8 transition-all duration-[1000ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] origin-center`}
                            >
                                {/* Article Image */}
                                <div className="w-[130px] h-[130px]  overflow-hidden flex-shrink-0">
                                    <Image
                                        src={article.image}
                                        alt={article.title || 'Article image'}
                                        width={120}
                                        height={120}
                                        className="w-full h-full object-cover scale-100 hover:scale-110 transition-all duration-300"
                                    />
                                </div>

                                {/* Article info */}
                                <div>
                                    <Link
                                        href={`/articles/${article.id}`}
                                        className="font-bold text-3xl mb-3 block"
                                    >
                                        {article.title}
                                    </Link>
                                    <div className="flex items-center gap-5">
                                        <p className="font-bold text-sm capitalize">
                                            date <span className="font-normal ml-1">{article.date}</span>
                                        </p>
                                        <p className="font-bold text-sm capitalize">
                                            read <span className="font-normal ml-1">{article.readTime}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-10 font-semibold text-lg">
                            No articles found for this author.
                        </p>
                    )}
                </div>
            </div>


        </div>
    );
}
