import React from "react";
import Image from "next/image";
import SubTittle from "@/components/sub-tiltle";
import {
  AiIcon,
  DataSecurityIcon,
  PlugIcon,
  ScalableIcon,
} from "@/components/icons/icons";
import PlatformCard from "@/components/platform-card";

type PlatformFeaturesProps = {
  imageSrc: string; // e.g. '/assets/Images/your-image.jpg'
  className?: string;
};

const platformFeatures = [
  {
    icon: <ScalableIcon />,
    title: "Scalable & Secure",
    description:
      "Our infrastructure handles high transaction volumes while safeguarding sensitive data with advanced encryption.",
  },

  {
    icon: <DataSecurityIcon />,
    title: "Data Integrity",
    description:
      "We maintain trust by ensuring the highest standards of data governance and integrity.",
  },

  {
    icon: <AiIcon />,
    title: "AI-Driven Insights",
    description:
      "Machine learning models tailored for African financial data, delivering smarter credit, risk, and fraud intelligence.",
  },

  {
    icon: <PlugIcon />,
    title: "Plug-and-Play APIs",
    description:
      "Simple RESTful endpoints, detailed documentation, and sandbox access so you can integrate in minutes.",
  },
];

export default function PlatformFeatures({
  imageSrc,
  className = "",
}: PlatformFeaturesProps) {
  return (
    <section
      className={`relative w-full  pt-8 md:py-4 ${className}`}
    >
      <Image
        src={imageSrc}
        alt="Solutions background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 wrapper h-full">
        {/* Header Section */}
        <div
          className="mt-[200px] md:mt-[300px] lg:mt-[400px] flex flex-col items-start justify-between animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <SubTittle
            label="Platform Features"
            textClass="text-white"
            borderClass="border-white"
            dotClass="bg-white"
          />
          <div className="mt-6 w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] w-full lg:w-[60%] leading-tight lg:leading-none font-space font-medium text-[#fff] animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              AI-driven platform designed to power the future
            </h2>
            <p
              className="text-[14px] sm:text-[15px] md:text-[16px] w-full lg:w-[30%] font-inter font-medium text-[#fff] leading-relaxed animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Kredit Africa empowers financial institutions with reliable data
              while maintaining the highest ethical standards.
            </p>
          </div>
        </div>

        {/* Platform Features Grid */}
        <div className="mt-[40px] py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1">
          {platformFeatures.map((item, idx) => (
            <div
              key={idx}
              className="animate-fade-up"
              style={{ animationDelay: `${200 + idx * 120}ms` }}
            >
              <PlatformCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
