import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* {text} */}
          <div className="flex flex-col text-center xl:text-left order-2 xl:order-none">
            <span className="text-md xl:text-xl">Software Developer</span>
            <h1 className="h2 xl:h1">
              Hello I'm <br /> <span className="text-accent">Oyasi Kelly</span>
            </h1>
            <p className="self-center xl:self-start max-w-[80%] mb-9 text-white/80">
              I excel at crafting digital experiencs and I am proficient in
              various programming languages and technologies
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
              >
                <Link href="/oyasi_kelly_CV.pdf" download="">
                  <span>Download CV</span>
                </Link>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 flex flex-col justify-center items-center">
                <Socials
                  containerStyles="max-w-[60%] xl:max-w-full flex flex-wrap justify-center xl:flex-nowrap gap-6 xl:flex"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
