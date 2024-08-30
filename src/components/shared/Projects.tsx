'use client';
import React from 'react'
import HyperText from "@/components/magicui/hyper-text";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Image from 'next/image';
import { IconBrandGithub } from '@tabler/icons-react';

const projects = [
  {
    title:"Hospital Management System",
    description:"A simple hospital management system where patients can book appointments with doctors",
    image:"/WhatsApp Image 2024-08-29 at 3.36.47 PM.jpeg",
    link:"https://habby-book-store.netlify.app/",
    github:"https://github.com/syancemk"
  },
  {
    title:"Share Learner",
    description:"A online learning platform where students can share their knowledge.",
    image:"/WhatsApp Image 2024-08-29 at 3.36.48 PM.jpeg",
    link:"https://habby-book-store.netlify.app/",
    github:"https://github.com/syancemk"
  },
  {
    title:"Connectify",
    description:"A online learning platform where students can share their knowledge.",
    image:"/WhatsApp Image 2024-08-29 at 3.36.49 PM.jpeg",
    link:"https://habby-book-store.netlify.app/",
    github:"https://github.com/syancemk"
  },
  //{
    //title:"Habby Book Store",
    //description:"A simple book store built with React and Redux",
    //image:"/WhatsApp Image 2024-08-29 at 3.36.50 PM.jpeg",
    //link:"https://habby-book-store.netlify.app/",
    //github:"https://github.com/syancemk"
  //}
];

export default function Projects() {
  return (
    <div className='w-full py-8' id='projects'>
      <h1 className='flex justify-center mb-8'>
        <HyperText
          className="text-2xl sm:text-4xl md:text-5xl text-center font-bold text-black dark:text-white"
          text="My Projects"
        />
      </h1>


      <div className='w-hull flex flex-wrap justify-center'>
        {
          projects.map((project, index) => (
            <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-3 py-6 min-[500px]:p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height="600"
                width="1000"
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-12">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Visit now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={project.github}
                target="__blank"
                className="px-4 py-2 flex flex-nowrap items-center rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <IconBrandGithub /><span className='ml-1'>Github</span>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
          ))
        }
      </div>
    </div>
  )
}
