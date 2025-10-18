"use client"

import { useAuthors } from "@/context/authorsContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function AuthorsCards() {
    const { authors } = useAuthors()

    return (
        <section className="my-20 w-[95%] mx-auto">
            {/* Cards */}
            <div className="">
                {authors.map((author, idx) => (

                    <div key={author.id} className="flex lg:flex-row flex-col items-center justify-between border-b py-10">
                        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-15 gap-5">
                            {/* author Image */}
                            <Link href={`/authors/${author.slug}`}>
                                <Image
                                    src={author.image}
                                    alt={author.title}
                                    width={100}
                                    height={100}
                                    className="w-full lg:h-full rounded-full"
                                />
                            </Link>
                            {/* author name */}
                            <Link
                                href={`/authors/${author.slug}`}
                                className="lg:w-[350px] font-bold text-3xl leading-snug"
                            >
                                {author.name}
                            </Link>
                        </div>
                        <div className="flex lg:items-center gap-5 mt-5">
                            <p className="lg:text-sm text:md font-bold capitalize">
                                job
                                <span className="font-normal ml-2">{author.job}</span>
                            </p>

                            <p className="lg:text-sm text:md font-bold capitalize">
                                city
                                <span className="font-normal ml-2">{author.city}</span>
                            </p>

                            <Link href={`/authors/${author.slug}`} className="hidden lg:flex uppercase font-bold text-sm items-center gap-2">
                                about
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default AuthorsCards;