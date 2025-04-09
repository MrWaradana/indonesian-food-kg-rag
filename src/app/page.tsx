"use client";

import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <Separator className="my-12" />

      <FeaturesSection />

      <Separator className="my-12" />

      {/* How It Works Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("home.how-it-works")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="bg-slate-200 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              {t("home.how-it-works.step1.title")}
            </h3>
            <p className="text-slate-600 text-center">
              {t("home.how-it-works.step1.description")}
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="bg-slate-200 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              {t("home.how-it-works.step2.title")}
            </h3>
            <p className="text-slate-600 text-center">
              {t("home.how-it-works.step2.description")}
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-lg">
            <div className="bg-slate-200 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              {t("home.how-it-works.step3.title")}
            </h3>
            <p className="text-slate-600 text-center">
              {t("home.how-it-works.step3.description")}
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Get Started Section */}
      <section className="bg-slate-800 text-white rounded-lg p-12 text-center my-12">
        <h2 className="text-3xl font-bold mb-4">
          {t("home.get-started.title")}
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          {t("home.get-started.description")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-slate-100 text-slate-800 hover:bg-slate-200"
          >
            <Link href="/dashboard/knowledge-graph">{t("home.create-kg")}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-white hover:text-white border-white bg-slate-500 hover:bg-slate-700"
          >
            <Link href="/dashboard/rag">{t("home.optimize-rag")}</Link>
          </Button>
        </div>
      </section>

      {/* Research Background */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("home.research.title")}
        </h2>
        <div className="bg-slate-50 p-8 rounded-lg">
          <p className="text-slate-600 mb-4">{t("home.research.p1")}</p>
          <p className="text-slate-600 mb-4">{t("home.research.p2")}</p>
          <p className="text-slate-600">{t("home.research.p3")}</p>
        </div>
      </section>
    </div>
  );
}
