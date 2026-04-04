"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { blogPosts } from "@/data/blog";

const allCategories = ["Tümü", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered = blogPosts.filter((post) => {
    const matchCat = activeCategory === "Tümü" || post.category === activeCategory;
    const matchSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1a6bdb 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[#c8a96e]" />
            <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase">
              Blog & İçgörüler
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl"
          >
            Sektörün Nabzını Tutun
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Yapay zeka, otomasyon ve dijital dönüşüm alanındaki en güncel içgörüler, vaka analizleri ve uzman görüşleri.
          </motion.p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Yazılarda ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:border-[#003366] bg-gray-50"
              />
            </div>
            {/* Categories */}
            <div className="flex gap-2 flex-wrap">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#003366] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg font-medium">Sonuç bulunamadı.</p>
              <p className="text-sm mt-2">Farklı bir arama terimi veya kategori deneyin.</p>
            </div>
          ) : (
            <>
              {/* FEATURED */}
              {featured && (
                <AnimatedSection className="mb-12">
                  <Link href={`/blog/${featured.slug}`}>
                    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <Image
                          src={featured.coverImage}
                          alt={featured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.parentElement!.style.background = "linear-gradient(135deg, #003366 0%, #1a6bdb 100%)";
                          }}
                        />
                      </div>
                      <div className="p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full text-[#003366]" style={{ backgroundColor: "rgba(0,51,102,0.08)" }}>
                            {featured.category}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock size={12} /> {featured.readingTime} dk okuma
                          </span>
                          <span className="text-xs font-bold text-[#c8a96e] uppercase tracking-wider">Öne Çıkan</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#0a0a0a] mb-4 group-hover:text-[#003366] transition-colors leading-tight">
                          {featured.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {featured.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#003366] flex items-center justify-center text-white text-xs font-bold">
                              {featured.author.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-[#0a0a0a]">{featured.author.name}</div>
                              <div className="text-xs text-gray-400">{featured.author.role}</div>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#003366] group-hover:gap-2 transition-all">
                            Oku <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              )}

              {/* REST */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post, idx) => (
                  <AnimatedSection key={post.slug} delay={idx * 0.08}>
                    <Link href={`/blog/${post.slug}`}>
                      <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#003366] to-[#1a6bdb]">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-[#003366]" style={{ backgroundColor: "rgba(0,51,102,0.08)" }}>
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock size={11} /> {post.readingTime} dk
                            </span>
                          </div>
                          <h3 className="font-bold text-[#0a0a0a] text-base leading-snug mb-3 group-hover:text-[#003366] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500 flex items-center gap-1">
                                <Tag size={9} /> {tag}
                              </span>
                            ))}
                          </div>
                          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs text-gray-400">{post.author.name}</span>
                            <span className="text-xs text-gray-400">
                              {new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long" })}
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
