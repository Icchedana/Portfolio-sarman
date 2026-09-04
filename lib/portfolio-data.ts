export interface Project {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const portfolioData = {
  name: "Md. Sarman Rana",
  shortName: "Sarman Rana",
  title: "B.Sc. in CSE Student & Software Developer",
  headline: "Crafting robust web architectures and seamless digital experiences.",
  introduction: "I am a Computer Science and Engineering undergraduate student, Class Representative, and multi-disciplinary developer and designer specializing in full-stack web applications, UI/UX engineering, and e-commerce solutions like WooCommerce.",
  location: "Thakurgaon, Bangladesh",
  email: "sarman.rana.dev@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    kaggle: "https://kaggle.com",
    codeforces: "https://codeforces.com"
  },
  skills: {
    languages: ["Python", "Kotlin", "C#", "JavaScript", "TypeScript"],
    webDevelopment: ["Next.js", "React", "Node.js", "WooCommerce", "HTML5", "Tailwind CSS"],
    design: ["UI/UX Design", "Figma", "Logo & Graphic Design"],
    systems: ["Operating Systems", "Computer Networking", "Database Management", "Git & GitHub"]
  },
  projects: [
    {
      title: "Leomiii E-Commerce Platform",
      description: "Full-scale custom e-commerce solution integrating WooCommerce and modern frontend interfaces for women's apparel retail.",
      role: "Lead Web Developer & Technical Setup",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Tailwind CSS"],
      features: [
        "Custom storefront UI development",
        "Seamless cart and checkout integration",
        "Optimized product catalog filtering for western apparel"
      ],
      liveUrl: "https://leomiii.com"
    },
    {
      title: "M/S Sarman Traders Management Portal",
      description: "Digital inventory and business optimization platform tailored for agricultural retail and wholesale operations.",
      role: "Full-Stack Developer",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WooCommerce"],
      features: [
        "Automated digital invoice and pad generation",
        "Seed, fertilizer, and pesticide stock management",
        "SEO-optimized web presence for regional agricultural trade"
      ],
      githubUrl: "https://github.com"
    }
  ] as Project[],
  experience: [
    {
      period: "Present",
      role: "Event Coordinator",
      organization: "CEC Club",
      description: "Directing technical and cultural events, managing proposals, and coordinating student engagement initiatives."
    },
    {
      period: "Present",
      role: "Class Representative (CR)",
      organization: "B.Sc. in Computer Science & Engineering",
      description: "Acting as the primary liaison between students and faculty, organizing academic schedules, and facilitating collaborative projects."
    },
    {
      period: "Ongoing",
      role: "UI/UX & Web Developer",
      organization: "Freelance / Independent",
      description: "Delivering professional UI/UX design, custom web development, brand identity, and graphic design solutions for clients."
    }
  ] as Experience[],
  education: [
    {
      period: "Undergraduate",
      role: "B.Sc. in Computer Science and Engineering (CSE)",
      organization: "University",
      description: "Focusing on core computer science fundamentals, data structures, algorithms, networking, and software engineering principles."
    }
  ],
  achievements: [
    {
      title: "Aspire Leaders Program",
      description: "Completed comprehensive leadership and professional development training fellowship."
    },
    {
      title: "Grameenphone Campus Lead Finalist",
      description: "Selected for driving localized student campaigns and brand engagement initiatives."
    },
    {
      title: "Competitive Programming & AI Training",
      description: "Active training across Phitron, Codeforces, Kaggle, and Google AI Studio platforms."
    }
  ]
};
