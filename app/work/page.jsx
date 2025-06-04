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
    title: "Interacting rating component",
    description:
      "A sleek and user-friendly rating feature that allows seamless interaction for collecting feedback. Designed with precision to enhance user engagement and usability.",
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
      "A sleek and responsive landing page designed to highlight Fylo's features and services. Crafted for user engagement with a clean layout and seamless navigation.",
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
      "An engaging number-guessing game that challenges players to predict the correct number. Designed for fun and excitement with an intuitive interface and interactive gameplay.",
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
      "A streamlined single-page chat application designed for effortless booking interactions. Combines simplicity and functionality to enhance user convenience and communication.",
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
      "A simple and efficient calculator app designed for quick and accurate computations. Features a user-friendly interface for seamless everyday calculations.",
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
      "A secure and intuitive login page designed for seamless user authentication. Features a clean layout to enhance accessibility and user experience.",
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
      "An organized and user-friendly app designed to help you manage tasks efficiently. Features a clean interface for adding, tracking, and completing tasks with ease.",
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
      "A fun and interactive dice game where players race to reach the target score. Designed with a simple, engaging interface for hours of entertainment.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/images/work/project-8.png",
    live: "https://regal-sherbet-3f21c2.netlify.app/",
    github: "https://github.com/Oyasikelly/Pig-Game",
  },
  {
    num: "09",
    category: "frontend",
    title: "Quote2Me",
    description:
      "A dynamic platform for discovering and sharing inspiring quotes. Designed with a sleek interface to make browsing and engaging with quotes effortless and enjoyable.",
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
      " An interactive web app that allows users to explore country information and geographical details. Designed with an intuitive interface for easy navigation and learning about the world.",
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
      "A simple and efficient tool for shortening long URLs into concise, shareable links. Designed for easy use, providing quick access and improved link management.",
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
      "A tool that allows users to track and locate IP addresses with ease. Featuring a clean and intuitive interface, it provides accurate geographical information for each IP.",
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
  {
    num: "13",
    category: "frontend",
    title: "Smoothies",
    description:
      "A web app where users can explore and create smoothie recipes. It offers a variety of smoothies with customizable options, allowing users to select ingredients based on preferences and dietary needs.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Vite" },
      { name: "Supabase" },
    ],
    image: "/images/work/project-17.png",
    live: "https://smoothies-database.vercel.app/",
    github: "https://github.com/Oyasikelly/smoothies-database",
  },
  {
    num: "14",
    category: "frontend & Backend",
    title: "Quiz Master",
    description:
      "A sleek and interactive quiz app built with Next.js, Tailwind CSS, and Framer Motion. Enjoy engaging animations, instant feedback, and a user-friendly design for fun and learning on the go.",
    stack: [
      { name: "Html 5" },
      { name: "Shadcn" },
      { name: "Tailwind css" },
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "framer-motion" },
    ],
    image: "/images/work/project-18.png",
    live: "https://quizmasterrccg.vercel.app",
    github: "https://github.com/Oyasikelly/QuizMaster",
  },
  {
    num: "15",
    category: "frontend",
    title: "Color Game",
    description:
      "The Color Guessing Game is a fun and interactive game where players try to guess the correct color from a randomly shuffled set. The game features multiple color sets, a scoring system, and limited attempts per round. It uses React, Tailwind CSS, and Framer Motion for smooth animations and an engaging UI. Players can track their high scores and challenge themselves to improve their guessing skills. 🚀🎮",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind css" },
      { name: "React + Vite" },
      { name: "framer-motion" },
    ],
    image: "/images/work/project-19.png",
    live: "https://color-game-hng.vercel.app",
    github: "https://github.com/Oyasikelly/color-game",
  },
  {
    num: "16",
    category: "frontend",
    title: "Kelsbot",
    description:"KelsBot is a friendly and responsive chatbot. Designed to provide quick replies and simulate basic conversations, KelsBot offers a clean, intuitive interface using Tailwind CSS. Whether you're greeting it or asking for help, KelsBot is ready to assist with a touch of personality and simplicity.",
    stack: [
      { name: "Html 5" },
      { name: "Css" },
      { name: "Javascript" },
    ],
    image: "/images/work/project-20.png",
    live: "https://chat-bot1-sigma.vercel.app",
    github: "https://github.com/Oyasikelly/ChatBot1",
  },
  {
    num: "17",
    category: "Fullstack",
    title: "Boost Business Hub",
    description:"Boost Business Hub is a Nigerian tech education and consulting company that provides hands-on training, mentorship, and corporate upskilling programs to bridge the digital skills gap and empower future tech leaders.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
      { name: "Next,js" },
      { name: "supabase" },
    ],
    image: "/images/work/project-21.png",
    live: "https://boost-business-hub.vercel.app",
    github: "https://github.com/Oyasikelly/Boost-Business-Hub",
  },{
    num: "18",
    category: "Frontend",
    title: "Rock, Paper, Scissors",
    description:"Rock, Paper, Scissors is a classic game where players choose between three options: rock, paper, or scissors. The game is designed with a sleek interface using Tailwind CSS and React, providing an engaging user experience. Players can easily select their choice and see the outcome of each round in real-time.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
      { name: "Next,js" },
    ],
    image: "/images/work/project-22.png",
    live: "https://rock-paper-scissors-master-47ot.vercel.app",
    github: "https://github.com/Oyasikelly/rock-paper-scissors-master",
  }
  ,{
    num: "19",
    category: "FullStack",
    title: "ApplyForU",
    description:"ApplyForU is a comprehensive job application platform designed to streamline the job search process. It allows users to create profiles, upload resumes, and apply for jobs with ease. The platform features a user-friendly interface built with Next.js and Tailwind CSS, ensuring a smooth experience for job seekers.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind Css" },
      { name: "Next,js" },
    ],
    image: "/images/work/project-23.png",
    live: "https://applyforu.vercel.app",
    github: "https://github.com/Oyasikelly/applyForU",
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
      className="min-h-[80vh] flex flex-col justify-center px-10 py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline numbers */}
              <div className="text-5xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[32px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <h3 className="text-[25px] text-[30px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              <p className="text-white/60 ">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
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
                      <TooltipTrigger className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl xl:text-3xl group-hover:text-accent" />
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
                      <TooltipTrigger className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
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
                        className="object-contain"
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
