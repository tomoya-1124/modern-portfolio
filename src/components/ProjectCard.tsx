"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Link from "next/link";

// type ProjectCardProps = {
//   slug: string;
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
//   liveUrl: string;
// //   githubUrl: string;
// };

type ProjectCardProps = Project;

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  image,
  liveUrl,
//   githubUrl,
}: ProjectCardProps) {
  return (
    <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70 transition hover:-translate-y-1 hover:border-zinc-600"
    >
      <div className="grid gap-5 p-4 sm:p-5 md:grid-cols-[1.1fr_1fr] md:gap-6 md:p-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <Image
            src={image}
            alt={`${title} screenshot`}
            width={1200}
            height={800}
            className="h-auto w-full object-contain opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
        />
        </div>

        <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs tracking-[0.25em] text-zinc-500">
                PROJECT
            </p>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((item) => (
                <span
                    key={item}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                >
                    {item}
                </span>
                ))}
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-5">
                <div className="flex flex-wrap items-center gap-6 text-sm">
                    <Link
                        href={`/projects/${slug}`}
                        className="font-medium text-zinc-400 transition hover:text-white"
                    >
                        View Details
                    </Link>

                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-medium text-white transition hover:text-zinc-300"
                    >
                        Open Site
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </motion.article>
  );
}