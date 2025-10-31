"use client";

import { useAuthors } from "@/context/authorsContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

function PopularAuthors() {
    const { authors } = useAuthors();
    const [lineVisible, setLineVisible] = useState(false)
    const [headerVisible, setHeaderVisible] = useState(false)
    const [authorCardVisible, setAuthorCardVisible] = useState([])
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const authorCardRef = useRef([])


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
        }
        )

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
    }, [])

    return (
        <section className="mb-20 mt-40" ref={sectionRef}>
            <span
                className={`bg-black h-[1px] block mb-20 transition-all duration-[1200ms] ease-in-out ${lineVisible ? "w-full" : "w-0"
                    }`}
            ></span>
            {/* Header */}
            <div className="relative flex items-center justify-between mb-10 overflaw-hidden">

                <h1 ref={headerRef} className={`${headerVisible ? "top-0 opacity-100" : "top-[10rem] opacity-0"} relative font-bold lg:text-9xl text-5xl uppercase transtion-all duration-700`}>Authors</h1>
                <Link
                    href={"/authors"}
                    className="font-bold uppercase items-center gap-3 lg:pr-0 pr-5 inline-flex"
                >
                    <span className="lg:block hidden">all Authors</span>
                    <FaArrowRight />
                </Link>
            </div>

            {/* Authors Grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 border border-black">
                {authors.map((author, i) => (
                    <div
                        key={author.id}
                        ref={(el) => (authorCardRef.current[i] = el)}
                        data-index={i}
                        className={`
                        flex items-center gap-5 border-b border-black p-8 border 
                        transition-all duration-[1000ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] 
                        origin-center
                        ${authorCardVisible[i]
                                ? "opacity-100 rotate-0"
                                : "opacity-0 rotate-[-45deg]"}
                      `}
                    >
                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={author.image}
                                alt={author.name}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover scale-100 hover:scale-110 transtion-all duration-300"
                            />
                        </div>

                        <div>
                            <Link  href={`/authors/${author.slug}`} className="font-bold text-3xl mb-3">{author.name}</Link>
                            <div className="flex items-center gap-5">
                                <p className="font-bold text-sm">
                                    Job <span className="font-normal ml-1">{author.job}</span>
                                </p>
                                <p className="font-bold text-sm">
                                    City <span className="font-normal ml-1">{author.city}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PopularAuthors;
