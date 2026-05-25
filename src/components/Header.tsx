export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-sm font-semibold tracking-[0.25em] text-white">
          TOMOYA ABE
        </a>

        <nav className="flex items-center gap-5 text-sm text-zinc-400">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          {/* <a
            href="https://github.com/example"
            target="_blank"
            className="transition hover:text-white"
          > */}
            {/* GitHub
          </a> */}
        </nav>
      </div>
    </header>
  );
}