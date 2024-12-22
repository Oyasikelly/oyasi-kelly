"use client";

import {
  FaHtml5,
  FaReact,
  FaCss3,
  FaFigma,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About data

const about = {
  title: "About me",
  description:
    "I am a web developer and Electrical Engineering student at the Federal University of Petroleum Resources Effurun. Passionate about innovation and problem-solving, I combine technical skills with creativity to build digital solutions that exceed expectations. My work merges engineering precision with web development potential, turning ideas into impactful realities.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Oyasi Kelly",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 906 831 8254, 708 570 4771",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skyp",
      fieldValue: "Kelly.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "oyasikelly2000@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

// Experience data

const experience = {
  icon: "/images/resume/badge.svg",
  title: "My experience",
  description:
    "As a web developer, I craft immersive digital experiences, blending creativity and precision to build seamless, user-centric solutions that redefine possibilities and inspire innovation.",
  items: [
    {
      company: "Self-Initiated Projects",
      position: "Full Stack Developer",
      duration: "2024 - Present",
      role: [
        "Developed a quiz application with advanced UI features and authentication.",
        "Designed Geo-Country and ShortLink projects using APIs like RapidAPI and Google Maps.",
        "Began exploring blockchain technology and dApp development using Solidity.",
      ],
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
      role: [
        "Built full-stack applications with Node.js, Express, and MongoDB.",
        "Created authentication systems using JWT and improved project efficiency with Redux.",
        "Developed an e-commerce app with payment gateway integration.",
      ],
    },
    {
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      duration: "2022 - 2023",
      role: [
        "Developed interactive web applications using React.js.",
        "Integrated REST APIs into projects like weather apps and to-do lists.",
        " Designed and deployed mobile-friendly user interfaces using Tailwind CSS and Bootstrap.",
      ],
    },
    {
      company: "Freelance",
      position: "Junior Frontend Developer",
      duration: "2022",
      role: [
        "Built foundational skills in HTML, CSS, and JavaScript.",
        "Created responsive personal portfolio and static websites for small clients.",
        "Gained experience with Git for version control and hosting platforms like Netlify.",
      ],
    },
  ],
};

// Educational data

const education = {
  icon: "/images/resume/Graduation_Cap.svg",
  title: "My education",
  description:
    "Studying Electrical Engineering at the Federal University of Petroleum Resources Effurun has enriched my problem-solving skills and technical foundation, which seamlessly align with my passion for web development, enabling me to craft efficient, innovative, and user-focused digital solutions.",
  items: [
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2024-2023",
    },
    {
      institution: "Code Academy",
      degree: "Front-end Track",
      duration: "2023-2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Programming Course",
      duration: "2022-2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Front-End Development Bootcamp",
      duration: "2021-2022",
    },
    {
      institution: "Online Course Platform",
      degree: "Front-End Development Bootcamp",
      duration: "2021-2022",
    },
  ],
};

// Skills data

const skills = {
  icon: "/images/resume/skills.gif",
  title: "My Skills",
  description:
    "My skills in web development, honed through continuous learning and hands-on projects, reflect a blend of creativity and technical expertise, deeply rooted in the analytical and problem-solving foundation from my Electrical Engineering studies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center px-14 xl:px-0 py-12 xl:py-0"
    >
      <div className="container mx-auto pb-8">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="text-sm xl:text-md flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              {/* Experience */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl xl:text-4xl font-bold">
                  {experience.title}
                  💪🏾
                </h3>
                <p className="text-sm xl:text-md max-w-[500px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1 overflow-auto scrollbar-none"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-md xl:text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80">{item.company}</p>
                        </div>
                        <ul className="w-auto pb-4">
                          {item.role.map((rol, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 mt-4"
                            >
                              <span className="w-[15px] h-[6px] rounded-full bg-accent self-start"></span>
                              <li className="self-start -mt-2 text-white/40">
                                {rol}
                              </li>
                            </div>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}🎓</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>

                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}🤹🏾‍♂️</h3>
                  <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent  transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}🧑🏽‍🦱</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-old-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
