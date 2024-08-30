import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconUserBolt
} from "@tabler/icons-react";
import { FolderKanban, MailCheck } from "lucide-react";

export default function Navabr() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "Projets",
      icon: (
        <FolderKanban className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "About Me",
      icon: (
        <IconUserBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about-me",
    },
    {
      title: "Contact",
      icon: (
        <MailCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact-me",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/dasamritendu619",
    },
  ];
  return (
    <div className="flex z-50 justify-center w-full fixed top-10 sm:top-12 left-0 scale-75 sm:scale-90">
      <FloatingDock
        mobileClassName="hidden"
        desktopClassName="flex"
        // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
