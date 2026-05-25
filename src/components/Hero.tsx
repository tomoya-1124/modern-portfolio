export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm tracking-[0.3em] text-zinc-500">
        PORTFOLIO / LINK HUB
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Tomoya Abe
      </h1>

      <p className="mt-4 text-lg text-zinc-400 md:text-xl">
        Software Engineer / Web App Developer
      </p>

      <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
        Next.js, TypeScript, Tailwind CSS を中心に、
        個人開発したWebアプリや作品をまとめるポートフォリオサイトです。
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
            View Projects
        </a>
      </div>
    </section>
  );
}