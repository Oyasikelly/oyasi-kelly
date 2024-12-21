"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 906 8318 254",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "oyasikelly28@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Delta, Nigeria",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";
export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSelectChange = (value) => {
    setService(() => value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = { firstname, lastname, email, phoneNumber, service, message };

    //Submit via api
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    console.log(content);
    alert(content.data);

    setFirstname("");
    setLastname("");
    setEmail("");
    setPhoneNumber("");
    setService("");
    setMessage("");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-6 pb-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[50%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl xl:text-4xl text-accent">
                Let's work together
              </h3>
              <p className="text-sm xl:text-md text-white/60 ">
                Achieve your goals with collaborative expertise. From innovative
                designs to effective strategies, we bring your vision to life
                and ensure lasting success.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Firstname"
                />
                <Input
                  type="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
                <Input
                  type="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone number"
                />
              </div>
              {/* service */}
              <Select value={service} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full text-sm xl:text-md">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    {/* <SelectItem value="nst">SEO</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* Button */}
              <Button size="md" className="max-w-40">
                Semd message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[42px] h-[42px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[18px] xl:text-[28px]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm xl:text-md text-white/60">
                      {item.title}
                    </p>
                    <h3 className="text-md xl:text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
