export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="text-xs tracking-[0.3em] text-zinc-500">
            ABOUT
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Building apps with
            <br />
            minimal aesthetics.
          </h2>
        </div>

        <div>
          <p className="leading-8 text-zinc-400">
            Software Engineer based in Japan.
            <br />
            Developing modern web applications with
            Next.js, TypeScript and Tailwind CSS.
          </p>

          <p className="mt-6 leading-8 text-zinc-400">
            Interested in fashion, poetry,
            minimal UI and digital aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
}