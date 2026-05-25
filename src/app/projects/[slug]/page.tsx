import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Tomoya Abe",
    };
  }

  return {
    title: `${project.title} | Tomoya Abe`,
    description: project.description,
  };
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
        href="/#projects"
        className="mb-10 inline-flex text-sm text-zinc-400 transition hover:text-white"
        >
        ← Back to Projects
        </Link>
        <p className="text-sm tracking-[0.3em] text-zinc-500">PROJECT</p>

        <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-[0.8fr_1fr]">
            <div>
                <p className="text-xs tracking-[0.3em] text-zinc-500">
                OVERVIEW
                </p>
            </div>

            <div>
                <p className="leading-8 text-zinc-400">
                {project.detail}
                </p>
            </div>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-[0.8fr_1fr]">
            <div>
                <p className="text-xs tracking-[0.3em] text-zinc-500">
                BACKGROUND
                </p>
            </div>

            <div>
                <p className="leading-8 text-zinc-400">
                {project.background}
                </p>
            </div>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-[0.8fr_1fr]">
  
            <div>
                <p className="text-xs tracking-[0.3em] text-zinc-500">
                TECH STACK
                </p>
            </div>

            <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                <span
                    key={item}
                    className="rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300"
                >
                    {item}
                </span>
                ))}
            </div>
        </div>

        <div className="mt-12">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
            Open Site
            <ArrowUpRight size={16} />
            </a>
        </div>
        <div className="mt-24 border-t border-zinc-900 pt-10">
            <p className="text-xs tracking-[0.3em] text-zinc-500">
                MORE PROJECTS
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
                {projects
                .filter((item) => item.slug !== project.slug)
                .map((item) => (
                    <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="rounded-full border border-zinc-800 px-5 py-2 text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-white"
                    >
                    {item.title}
                    </Link>
                ))}
            </div>
         </div>
      </div>
    </main>
  );
}