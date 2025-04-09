"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("home.hero.title")}
            <span className="block text-slate-700">{t("home.hero.subtitle")}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700">
              <Link href="/dashboard/knowledge-graph">{t("home.create-kg")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard/rag">{t("home.optimize-rag")}</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          {/* Placeholder for an image - in a real app, you'd use your own image */}
          <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-200 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  {/* This is a placeholder for an SVG or image that would go here */}
                  <svg viewBox="0 0 200 200" className="w-full h-full text-slate-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" />
                    <path d="M60,100 L90,130 L140,80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40,40 L60,60 M40,60 L60,40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M140,40 L160,60 M140,60 L160,40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M40,140 L60,160 M40,160 L60,140" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    <path d="M140,140 L160,160 M140,160 L160,140" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Knowledge Graph Visualization
              </h3>
              <p className="text-slate-600">
                Creating structured knowledge representation of Indonesian food, ingredients, and cooking techniques
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}