"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KnowledgeGraphForm from "@/components/knowledge-graph-form";
import GraphVisualization from "@/components/graph-visualization";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function KnowledgeGraphPage() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/dashboard" className="mr-4 text-slate-500 hover:text-slate-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{t("kg.title")}</h1>
          <p className="text-slate-600">
            {t("kg.description")}
          </p>
        </div>
      </div>

      <Tabs defaultValue="create">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="create">{t("kg.create-tab")}</TabsTrigger>
          <TabsTrigger value="visualize">{t("kg.visualize-tab")}</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <KnowledgeGraphForm />
        </TabsContent>
        <TabsContent value="visualize">
          <GraphVisualization />
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">{t("kg.title")}</h2>
        <div className="bg-slate-50 p-6 rounded-lg">
          <p className="text-slate-600 mb-4">
            Knowledge graphs represent information as a network of entities and their relationships. For Indonesian cuisine, 
            this includes dishes, ingredients, cooking techniques, regions, and the connections between them.
          </p>
          <p className="text-slate-600 mb-4">
            The knowledge graph creation process involves:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-slate-600 mb-4">
            <li>
              <span className="font-medium">Entity Extraction:</span> Identifying key elements like dishes (Rendang, Soto), 
              ingredients (lemongrass, galangal), regions (Java, Sumatra), etc.
            </li>
            <li>
              <span className="font-medium">Relationship Identification:</span> Determining how entities are connected 
              (e.g., Rendang contains coconut milk, Rendang originates from West Sumatra).
            </li>
            <li>
              <span className="font-medium">Graph Construction:</span> Building a structured representation with nodes (entities) 
              and edges (relationships).
            </li>
            <li>
              <span className="font-medium">Visualization:</span> Creating a visual representation of the knowledge graph 
              for analysis and exploration.
            </li>
          </ol>
          <p className="text-slate-600">
            The resulting knowledge graph serves as a foundation for enhanced retrieval-augmented generation (RAG), 
            enabling more accurate and contextually relevant responses to queries about Indonesian cuisine.
          </p>
        </div>
      </div>
    </div>
  );
}