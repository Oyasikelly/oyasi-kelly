"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Rating component",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/images/work/project-1.jpg",
    live: "https://thunderous-khapse-40396d.netlify.app/",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Fylo landing page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/images/work/project-2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "GuessMy-Number",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/images/work/project-3.png",
    live: "https://kelsnumbergame.netlify.app/",
    github: "https://github.com/Oyasikelly/GuessMy-Number",
  },
  {
    num: "04",
    category: "frontend",
    title: "Simple booking",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/images/work/project-4.jpg",
    live: "https://oyasikelly.github.io/chat-app-css-illustration-master/",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Calculator",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/images/work/project-5.png",
    live: "https://calculatormadewith-js.netlify.app/",
    github: "",
  },
  {
    num: "06",
    category: "frontend",
    title: "Login Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/images/work/project-6.png",
    live: "https://imaginative-melba-43c5dd.netlify.app/",
    github: "https://github.com/Oyasikelly/LoginPage",
  },
  {
    num: "07",
    category: "frontend",
    title: "To Do List",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/images/work/project-12.png",
    live: "https://imaginative-tartufo-d107bb.netlify.app/",
    github: "https://github.com/Oyasikelly/To-Do-List",
  },
  {
    num: "08",
    category: "frontend",
    title: "Pig Game",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/images/work/project-8.png",
    live: "https://imaginative-tartufo-d107bb.netlify.app/",
    github: "https://github.com/Oyasikelly/Pig-Game",
  },
  {
    num: "09",
    category: "frontend",
    title: "Quote2Me",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind Css" },
      { name: "React" },
    ],
    image: "/images/work/project-13.png",
    live: "https://quote2me.netlify.app/",
    github: "https://github.com/Oyasikelly/quoteapp",
  },
  {
    num: "10",
    category: "frontend",
    title: "Country Geo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Next.js" },
      { name: "Twailwind Css" },
      { name: "Daisy Ui" },
    ],
    image: "/images/work/project-14.png",
    live: "https://countrygeo.netlify.app/",
    github: "https://github.com/Oyasikelly/geo-country",
  },
  {
    num: "11",
    category: "frontend",
    title: "URL Shorter",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Next.js" },
      { name: "Twailwind Css" },
      { name: "Daisy Ui" },
    ],
    image: "/images/work/project-15.png",
    live: "https://short-link-gb1r.vercel.app/",
    github: "https://github.com/Oyasikelly/short-link",
  },
  {
    num: "12",
    category: "frontend",
    title: "IP Address Tracker",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sapiente mollitia minus necessitatibus obcaecati unde ipsum incidunt?",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Next.js" },
      { name: "Twailwind Css" },
      { name: "Daisy Ui" },
    ],
    image: "/images/work/project-16.png",
    live: "https://ip-address-tracker-spyr.vercel.app/",
    github: "https://github.com/Oyasikelly/ip-address-tracker",
  },
];

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";
export default function Works() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper) {
    // get curren slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline numbers */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <h3 className="text-[30px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-520px mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        sizes="auto"
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
