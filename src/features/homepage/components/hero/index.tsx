"use client";
import React from "react";
import SubTittle from "@/components/sub-tiltle";
import BaseButton from "@/components/BaseButton";
import {
  AttacksIcon,
  ClientsIcon,
  PoweredIcon,
} from "@/components/icons/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants for a more dynamic feel
const containerVariants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      ease: [0.22, 1, 0.36, 1],
      duration: 0.25,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: -24, scale: 1.3 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 24, mass: 0.9 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const statRowVariants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      ease: [0.22, 1, 0.36, 1],
      duration: 0.4,
    },
  },
};

const features = [
  {
    icon: <ClientsIcon />,
    amount: "1,000+",
    caption: "clients",
  },
  {
    icon: <PoweredIcon />,
    amount: "1M+",
    caption: "API calls powered by us",
  },
  {
    icon: <AttacksIcon />,
    amount: "50K+",
    caption: "attacks prevented",
  },
];

export default function HeroSection() {
  const titleWords = "Transform data into next-gen financial solutions".split(
    " "
  );
  return (
    // Pull the hero up behind the global (layout) Navbar and add padding so content sits below it
    <div className="relative w-full -mt-20 pt-20">
      {/* Background image fills behind the Navbar as well */}
      <div className="">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/Images/Hero.svg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="wrapper flex justify-center items-center min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] py-8 sm:py-12 lg:py-16">
          <motion.div
            className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-2 sm:gap-6 lg:gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeUp}>
              <SubTittle label="Introducing BizCredit" />
            </motion.div>
            <motion.h1
              className=" w-[95%] max-w-5xl mt-2 text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[1.1] sm:w-[75%] sm:leading-[83px] text-[#000] font-medium text-center font-space"
              variants={headingVariants}
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="inline-block mr-[0.35ch]"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#586667] font-medium text-center font-inter max-w-3xl px-4"
              variants={fadeUp}
            >
              APIs and AI-powered tools for credit intelligence, fraud
              prevention, and risk assessment.
            </motion.p>
            <motion.div
              className="mt-4 sm:mt-6 flex flex-row sm:flex-row items-center gap-3 sm:gap-4"
              variants={fadeUp}
            >
              <Link href="/docs">
                <motion.div
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <BaseButton
                    label="View Docs"
                    backgroundColor="#9F9F9F3D"
                    textColor="#000"
                  />
                </motion.div>
              </Link>
              <Link href="/book-session">
                <motion.div
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <BaseButton
                    label="Book Call"
                    backgroundColor="#000"
                    textColor="#fff"
                  />
                </motion.div>
              </Link>
            </motion.div>
            {/* Stats row */}
            <motion.div
              className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl overflow-x-auto sm:overflow-visible -mx-4 px-4 snap-x snap-mandatory"
              variants={statRowVariants}
            >
              <div className="flex flex-row items-center gap-4 sm:gap-4 lg:gap-8 text-[#000] whitespace-nowrap sm:whitespace-normal sm:justify-between">
                {features.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0 snap-start"
                    variants={statItem}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 360, damping: 22 }}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                      <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-none font-space font-medium text-[#000]">
                        {item.amount}
                      </span>
                      <span className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-inter text-[#586667] capitalize">
                        {item.caption}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
