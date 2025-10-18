// src/components/NewsTicker.jsx
import React from "react";

const newsItems = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, esse voluptatibus? Inventore nulla molestias blanditiis natus. Illum ullam suscipit ex."];

export default function NewsTicker() {
  return (
    <div className="bg-black text-white w-full py-6 flex items-center">
      <h1 className="uppercase font-bold px-5">NewsTicker+++</h1>

      {/* ticker container (takes remaining width) */}
      <div className="flex-1 overflow-hidden">
        {/* track: original items then duplicated items for seamless loop */}
        <div className="ticker__track">
          {newsItems.map((n, i) => (
            <span key={i} className="px-8">
              {n}
            </span>
          ))}
          {newsItems.map((n, i) => (
            <span key={`dup-${i}`} className="px-8">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
