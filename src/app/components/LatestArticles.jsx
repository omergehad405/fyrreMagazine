"use client"
import { useArticles } from "@/context/articlesContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function LatestArticles() {
    const { articles, popularPosts } = useArticles();

    return (
        <section className="mt-10 border-t pt-10">
            <div className="flex items-center justify-between mb-10">
                <h1 className="font-bold lg:text-9xl text-5xl uppercase">magazenes</h1>
                <Link href={"/magazine"} className="font-bold uppercase items-center gap-3 lg:pr-0 pr-5 inline-flex">
                    <span className="lg:block hidden"> all articles</span>
                    <FaArrowRight />
                </Link>
            </div>
            <div className="flex lg:flex-row flex-col gap-10 items-start relative lg:mb-0 mb-5">
                <div className="grow-1">
                    {articles.slice(0, 5).map((article) => (
                        <div key={article.id} className="w-full flex lg:flex-row flex-col gap-10 mb-10 border-b pb-10">
                            <Image src={article.image} alt="articles image" width={250} height={250} className="scale-100 hover:scale-105 transition-all duration-500 w-auto" />

                            <div className="relative">
                                <Link href={`/magazene/${article.id}`} className="font-bold text-3xl mb-5 block">
                                    {article.title}
                                </Link>

                                <p className="lg:leading-[1.8]">{article.description}</p>

                                <div className="lg:absolute bottom-0 flex lg:flex-row flex-col lg:items-center lg:justify-between gap-5 w-full mt-10">
                                    <div className="flex lg:items-center lg:flex-row flex-col gap-5">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold capitalize text-sm">text</span>
                                            <Link href="" className="underline text-sm">{article.author}</Link>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold capitalize text-sm">date</span>
                                            <p className="text-sm">{article.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold capitalize text-sm">read</span>
                                            <p className="text-sm">{article.readTime}</p>
                                        </div>
                                    </div>
                                    <button className="border rounded-full w-fit px-3 py-1 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                                        <Link href={`/magazene/${article.catigory}`}>
                                            {article.category}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="w-full lg:w-[650px] sticky top-20">
                    <h1 className="font-bold uppercase mb-10">Popular Posts</h1>

                    <div>
                        {popularPosts.map((post) => (
                            <div key={post.id} className="flex gap-10 mb-10 border-b pb-10">
                                <span className="font-bold text-2xl">0{post.id}</span>
                                <div className="relative">
                                    <h1 className="font-bold text-2xl mb-5 ">{post.title}</h1>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-sm">Author</span>
                                        <Link href={"/"} className="underline text-sm">{post.author} </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#eee] p-5">
                        <h1 className="uppercase font-bold text-lg">Newsletter</h1>
                        <h1 className="font-bold text-3xl my-5 ">Design News
                            <br />to your inbox</h1>

                        <form action="">
                            <input type="emaik" placeholder="Email" className="bg-white outline-none w-full py-4 px-3 mb-2" />
                            <button className="bg-black text-white w-full py-5 uppercase">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default LatestArticles;