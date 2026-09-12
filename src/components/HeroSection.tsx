import React from "react";
import HeroImage from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Build Your Ideal
            <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E36] via-[#E12B7B] to-[#7C3AED]">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-linear-to-r from-[#FF5E36] via-[#E12B7B] to-[#F43F5E] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:opacity-95 hover:shadow-lg active:scale-95">
              Explore Technologies
            </button>

            <button className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-95">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={HeroImage}
            alt="Development Stack Illustration"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
