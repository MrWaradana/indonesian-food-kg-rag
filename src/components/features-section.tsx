"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck, Database, Network, Puzzle, Search, Zap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Network className="h-10 w-10 text-slate-700" />,
      title: t("features.kg-creation.title"),
      description: t("features.kg-creation.description"),
    },
    {
      icon: <Search className="h-10 w-10 text-slate-700" />,
      title: t("features.enhanced-retrieval.title"),
      description: t("features.enhanced-retrieval.description"),
    },
    {
      icon: <Zap className="h-10 w-10 text-slate-700" />,
      title: t("features.rag-optimization.title"),
      description: t("features.rag-optimization.description"),
    },
    {
      icon: <Database className="h-10 w-10 text-slate-700" />,
      title: t("features.data-analysis.title"),
      description: t("features.data-analysis.description"),
    },
    {
      icon: <Puzzle className="h-10 w-10 text-slate-700" />,
      title: t("features.customizable.title"),
      description: t("features.customizable.description"),
    },
    {
      icon: <CircleCheck className="h-10 w-10 text-slate-700" />,
      title: t("features.academic.title"),
      description: t("features.academic.description"),
    },
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("features.title")}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {t("features.description")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-slate-200 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 text-sm">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}