"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, ThumbsUp, ThumbsDown, BookOpen, Download } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/language-context";

interface ResultDisplayProps {
  query?: string;
  response?: string;
  sources?: {
    text: string;
    relevance: number;
    source: string;
  }[];
  evaluation?: {
    accuracy: number;
    relevance: number;
    completeness: number;
  };
  loading?: boolean;
}

export default function ResultDisplay({
  query = "What are the key ingredients in Rendang and how does it differ across regions in Indonesia?",
  response = 'Rendang is a rich and flavorful Indonesian dish originating from the Minangkabau people of West Sumatra. The key ingredients in traditional Rendang include:\n\n1. Meat (typically beef)\n2. Coconut milk\n3. A spice paste made of:\n   - Galangal\n   - Ginger\n   - Turmeric\n   - Lemongrass\n   - Garlic\n   - Shallots\n   - Chilies\n4. Kaffir lime leaves\n5. Tamarind\n\nRegional variations exist across Indonesia:\n\n- West Sumatra (original): Uses more chilies, has a drier consistency, and is cooked longer until the color darkens to almost black.\n- Java: Often sweeter with added sweet soy sauce (kecap manis) and less spicy.\n- North Sumatra: Includes andaliman (Sichuan pepper relative) for a numbing sensation.\n- East Indonesia: May incorporate local spices like kenari nuts or use buffalo meat instead of beef.\n- Aceh: Features extra turmeric and sometimes adds jackfruit.\n\nThe cooking technique also varies, with traditional Minangkabau Rendang being cooked for 4-8 hours until the liquid evaporates completely ("dry rendang"), while some regions prefer a more liquid consistency ("wet rendang" or "kalio").',
  sources = [
    {
      text: "Rendang is a spicy meat dish which originated from the Minangkabau region in West Sumatra, Indonesia. It has spread across Indonesian cuisine to the cuisines of neighboring Southeast Asian countries. The key ingredients include beef, coconut milk, and a paste made from ginger, galangal, turmeric, lemongrass, garlic, shallots, and chili peppers.",
      relevance: 0.92,
      source: "Indonesian Culinary Encyclopedia",
    },
    {
      text: "West Sumatran rendang is characterized by its very dark color, dry texture, and intense flavor from long hours of cooking. Javanese rendang tends to be sweeter with the addition of kecap manis (sweet soy sauce) and isn't cooked as long, resulting in a wetter consistency sometimes called 'kalio'.",
      relevance: 0.87,
      source: "Regional Variations in Indonesian Cooking",
    },
    {
      text: "In North Sumatra, particularly among Batak communities, rendang is sometimes prepared with andaliman, a local relative of Sichuan pepper that produces a numbing sensation. Eastern Indonesian variants may incorporate local ingredients like kenari nuts.",
      relevance: 0.79,
      source: "Spices of the Archipelago",
    },
  ],
  evaluation = {
    accuracy: 0.95,
    relevance: 0.92,
    completeness: 0.89,
  },
  loading = false,
}: ResultDisplayProps) {
  const { t } = useLanguage();

  const [feedbackGiven, setFeedbackGiven] = useState<"up" | "down" | null>(
    null
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    toast("Copied to clipboard", {
      description: "The response has been copied to your clipboard",
    });
  };

  const handleFeedback = (type: "up" | "down") => {
    setFeedbackGiven(type);
    toast(
      type === "up"
        ? "Positive feedback recorded"
        : "Negative feedback recorded",
      { description: "Thank you for your feedback" }
    );
  };

  const handleDownload = () => {
    // In a real app, this would generate and download a text file or PDF
    toast.success("Downloaded", {
      description: "The response has been downloaded",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("results.title")}</CardTitle>
        <CardDescription>{t("results.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="response">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="response">
              {t("results.response-tab")}
            </TabsTrigger>
            <TabsTrigger value="sources">
              {t("results.sources-tab")}
            </TabsTrigger>
            <TabsTrigger value="evaluation">
              {t("results.evaluation-tab")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="response" className="space-y-4">
            {loading ? (
              <div className="h-60 flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-slate-300 border-t-slate-800 rounded-full"></div>
              </div>
            ) : (
              <>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-medium text-slate-500">
                    {t("results.query")}
                  </p>
                  <p className="text-slate-800">{query}</p>
                </div>

                <div className="bg-white border p-4 rounded-lg">
                  <div className="prose max-w-none">
                    {response.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleFeedback("up")}
                      disabled={feedbackGiven !== null}
                      className={
                        feedbackGiven === "up"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : ""
                      }
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      {t("results.helpful")}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleFeedback("down")}
                      disabled={feedbackGiven !== null}
                      className={
                        feedbackGiven === "down"
                          ? "bg-red-50 text-red-700 border-red-200"
                          : ""
                      }
                    >
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      {t("results.not-helpful")}
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                      <Copy className="h-4 w-4 mr-2" />
                      {t("results.copy")}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t("results.download")}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="sources" className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">
              {t("results.sources-description")}
            </p>

            {sources.map((source, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-slate-50 p-3 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-slate-400 mr-2" />
                    <span className="font-medium text-sm">{source.source}</span>
                  </div>
                  <div className="bg-slate-200 rounded-full px-2 py-1">
                    <span className="text-xs font-medium">
                      {t("results.relevance")}{" "}
                      {(source.relevance * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-slate-600">{source.text}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="evaluation" className="space-y-4">
            <p className="text-sm text-slate-600 mb-4">
              {t("results.evaluation-description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="text-sm font-medium text-slate-500 mb-1">
                  {t("results.metric.accuracy")}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {(evaluation.accuracy * 100).toFixed(0)}%
                  </span>
                  <div className="bg-slate-100 w-24 h-2 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${evaluation.accuracy * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="text-sm font-medium text-slate-500 mb-1">
                  {t("results.metric.relevance")}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {(evaluation.relevance * 100).toFixed(0)}%
                  </span>
                  <div className="bg-slate-100 w-24 h-2 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${evaluation.relevance * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="text-sm font-medium text-slate-500 mb-1">
                  {t("results.metric.completeness")}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {(evaluation.completeness * 100).toFixed(0)}%
                  </span>
                  <div className="bg-slate-100 w-24 h-2 rounded-full">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${evaluation.completeness * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-green-800 mb-2">
                {t("results.kg-enhancement")}
              </h4>
              <p className="text-sm text-green-700">
                {t("results.kg-enhancement-desc")}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
