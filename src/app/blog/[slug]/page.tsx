import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowLeft, ArrowRight, Tag, User, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ClientImage } from "@/components/ui/ClientImage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı Bulunamadı" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function renderContent(content: string, contentImages: string[]) {
  const parts = content.split(/\n\n+/);
  let imgIdx = 0;
  const elements: React.ReactNode[] = [];

  parts.forEach((part, i) => {
    const trimmed = part.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl lg:text-3xl font-bold text-[#0a0a0a] mt-12 mb-6 leading-tight">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-[#0a0a0a] mt-8 mb-4">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
      elements.push(
        <ul key={i} className="space-y-3 my-6 pl-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003366] flex-shrink-0 mt-2.5" />
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-[#0a0a0a] my-4 leading-relaxed">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else {
      elements.push(
        <p key={i} className="text-gray-600 leading-relaxed my-4">
          {trimmed}
        </p>
      );
    }

    // Insert image every ~3 paragraphs
    if (i > 0 && i % 4 === 0 && imgIdx < contentImages.length) {
      elements.push(
        <div key={`img-${imgIdx}`} className="my-10 rounded-2xl overflow-hidden relative h-64 lg:h-80 bg-gradient-to-br from-[#003366] to-[#1a6bdb]">
          <ClientImage
            src={contentImages[imgIdx]}
            alt="İçerik görseli"
            fill
            className="object-cover"
          />
        </div>
      );
      imgIdx++;
    }
  });

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = blogPosts.indexOf(post);
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const otherRelated = blogPosts.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 3 - related.length);
  const relatedPosts = [...related, ...otherRelated].slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden pt-24"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="absolute inset-0">
          <ClientImage
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/70 to-[#003366]/40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pb-16 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <ArrowLeft size={16} /> Tüm Yazılar
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
              {post.category}
            </span>
            <span className="text-xs text-white/50 flex items-center gap-1">
              <Clock size={12} /> {post.readingTime} dk okuma
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
              {post.author.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{post.author.name}</div>
              <div className="text-xs text-white/50 flex items-center gap-3">
                <span>{post.author.role}</span>
                <span>·</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* ARTICLE */}
            <article className="lg:col-span-3">
              <div className="prose-lg max-w-none">
                {renderContent(post.content, post.contentImages)}
              </div>

              {/* TAGS */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1">
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* AUTHOR BIO */}
              <div className="mt-8 rounded-2xl p-6 border border-gray-100 flex items-start gap-4" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="w-14 h-14 rounded-2xl bg-[#003366] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-bold text-[#0a0a0a]">{post.author.name}</div>
                  <div className="text-sm text-[#003366] font-medium mb-2">{post.author.role}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Forward danışmanlık ekibinin deneyimli bir üyesi. Otomasyon, yapay zeka ve dijital dönüşüm alanlarında uzman.
                  </p>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl p-5 border border-gray-100" style={{ backgroundColor: "#f8f8f8" }}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Makale Bilgileri</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User size={14} className="text-[#003366]" />
                      {post.author.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} className="text-[#003366]" />
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} className="text-[#003366]" />
                      {post.readingTime} dakika okuma
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-5 bg-[#003366] text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">Ücretsiz Danışmanlık</div>
                  <p className="text-sm leading-relaxed text-white/80 mb-4">
                    Bu konuda projenizi değerlendirmemizi ister misiniz?
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm font-semibold text-[#c8a96e] hover:text-white transition-colors"
                  >
                    İletişime Geç <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {relatedPosts.length > 0 && (
        <section className="py-20" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-[#003366]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">İlgili Yazılar</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0a0a0a]">Bunları da Okuyun</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related, idx) => (
                <AnimatedSection key={related.slug} delay={idx * 0.1}>
                  <Link href={`/blog/${related.slug}`}>
                    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="h-40 relative bg-gradient-to-br from-[#003366] to-[#1a6bdb]">
                        <ClientImage
                          src={related.coverImage}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-[#003366] mb-3 inline-block" style={{ backgroundColor: "rgba(0,51,102,0.08)" }}>
                          {related.category}
                        </span>
                        <h3 className="font-bold text-[#0a0a0a] text-sm leading-snug group-hover:text-[#003366] transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
