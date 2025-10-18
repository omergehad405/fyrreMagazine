import Link from "next/link";
import React from "react";

const newsItems = ["NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++", "NewsTicker+++"]
function Footer() {
  return <footer className="bg-black pb-10">
    <div className="text-white w-full py-5">
      {/* ticker container (takes remaining width) */}
      <div className="flex-1 overflow-hidden">
        {/* track: original items then duplicated items for seamless loop */}
        <div className="ticker__track">
          {newsItems.map((n, i) => (
            <span key={i} className="px-3 text-2xl uppercase">
              {n}
            </span>
          ))}
          {newsItems.map((n, i) => (
            <span key={`dup-${i}`} className="px-3 text-2xl uppercase">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-wrap items-center lg:justify-between justify-center lg:px-10 px-5 mt-10">
      <h1 className="font-bold text-white lg:text-8xl text-5xl uppercase my-5 ">Design News
        <br />to your inbox</h1>

      <form action="" className="flex lg:flex-row flex-col items-center  gap-5 lg:w-[450px]">
        <input type="email" placeholder="Email" className="bg-white outline-none w-full py-3 pl-3" />
        <button className="bg-white w-full px-10 py-3 uppercase text-sm cursor-pointer">Sign up</button>
      </form>
    </div>
    <div className="flex flex-wrap items-center lg:justify-between justify-center px-10 mt-20">
      <h1 className="font-bold text-white text-xl uppercase lg:h-[200px] h-[100px]">fyrre magazene</h1>

      <div className="flex items-center lg:gap-10 gap-0 flex-wrap">
        <div className="border-t border-t-[#eee] pt-5 lg:h-[200px] h-[200px] w-[250px]">
          <ul className="">
            <li className="lg:mb-10 mb-5"><Link href={""} className="capitalize text-[#d5d5d5]">art</Link></li>
            <li className="lg:mb-10 mb-5"><Link href={""} className="capitalize text-[#d5d5d5]">Sculptures</Link></li>
            <li className="lg:mb-10 mb-5"><Link href={""} className="capitalize text-[#d5d5d5]">Street Art</Link></li>
          </ul>
        </div>
        <div className="border-t border-t-[#eee] pt-5 lg:h-[200px] h-[200px] w-[250px]">
          <ul className="">
            <li className="lg:mb-10 mb-5"><Link href={"/magazene"} className="capitalize text-[#d5d5d5]">magazene</Link></li>
            <li className="lg:mb-10 mb-5"><Link href={"/podcast"} className="capitalize text-[#d5d5d5]">podcast</Link></li>
            <li className="lg:mb-10 mb-5"><Link href={"/authors"} className="capitalize text-[#d5d5d5]">authors</Link></li>
          </ul>
        </div>
        <div className="border-t border-t-[#eee] pt-5 lg:h-[200px] h-[200px] w-[250px]">
          <ul className="">
            <li className="lg:mb-10 mb-5"><Link href={""} className="capitalize text-[#d5d5d5]">Styleguide</Link></li>
            <li className="lg:mb-10 mb-5"><Link href={""} className="capitalize text-[#d5d5d5]">Licensing</Link></li>
            <li className="lg:mb-10 mb-5"><Link href={""} className="capitalize text-[#d5d5d5]">Changelog</Link></li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-[#999] text-center text-xl mt-10">
      © Made by <a className="text-white underline" href="https://omergehad405.github.io/portfolio0.2/" target="_blank">Omar Gehad</a>
    </p>

  </footer>;
}

export default Footer;
