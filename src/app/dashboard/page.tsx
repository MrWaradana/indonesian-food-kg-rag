"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, BrainCircuit, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/language-context";

export default function DashboardPage() {
  const { t } = useLanguage();
  
  // Sample statistics - in a real app, these would come from your backend
  const stats = [
    { label: t("dashboard.stats.kg-created"), value: 12 },
    { label: t("dashboard.stats.entities"), value: 487 },
    { label: t("dashboard.stats.relationships"), value: 943 },
    { label: t("dashboard.stats.queries"), value: 156 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{t("dashboard.title")}</h1>
      <p className="text-slate-600 mb-8">
        {t("dashboard.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-slate-200 transition-all hover:shadow-md">
          <CardHeader>
            <div className="mb-3">
              <Network className="h-10 w-10 text-slate-700" />
            </div>
            <CardTitle className="text-xl">{t("nav.knowledge-graph")}</CardTitle>
            <CardDescription>
              {t("features.kg-creation.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span>Extract entities (dishes, ingredients, regions)</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span>Identify relationships between entities</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-green-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span>Visualize and analyze the resulting knowledge graph</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/knowledge-graph">
                {t("home.create-kg")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-slate-200 transition-all hover:shadow-md">
          <CardHeader>
            <div className="mb-3">
              <BrainCircuit className="h-10 w-10 text-slate-700" />
            </div>
            <CardTitle className="text-xl">{t("nav.rag")}</CardTitle>
            <CardDescription>
              {t("features.rag-optimization.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-blue-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span>Query Indonesian food knowledge with natural language</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-blue-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span>Leverage knowledge graph for enhanced retrieval</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-4 w-4 rounded-full bg-blue-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span>Compare results with and without knowledge graph integration</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/rag">
                {t("home.optimize-rag")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t("dashboard.activity.title")}</h2>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-slate-50 p-3 border-b">
            <h3 className="font-medium">{t("dashboard.activity.log")}</h3>
          </div>
          <div className="p-0">
            <ul className="divide-y">
              {[
                { action: "Knowledge Graph Created", details: "Indonesian Spices Graph", time: "2 hours ago" },
                { action: "RAG Query", details: "What are the key ingredients in Soto?", time: "5 hours ago" },
                { action: "Knowledge Graph Updated", details: "Added 24 new ingredients", time: "Yesterday" },
                { action: "RAG Optimization", details: "Adjusted retrieval parameters", time: "2 days ago" },
                { action: "Knowledge Graph Created", details: "Regional Cuisines of Indonesia", time: "3 days ago" },
              ].map((item, index) => (
                <li key={index} className="p-3 hover:bg-slate-50">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-slate-600">{item.details}</p>
                    </div>
                    <p className="text-xs text-slate-500">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <Info className="h-6 w-6 text-blue-500 mr-3 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">{t("dashboard.research.title")}</h3>
            <p className="text-sm text-blue-700 mb-4">
              {t("dashboard.research.description")}
            </p>
            <Button variant="outline" className="bg-white text-blue-700 border-blue-200 hover:bg-blue-100">
              {t("dashboard.research.notes")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}