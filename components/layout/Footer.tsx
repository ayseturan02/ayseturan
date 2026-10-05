export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20 text-center text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Ayşe Turan. Tüm hakları saklıdır.</p>
        <p className="flex items-center gap-1 justify-center">
          <span>Built with</span>
          <span className="text-accent font-semibold">
            Next.js & Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}
