"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative">
      {/*Big Screen*/}
      <div className="h-[100px] hidden lg:flex items-center justify-between p-10 text-[var(--main-color)]">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={200} height={200} />
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex gap-8">
            <li className="relative capitalize cursor-pointer transition text-xl group">
              <Link
                href="/magazine"
                className="hover-underline relative inline-block group"
              >
                magazine
                <span
                  className="pointer-events-none absolute left-0 right-0 -bottom-[5px] h-[2px] w-full origin-right scale-x-0 bg-black transition-transform duration-400 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                  style={{
                    content: "''",
                  }}
                ></span>
                <span
                  className="pointer-events-none absolute left-0 right-0 -top-[5px] h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-400 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                  style={{
                    content: "''",
                  }}
                ></span>
              </Link>
            </li>
            <li className="relative capitalize cursor-pointer transition text-xl group">
              <Link
                href="/podcasts"
                className="hover-underline relative inline-block group"
              >
                podcast
                <span
                  className="pointer-events-none absolute left-0 right-0 -bottom-[5px] h-[2px] w-full origin-right scale-x-0 bg-black transition-transform duration-400 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                  style={{
                    content: "''",
                  }}
                ></span>
                <span
                  className="pointer-events-none absolute left-0 right-0 -top-[5px] h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-400 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                  style={{
                    content: "''",
                  }}
                ></span>
              </Link>
            </li>
            <li className="relative capitalize cursor-pointer transition text-xl group">
              <Link
                href="/authors"
                className="hover-underline relative inline-block group"
              >
                authors
                <span
                  className="pointer-events-none absolute left-0 right-0 -bottom-[5px] h-[2px] w-full origin-right scale-x-0 bg-black transition-transform duration-400 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                  style={{
                    content: "''",
                  }}
                ></span>
                <span
                  className="pointer-events-none absolute left-0 right-0 -top-[5px] h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-400 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                  style={{
                    content: "''",
                  }}
                ></span>
              </Link>
            </li>
          </ul>

          <span className="font-bold text-2xl">-</span>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-xl">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:opacity-80 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:opacity-80 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="hover:opacity-80 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:opacity-80 transition" />
            </Link>
          </div>
        </div>
      </div>
      {/*small Screen Nav Menu */}
      <div className="h-[100px] lg:hidden flex items-center justify-between p-5 text-[var(--main-color)] relative z-[40]">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={200} height={200} />
          </Link>
        </div>

        {/* Toggle Menu Icon */}
        <span
          className="ml-4 text-3xl cursor-pointer z-50"
          onClick={handleToggleMenu}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </span>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-2 absolute left-0 w-full opacity-0 bg-white px-5 pb-5 transition-all duration-700 ease-in-out 
            ${menuOpen ? "top-[100%] opacity-100" : "-top-[200%] "}
          `}
          style={{
            boxShadow: menuOpen ? "0 8px 24px rgba(0,0,0,.08)" : "none",
            zIndex: 10001,
          }}
        >
          <li className="relative capitalize cursor-pointer transition text-xl group border-t border-t-black pt-3">
            <Link
              href="/magazine"
              className="flex items-center justify-between"
              onClick={() => setMenuOpen(false)}
            >
              magazine
              <FaAngleRight />
            </Link>
          </li>
          <li className="relative capitalize cursor-pointer transition text-xl group border-t border-t-black pt-3">
            <Link
              href="/podcasts"
              className="flex items-center justify-between"
              onClick={() => setMenuOpen(false)}
            >
              podcast
              <FaAngleRight />
            </Link>
          </li>
          <li className="relative capitalize cursor-pointer transition text-xl group border-t border-t-black pt-3">
            <Link
              href="/authors"
              className="flex items-center justify-between"
              onClick={() => setMenuOpen(false)}
            >
              authors
              <FaAngleRight />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
