"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import { SparklesCore } from "../ui/sparkles";
import IconCloud from "@/components/magicui/icon-cloud";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";

const skills = [
    {
        text:"HTML",
        value:90,
        color:"rgb(79 70 229)",
    },
    {
        text:"CSS",
        value:50,
        color:"#00fa43",
    },
    {
        text:"JS",
        value:60,
        color:"#fa00e1",
    },
    {
        text:"React",
        value:40,
        color:"#edfa00",
    },
    {
        text:"Node.js",
        value:40,
        color:"#fa4300",
    },
    {
        text:"Express",
        value:30,
        color:"#00fae9",
    },
    {
        text:"MongoDB",
        value:80,
        color:"#00fa5c",
    },
    {
        text:"Excel",
        value:90,
        color:"#fa0047",
    },
]

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export default function Skills() {
    return (
        <div className="w-full relative p-4 sm:p-6 md:p-8" id="skills">
            <div className="w-full absolute inset-0">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={80}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-3 relative z-20 py-6">
                <Cover className="px-5">My Skills</Cover>
            </h1>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
                <div
                    className="relative flex h-full w-full md:w-[50%] items-center justify-center overflow-hidden rounded-lg p-8 ">
                    <IconCloud iconSlugs={slugs} />
                </div>

                <div className="w-full md:w-[50%] flex flex-wrap justify-center items-center">
                    {
                        skills.map((skill, index) => (
                                <AnimatedCircularProgressBar 
                                    key={index}
                                    max={100}
                                    className="mx-4 my-6 size-24 text-sm"
                                    min={0}
                                    value={skill.value}
                                    gaugePrimaryColor={skill.color}
                                    gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                                    text={skill.text}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}