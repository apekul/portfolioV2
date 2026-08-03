import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const experience = [
  {
    role: "Frontend Developer",
    company: "Emiteo",
    companyLink: "https://emiteo.pl",
    period: "Aug 2024 — Present",
    description:
      "Fintech crowdfunding investment platform in a multi-project environment: web app for users, admin panel and API.",
    points: [
      "Implemented product views and landing pages in Next.js, TypeScript and MUI from Figma designs, with KNF regulatory compliance",
      "Built and maintained reusable UI components (product cards, React Hook Form forms, alerts, carousels, MUI Tabs)",
      "Integrated the frontend with REST APIs, a headless CMS (Directus) and external SaaS services",
      "Optimized performance and responsiveness: mobile-first design, Next.js Image, lazy loading",
      "Participated in code reviews and occasionally handled non-frontend tasks (Symfony, GitHub Actions/Playwright, AWS)",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "Apr 2021 — Aug 2024",
    description: "Delivered frontend commissions for clients.",
    points: [
      "Implemented landing pages and introduced changes to existing websites",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="w-full flex flex-col items-center py-20 bg-zinc-950"
    >
      <div className="Container flex flex-col items-center">
        <h1 className="font-bold text-4xl pb-2 text-center">
          Work <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-center text-zinc-400 pb-12 max-w-xl mx-auto">
          Where I've been and what I've been building.
        </p>
        <div className="relative border-l-2 border-white/10 pl-8 md:pl-10 w-full max-w-[900px] space-y-10">
          {experience.map((job, index) => (
            <article className="relative" key={index}>
              <span className="absolute -left-[41px] md:-left-[49px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 ring-4 ring-zinc-950"></span>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h2 className="text-2xl font-bold">{job.role}</h2>
                  <span className="text-sm font-semibold text-zinc-400">
                    {job.period}
                  </span>
                </div>
                <p className="text-lg font-semibold text-indigo-400 py-1">
                  {job.companyLink ? (
                    <a
                      href={job.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:text-indigo-300 transition-colors duration-150"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="text-zinc-300 pb-3">{job.description}</p>
                <ul className="space-y-2">
                  {job.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-zinc-400"
                    >
                      <AiOutlineCheckCircle
                        size={20}
                        className="text-green-400 shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
