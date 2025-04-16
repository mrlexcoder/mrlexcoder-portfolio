import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amit Sandhu",
  initials: "AS",
  url: "https://techdulx.com",
  location: "Himachal Pradesh, UNA",
  locationLink: "https://maps.app.goo.gl/S9JCSQNuzyEXjev19",
  description:
    "Full Stack developer. I love building things and helping people.",
  summary:
    "I love learning new technologies and building cool things. Most of my work is done by searching online, and now with Ai, I understand code even faster. I don’t focus on memorizing everything—I focus on how things work and how to make them run. My search skills are strong, and that helps me solve almost any problem. I also enjoy open-source tools(#code), Linux, and working on real projects.",
  avatarUrl: "/me.png",
  skills: [
    "React Native",
    "Next.js",
    "Html / Css",
    "JS",
    "Java",
    "PHP",
    "firebase",
    "mysql",
    "SEO",
    "Adsense google (ADX)",
    "Google search console / Analytic",

   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mrlexcoder@gmail.com",
    tel: "+918628882486",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mrlexcoder",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amit-sandhu--/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "In",
        url: "https://www.instagram.com/amit.sandhu__/",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Own Info Tech Pvt. Ltd",
      href: "https://owninfotech.com/",
      badges: [],
      location: "Anandpur Sahib",
      title: "Web & App Developer",
      logoUrl: "/atomic.png",
      start: "Auguest 2024",
      end: "Continue. .",
      description:
        "We work with international & domastic clients, helping businesses go online by designing and developing apps and websites. We also build mobile apps using Android java, React Native and TypeScript.",
    },
    {
      "company": "Google",
      "badges": [],
      "href": "https://google.com",
      "location": "Remote",
      "title": "Google Product Specialist",
      "logoUrl": "/google.svg",
      "start": "January 2023",
      "end": "April 2024",
      "description": "Worked on various Google products, including Google Search, Google Ads, Google AdX, and Google AdSense. Developed websites optimized for Google AdSense, ensuring compliance with advertising policies and maximizing ad revenue. Provided technical support for ad integrations and performance optimization."
    }
    

   
  ],
  education: [
    {
      school: "I. K. Gujral Punjab Technical University ",
      href: "https://ptu.ac.in/",
      degree: "Computer Science Engineering",
      logoUrl: "/buildspace.jpg",
      start: "2018",
      end: "2022",
    },
    {
      school: "hp board of school education",
      href: "https://www.hpbose.org/",
      degree: "12th",
      logoUrl: "/waterloo.png",
      start: "2017",
      end: "2018",
    },
   
  ],
  projects: [
    {
      title: "Himachal Govt website",
      href: "https://himachalgovt.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
      "Himachal Govt is an informational website developed for the people of Himachal Pradesh. It provides government-related updates, resources, and official announcements in a user-friendly format. The project focused on optimizing SEO, integrating Google Adsense for monetization, and connecting Google Analytics and Search Console for performance tracking. Built with WordPress and PHP, the platform ensures easy content management and smooth scalability.",

      technologies: [
        "Wordpress",
        "php",
        "Seo",
        "Google adsense",
        "google console/analytic",
    
      ],
      links: [
        {
          type: "Website",
          href: "https://Himachalgovt.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/himachalgovt-portfolio.jpg",
     
    },
    {
      title: "Techdulx Next JS",
      href: "https://techdulx-main.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
      "Techdulx is a modern portfolio and service-based website built with Next.js. Designed for learning and showcasing UI skills, it features animated components, Stripe integration, and a clean UI using Shadcn and Magic UI. This project helped me explore full-stack development with TypeScript, Prisma, and PostgreSQL.",
    
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "ttps://techdulx-main.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/techdulx-portfolio.jpg",
      // video: "/techdulx-portfolio.jpg",
    },
    {
      title: "Techdulx",
      href: "https://techdulx.com",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "I have develop simple news website in wordpress. Full seo friendly with full seo secure 95% speed overall full responsive provide content related tech products and T-news",
      technologies: [
        "Wordpress",
        "php",
        "Seo",
        "Google adsense",
        "google console/analytic",
      ],
      links: [
        {
          type: "Website",
          href: "https://techdulx.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://wordpress.com/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/techdulx-wordpress-portfolio.jpg",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
  
  ],
  hackathons: [
      {
        title: "Himachal Govt Website",
        dates: "Jan 2024 - Feb 2024",
        location: "India",
        description:
          "Himachal Govt is an informational website developed for the people of Himachal Pradesh. It provides government-related updates, resources, and official announcements. The project focused on SEO optimization, Google Adsense integration, and performance tracking using Google Analytics and Search Console. Built with WordPress and PHP.",
        image: "https://himachalgovt.com/logo.png", // Replace with real image if available
        video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        links: [
          {
            title: "Website",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://himachalgovt.com",
          },
        ],
      },
      {
        title: "Techdulx Next.js",
        dates: "June 2025 - Present",
        location: "Remote",
        description:
          "Techdulx is a modern portfolio and service-based website built using Next.js. Designed to explore UI design and full-stack development, it features animated components, Stripe payments, and a clean interface using Shadcn and Magic UI. Built with TypeScript, TailwindCSS, Prisma, and PostgreSQL.",
        image: "https://techdulx.com/logo.png", // Optional, replace if available
        video: "https://cdn.magicui.design/bento-grid.mp4",
        links: [
          {
            title: "Website",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://techdulx-main.vercel.app/",
          },
          {
            title: "Source",
            icon: <Icons.github className="h-4 w-4" />,
            href: "https://github.com/magicuidesign/magicui",
          },
        ],
      },
      {
        title: "Techdulx News Website",
        dates: "April 2023 - September 2023",
        location: "India",
        description:
          "A WordPress-powered news platform focused on tech product reviews and T-news. Fully SEO-optimized, responsive, and designed for high performance, achieving 95% speed score. Integrated with Google Adsense and Analytics for monetization and insights.",
        image: "https://techdulx.com/news-thumbnail.png", // Replace if available
        video: "https://cdn.llm.report/openai-demo.mp4",
        links: [
          {
            title: "Website",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://techdulx.com",
          },
          {
            title: "Source",
            icon: <Icons.github className="h-4 w-4" />,
            href: "https://wordpress.com/",
          },
        ],
      },
        
   
  ],
} as const;
