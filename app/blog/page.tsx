import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";
import { FileText, ArrowLeft, Calendar, Clock, Eye } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
      </Link>

      <div className="flex items-center gap-2 mb-2">
        <FileText className="w-5 h-5 text-accent" />
        <h1 className="text-2xl font-bold text-foreground">Blog & Yazılar</h1>
      </div>
      <p className="text-sm text-muted mb-8">
        Dağıtık sistemler, backend mimarileri ve yazılım mühendisliği üzerine
        teknik notlar.
      </p>

      <div className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-2xl bg-card border border-border hover:border-accent transition-all group shadow-lg"
          >
            <div className="flex items-center justify-between text-xs text-muted mb-2 flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-background border border-border text-accent font-mono">
                {post.category}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {post.interactions}
                </span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mt-2">
              {post.title}
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded bg-background text-muted border border-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
