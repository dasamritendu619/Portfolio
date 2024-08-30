"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div className="w-full relative pt-8 lg:pt-0" id='about-me'>
            <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
                About Me
            </h1>
            <div className="absolute inset-x-20 top-10 hidden lg:block md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-10 hidden lg:block md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-10 hidden lg:block md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/4 blur-sm" />
            <div className="absolute inset-x-60 top-10 hidden lg:block md:top-12 lg:top-[72px] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
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
            <div className="flex flex-nowrap md:flex-wrap items-center justify-center w-full">
                <div className="hidden lg:flex items-center justify-center lg:w-[50%]">
                    <Image
                    src={'/young-programmer-working-laptop-computer-cartoon-character-min.png'}
                    alt="Web Developer"
                    width={500}
                    height={500}
                    className="p-12"
                    />
                </div>
                <div className="w-full lg:w-[50%]"> 
                    <p
                        className=" leading-7 p-3 max-w-[500px] mx-auto text-center my-5 text-gray-200">
                        I'm a software engineer with a passion for web development and design. I enjoy creating beautiful, user-friendly websites and applications that make people's lives easier. I'm always looking for new challenges and opportunities to learn and grow as a developer. When I'm not coding, you can find me hiking, reading, playing video games, playing Tabla, playing Guitar etc. I'm also a social worker. I'm excited to see what the future holds for me in the world of web development!{" "}
                    </p>
                    <p className="text-center my-2"><strong className="font-bold mr-2 text-white">Name: </strong><span className="text-gray-200"> Amritendu Das</span></p>
                    <p className="text-center my-2"><strong className="font-bold mr-2 text-white">Age: </strong><span className="text-gray-200"> 22 years</span></p>
                    <p className="text-center my-2"><strong className="font-bold mr-2 text-white">Location: </strong><span className="text-gray-200"> West Bengal, India</span></p>
                    <p className="text-center my-2"><strong className="font-bold mr-2 text-white">Email: </strong><span className="text-gray-200"> dasamritendu619@gmail.com</span></p>
                    <p className="text-center my-2"><strong className="font-bold mr-2 text-white">Phone: </strong><span className="text-gray-200"> +91 8116926300</span></p>
                    <p className="text-center my-2"><strong className="font-bold mr-2 text-white">Blood Group: </strong><span className="text-gray-200"> "O+"</span></p>
                </div>
            </div>
        </div>
    );
}

