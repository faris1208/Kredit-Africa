import React from "react";
import Image from "next/image";
import SubTittle from "@/components/sub-tiltle";
import Card from "@/components/card";
import NewCard from "@/components/new-card";

// type WhoWeServeProps = {
//   imageSrc: string; // e.g. '/assets/Images/your-image.jpg'
//   className?: string;
// };

const solutions = [
  {
    imageSrc: "/assets/Images/Block 1 (1).webp",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },

  {
    imageSrc: "/assets/Images/Block 2.svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },

  {
    imageSrc: "/assets/Images/Block 3.svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },

  {
    imageSrc: "/assets/Images/Block 1 (2).svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },
  {
    imageSrc: "/assets/Images/Block 2 (1).svg",
    title: "Fintechs & Digital Lenders",
    description:
      "Deliver faster, smarter, and safer credit decisions using real-time insights from alternative data, fraud detection, and risk intelligence APIs.",
  },
];

export default function WhoWeServe() {
  return (
    <section
      className={` border border-[transparent] relative w-full min-h-screen py-8 sm:py-12 lg:py-16`}
    >
      <div className="relative z-10 wrapper h-full">
        {/* Add your solutions content here */}
        <div className="pt-[30px] sm:pt-[120px] lg:pt-[30px] pb-8 sm:pb-12 lg:pb-16">
          <div
            className="flex flex-col items-start justify-between animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <SubTittle label="Who We Serve" />
            <div className="mt-6 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
              <h2
                className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] w-full lg:w-[60%] leading-[1.1] sm:leading-[1.0] font-space font-medium text-[#000] animate-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Built for the Financial Ecosystem
              </h2>
              <p
                className="text-[14px] sm:text-[16px] lg:text-[18px] w-full lg:w-[30%] font-inter font-medium text-[#000] animate-fade-up"
                style={{ animationDelay: "240ms" }}
              >
                Our APIs are designed to power Africa&apos;s financial
                infrastructure, enabling innovation and responsible growth
                across the ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-12 lg:mt-[80px] py-2 sm:py-4 lg:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-1">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="animate-fade-up"
                style={{ animationDelay: `${200 + idx * 120}ms` }}
              >
                <NewCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
