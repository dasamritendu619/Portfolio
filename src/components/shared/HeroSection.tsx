import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/glow-on-hover";

export default function HeroSection() {
  const words = 'I am a quick learner and always ready to learn new technologies.I am a hardworking and dedicated person. I am always ready to take on new challenges and work hard to achieve my goals. I am passionate about my work and always strive to deliver the best results. I am looking for new opportunities to grow and develop my skills.';

  return (
    <div className="w-full" id='home'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />

      <div className="w-full h-[120vh] mt-20 sm:mt-28 md:mt-0 md:h-screen items-center flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-[48%]">
          <div className="px-3 sm:px-8">
            <TypingAnimation
              className="text-3xl min-[500px]:text-4xl lg:text-5xl text-start font-bold text-black dark:text-white"
              text="Hello, I'm Amritendu"
              duration={100}
            />
            <div className="flex flex-nowrap justify-start">
              <p className="text-xl min-[500px]:text-2xl lg:text-3xl mt-[4px] mr-2 font-bold text-purple-600">
                I am a
              </p>
              <WordRotate
                className="text-lg min-[500px]:text-xl lg:text-2xl text-pink-600 font-bold"
                words={["Full Stack Devoloper"," UI Designer","P.C. Maintenance"]}
              />
            </div>

            <TextGenerateEffect className="text-sm" words={words} />
            
            <Button text="Download Resume" 
            className="py-3 px-5 font-semibold block mx-auto mt-8 xl:mt-14" />
          </div>
        </div>

        <div className="w-full md:w-[48%] flex flex-nowrap justify-center">
          <NeonGradientCard className="p-0 rounded-full w-60 sm:w-80">
            <Image
              src="/WhatsApp Image 2024-08-30 at 22.40.36_d3c9d0c8.jpg"
              alt="Web Developer"
              width={400}
              height={400}
              className="rounded-full m-0 p-0"
            />
          </NeonGradientCard>
        </div>
      </div>
    </div>
  );
}
