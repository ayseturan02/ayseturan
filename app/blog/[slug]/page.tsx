import { BLOG_POSTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Tüm Yazılara Dön
      </Link>

      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="px-3 py-1 rounded-md bg-card border border-border text-accent text-xs font-mono">
          {post.category}
        </span>
        <span className="text-xs text-muted">•</span>
        <span className="text-xs text-muted flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" /> {post.date}
        </span>
        <span className="text-xs text-muted">•</span>
        <span className="text-xs text-muted flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {post.readTime}
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-6">
        {post.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-border">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-card text-muted border border-border"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="text-sm text-foreground/90 leading-relaxed space-y-6 whitespace-pre-line bg-card/50 border border-border/60 p-6 sm:p-8 rounded-2xl shadow-xl">
        {post.content}
      </div>
    </article>
  );
}
