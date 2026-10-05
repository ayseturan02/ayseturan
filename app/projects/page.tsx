import Link from "next/link";
import { ArrowLeft, Terminal, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
      </Link>

      <div className="flex items-center gap-2 mb-2">
        <Terminal className="w-5 h-5 text-accent" />
        <h1 className="text-2xl font-bold text-foreground">
          Projeler & Mimari Çalışmalar
        </h1>
      </div>
      <p className="text-sm text-muted mb-8">
        Üretimde çalışan açık kaynak kütüphaneler, yüksek performanslı dağıtık
        sistemler.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs text-accent font-mono">
              Backend • 150k+ Ops/s
            </span>
            <h2 className="text-lg font-bold text-foreground mt-1">
              ChronoCache
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              Rust ile sıfırdan geliştirilmiş, kilit serbest (lock-free)
              eşzamanlı indekslemeye sahip, ultra düşük gecikmeli bellek içi
              anahtar-değer deposu.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border text-xs">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-accent hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs text-accent font-mono">
              Kubernetes • AI
            </span>
            <h2 className="text-lg font-bold text-foreground mt-1">
              Nexus API Gateway
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              Kubernetes ortamları için dinamik token-bucket rate-limiting,
              asenkron JWT doğrulama ve gerçek zamanlı telemetri eklentisi.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border text-xs">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-accent hover:underline"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
