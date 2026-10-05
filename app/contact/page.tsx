import Link from "next/link";
import { ArrowLeft, Send, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
      </Link>

      <div className="flex items-center gap-2 mb-2">
        <Send className="w-5 h-5 text-accent" />
        <h1 className="text-2xl font-bold text-foreground">İletişime Geçin</h1>
      </div>
      <p className="text-sm text-muted mb-8">
        Yeni bir proje, teknik mimari danışmanlığı veya sadece nitelikli bir
        kahve sohbeti için yazabilirsiniz.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg space-y-4">
        <div>
          <label className="block text-xs text-muted mb-1">Ad Soyad</label>
          <input
            type="text"
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1">
            E-posta Adresi
          </label>
          <input
            type="email"
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
            placeholder="ornek@domain.com"
          />
        </div>
        <div>
          <label className="block text-xs text-muted mb-1">Mesajınız</label>
          <textarea
            rows={4}
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-accent"
            placeholder="Mesajınızı buraya yazın..."
          ></textarea>
        </div>
        <button className="w-full py-2.5 bg-accent text-background font-semibold rounded-lg text-xs hover:opacity-90 transition-opacity">
          Mesaj Gönder
        </button>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8 text-xs text-muted flex-wrap">
        <a
          href="mailto:dev@ayseturan.com"
          className="flex items-center gap-1 hover:text-foreground"
        >
          <Mail className="w-4 h-4 text-accent" /> dev@ayseturan.com
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-foreground"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-foreground"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
