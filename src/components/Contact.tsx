export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="border-t border-zinc-900 pt-16">
        <p className="text-xs tracking-[0.3em] text-zinc-500">
          CONNECT
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Let&apos;s connect.
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
          Feel free to explore my projects, creative works
          and social accounts.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/tomoya-1124"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/r_of_the_moon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}