import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
      </Link>

      <div className="flex items-center gap-2 mb-2">
        <Briefcase className="w-5 h-5 text-accent" />
        <h1 className="text-2xl font-bold text-foreground">
          Kariyer & Deneyim
        </h1>
      </div>
      <p className="text-sm text-muted mb-8">
        Profesyonel iş geçmişim, üstlendiğim roller ve mimari çalışmalarım.
      </p>

      <div className="space-y-6 border-l border-border pl-6 ml-2">
        <div className="relative">
          <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent border-4 border-background"></span>
          <span className="text-xs text-muted flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> 2026 - Halen
          </span>
          <h2 className="text-lg font-bold text-foreground mt-1">
            Lead Software Architect
          </h2>
          <p className="text-xs text-accent font-mono mb-2">
            Fintech & Dağıtık Sistemler
          </p>
          <p className="text-xs text-muted leading-relaxed">
            Yüksek ölçekli finansal altyapılar, event-streaming mimarileri ve
            mikroservis dönüşüm süreçlerinin liderliği.
          </p>
        </div>

        <div className="relative pt-6">
          <span className="absolute -left-[31px] top-7.5 w-3 h-3 rounded-full bg-border border-4 border-background"></span>
          <span className="text-xs text-muted flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> 2024 - 2025
          </span>
          <h2 className="text-lg font-bold text-foreground mt-1">
            Senior Backend Engineer
          </h2>
          <p className="text-xs text-accent font-mono mb-2">
            Cloudphere Systems
          </p>
          <p className="text-xs text-muted leading-relaxed">
            Gerçek zamanlı veri indeksleme motorlarının Rust ve gRPC ile yeniden
            tasarlanması ve optimize edilmesi.
          </p>
        </div>
      </div>
    </div>
  );
}
