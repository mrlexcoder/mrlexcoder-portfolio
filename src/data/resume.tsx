import { Icons } from "@/components/icons";
import { DownloadIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Amit Kumar",
  initials: "AK",
  url: "https://dev.himachalgovt.com",
  location: "Himachal Pradesh, India",
  locationLink: "https://maps.app.goo.gl/S9JCSQNuzyEXjev19",
  description:
    "Full-Stack Developer building web and mobile products for real clients.",
  summary:
    "Full-Stack Developer with 2+ years of experience building web and mobile products. Skilled in JavaScript, React Native, Next.js, PHP, Node.js, MongoDB, Firebase, and Linux server deployment. I use modern AI tools (Cursor, Claude) daily for faster development, debugging, and delivery — focused on shipping reliable products, not memorizing syntax.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "Next.js",
    "PHP",
    "Laravel",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Firebase",
    "WordPress",
    "REST APIs",
    "Linux / Ubuntu",
    "Nginx",
    "AWS EC2",
    "SEO",
    "Git",
    "Cursor AI",
    "Claude AI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resources", icon: DownloadIcon, label: "Resources" },
  ],
  contact: {
    email: "amitsandhu6424@gmail.com",
    workEmail: "dev@himachalgovt.com",
    webmailUrl: "https://webmail.himachalgovt.com/",
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
        name: "Instagram",
        url: "https://www.instagram.com/amit.sandhu__/",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dev@himachalgovt.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Own Info Tech Pvt. Ltd.",
      href: "https://owninfotech.com/",
      badges: [],
      location: "Anandpur Sahib",
      title: "Web & App Developer",
      logoUrl: "/atomic.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Build and maintain client websites and mobile apps using WordPress, PHP, Laravel, Next.js, and React Native. Deploy on Linux VPS with Nginx, optimize performance and security, and use Cursor + Claude AI daily to ship features faster.",
    },
    {
      company: "KV IT Solutions Pvt. Ltd.",
      badges: [],
      href: "https://kvitsolutions.com/",
      location: "Remote",
      title: "Junior Linux Administrator",
      logoUrl: "/nvidia.png",
      start: "Jul 2023",
      end: "Aug 2024",
      description:
        "Installed and configured Ubuntu servers, Oracle databases, and SSH access. Managed Apache, Nginx, WHM/cPanel hosting, DNS, SMTP, firewalls, and server security for production client environments.",
    },
  ],
  education: [
    {
      school: "I.K. Gujral Punjab Technical University (PTU)",
      href: "https://ptu.ac.in/",
      degree: "B.Tech — Computer Science Engineering (CGPA 7.5)",
      logoUrl: "/buildspace.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "HimachalGovt.com",
      href: "https://himachalgovt.com",
      dates: "2024 — Present",
      active: true,
      description:
        "Public platform for Himachal Pradesh — government jobs, news, yojana, technology, and district updates. Built with WordPress, PHP, and custom plugins. Hosted on Linux VPS with SEO, Google Analytics, Search Console, and AdSense integration.",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "Tailwind CSS",
        "SEO",
        "Linux VPS",
        "Google Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://himachalgovt.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/himachalgovt-preview.jpg",
    },
    {
      title: "HimachalGovt Android App",
      href: "https://play.google.com/store/apps/details?id=mrlexcoder.himachalgovt",
      dates: "2025 — Testing",
      active: true,
      description:
        "Official HimachalGovt mobile app for jobs, news, and government updates on Android. Currently in Google Play testing phase — push notifications, fast browsing, and the same trusted content as the website.",
      technologies: [
        "React Native",
        "Android",
        "Firebase",
        "REST API",
        "Push Notifications",
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=mrlexcoder.himachalgovt",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/himachalgovt-app-preview.jpg",
    },
    {
      title: "Titan Drilling Mobile App",
      href: "https://github.com/mrlexcoder",
      dates: "2024 — 2025",
      active: true,
      description:
        "Field operations app with Node.js backend for inspections, HSE forms, job cards, and incident reports. Offline sync, PDF reports, email alerts, and role-based access for production teams.",
      technologies: [
        "React Native",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "PDF Reports",
      ],
      links: [
        {
          type: "Private",
          href: "https://github.com/mrlexcoder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/himachalgovt-portfolio.jpg",
    },
    {
      title: "Techdulx Next.js",
      href: "https://techdulx-main.vercel.app/",
      dates: "Jun 2025 — Present",
      active: true,
      description:
        "Modern portfolio and service website built with Next.js, TypeScript, Prisma, PostgreSQL, Stripe, Shadcn UI, and Magic UI — exploring full-stack patterns and polished UI design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://techdulx-main.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/techdulx-portfolio.jpg",
    },
  ],
  hackathons: [
    {
      title: "HimachalGovt.com",
      dates: "2024 — Present",
      location: "Himachal Pradesh, India",
      description:
        "Government jobs, news, yojana, and tech updates for Himachal Pradesh. WordPress + custom PHP on Linux VPS with full SEO and analytics stack.",
      image: "/himachalgovt-preview.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://himachalgovt.com",
        },
      ],
    },
    {
      title: "HimachalGovt Android App",
      dates: "2025 — Testing",
      location: "Google Play",
      description:
        "Mobile app for HimachalGovt — jobs, news, and government updates. Currently in Play Store testing phase.",
      image: "/himachalgovt-app-preview.jpg",
      links: [
        {
          title: "Play Store",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://play.google.com/store/apps/details?id=mrlexcoder.himachalgovt",
        },
      ],
    },
    {
      title: "Titan Drilling App",
      dates: "2024 — 2025",
      location: "Client Project",
      description:
        "React Native + Node.js app for field inspections, HSE forms, offline sync, and PDF reporting for drilling operations teams.",
      image: "/atomic.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mrlexcoder",
        },
      ],
    },
    {
      title: "Employee of the Year",
      dates: "Jul 2025",
      location: "Own Info Tech Pvt. Ltd.",
      description:
        "Awarded Employee of the Year for outstanding performance, dedication, and contribution to company growth.",
      image: "/atomic.png",
      links: [],
    },
  ],
} as const;
