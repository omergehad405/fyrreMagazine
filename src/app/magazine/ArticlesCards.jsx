"use client";

import { useArticles } from "@/context/articlesContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const categories = ["all", "sculptures", "street art", "art"];

function ArticlesCards() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCards, setVisibleCards] = useState({});
    const { articles } = useArticles();
    const cardRefs = useRef([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

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
    }, [articles, currentPage]);

    // Always start from top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredArticles =
        activeCategory === "all"
            ? [...articles]
            : articles.filter(
                (article) =>
                    article.category?.toLowerCase().trim() ===
                    activeCategory.toLowerCase().trim()
            );

    // 🔹 Pagination logic
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const safePage = Math.min(currentPage, totalPages || 1);
    const startIndex = (safePage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = filteredArticles.slice(startIndex, endIndex);

    // 🔹 Handle pagination
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 🔹 Reset pagination + scroll to top on category change
    useEffect(() => {
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeCategory]);

    return (

        <section className="my-10 w-[95%] mx-auto">
            {/* Categories */}
            <div className="flex items-center justify-between flex-wrap mb-10">
                <h1 className="uppercase font-bold text-lg">Categories</h1>

                <div className="flex items-center lg:gap-5 flex-wrap">
                    {categories.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(category)}
                            className={`${activeCategory === category
                                ? "bg-black text-white"
                                : "bg-transparent text-black"
                                } capitalize border rounded-full py-1 px-5 cursor-pointer transition-all duration-300`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {currentArticles.map((article, idx) => (
                    <div
                        key={article.id}
                        data-id={article.id}
                        ref={(el) => (cardRefs.current[idx] = el)}
                        className={`relative border p-10 flex flex-col gap-5 hover:shadow-lg transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${visibleCards[article.id]
                            ? "opacity-100 translate-y-0 rotate-0"
                            : "opacity-0 translate-y-10 rotate-[5deg]"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <span className="font-normal ml-1">{article.date}</span>

                            <button
                                onClick={() =>
                                    setActiveCategory(article.category.toLowerCase())
                                }
                                className="capitalize border rounded-full py-1 px-5 cursor-pointer transition-all duration-300"
                            >
                                {article.category}
                            </button>
                        </div>

                        {/* Article Image */}
                        <Link href={`/magazine/${article.id}`}>
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={400}
                                height={400}
                                className="w-full object-cover scale-100 hover:scale-105 transition-all duration-300"
                            />
                        </Link>

                        {/* Article Info */}
                        <Link
                            href={`/magazine/${article.id}`}
                            className="font-bold text-2xl leading-snug"
                        >
                            {article.title}
                        </Link>

                        <p className="text-lg leading-[1.5]">{article.description}</p>

                        <div className="flex items-center gap-10 mt-auto">
                            <p className="text-sm font-bold capitalize">
                                text
                                <Link
                                    href={"/magazine"}
                                    className="font-normal ml-2 underline"
                                >
                                    {article.author}
                                </Link>
                            </p>

                            <p className="text-sm font-bold capitalize">
                                Duration{" "}
                                <span className="font-normal ml-2">{article.readTime}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center gap-5 mt-10">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-2 uppercase font-bold ${currentPage === 1 ? "opacity-0" : "cursor-pointer"
                            }`}
                    >
                        <FaArrowLeft />
                        Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-2 uppercase font-bold ${currentPage === totalPages ? "opacity-0" : "cursor-pointer"
                            }`}
                    >
                        Next
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </section>
    )
}

export default ArticlesCards;