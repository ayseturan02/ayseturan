import Link from "next/link";
import { Menu, Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-wider text-foreground"
        >
          <Terminal className="w-5 h-5 text-accent" />
          <span>AYŞE TURAN</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="hover:text-foreground transition-colors"
          >
            Projeler
          </Link>
          <Link
            href="/career"
            className="hover:text-foreground transition-colors"
          >
            Kariyer
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-md bg-card border border-border text-foreground hover:border-accent transition-all"
          >
            İletişime Geç
          </Link>
          <button className="md:hidden p-2 text-muted hover:text-foreground">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
