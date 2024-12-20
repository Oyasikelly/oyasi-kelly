"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Transform your ideas into stunning, functional websites. From sleek designs to seamless functionality, we build tailored solutions that elevate your online presence.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Crafting user-centered interfaces that captivate and deliver. Experience intuitive designs that connect, engage, and enhance user satisfaction effortlessly.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Logo Deisgn",
    description:
      "Your brand's identity deserves a memorable mark. We create visually striking logos that embody your essence and leave a lasting impression.",
    href: "/contact",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Rise above the competition with expert SEO strategies. Drive organic traffic, boost rankings, and ensure your audience finds you with ease.",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 xl:px-0 py-12 xl:py-0 ">
      <div className="container mx-auto pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl xl:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-xl xl:text-3xl " />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[32px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20  "></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
