"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
//   githubUrl: string;
};

export default function ProjectCard({
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
      <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_1fr] md:p-8">
        <div className="overflow-hidden rounded-2xl bg-zinc-900">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={1200}
            height={675}
            className="aspect-video h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>

          <p className="mt-4 leading-7 text-zinc-400">{description}</p>

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
            <div className="flex gap-6 text-sm">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-medium text-white transition hover:text-zinc-300"
                >
                Open Site
                <ArrowUpRight size={16} />
                </a>

              {/* <a
                href={githubUrl}
                target="_blank"
                className="font-medium text-zinc-400 underline-offset-4 hover:text-white hover:underline"
              >
                GitHub
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}