"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Search, Settings } from "lucide-react";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/language-context";

export default function RagForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [useKnowledgeGraph, setUseKnowledgeGraph] = useState(true);
  const [retrievalMethod, setRetrievalMethod] = useState("hybrid");
  const [modelType, setModelType] = useState("large");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Query Processed", {
        description: "Your RAG query has been successfully processed.",
      });

      // Here you would normally update the UI with results
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error", {
        description: "Failed to process query. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("rag.form.title")}</CardTitle>
        <CardDescription>{t("rag.form.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="query">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="query">
                <Search className="h-4 w-4 mr-2" />
                {t("rag.form.query-tab")}
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                {t("rag.form.settings-tab")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="query" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="query-input">{t("rag.form.query-label")}</Label>
                <Textarea
                  id="query-input"
                  placeholder={t("rag.form.query-placeholder")}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="kg-toggle"
                  checked={useKnowledgeGraph}
                  onCheckedChange={setUseKnowledgeGraph}
                />
                <Label htmlFor="kg-toggle" className="font-medium">
                  {t("rag.form.use-kg")}
                </Label>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2">
                  {t("rag.form.examples")}
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• {t("rag.form.example1")} </li>
                  <li>• {t("rag.form.example2")}</li>
                  <li>• {t("rag.form.example3")}</li>
                  <li>• {t("rag.form.example4")}</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="retrieval-method">
                    {t("rag.form.retrieval-method")}
                  </Label>
                  <Select
                    value={retrievalMethod}
                    onValueChange={setRetrievalMethod}
                  >
                    <SelectTrigger id="retrieval-method">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semantic">
                        {t("rag.form.method.semantic")}
                      </SelectItem>
                      <SelectItem value="kg-based">
                        {t("rag.form.method.kg-based")}
                      </SelectItem>
                      <SelectItem value="hybrid">
                        {t("rag.form.method.hybrid")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model-type">{t("rag.form.model-type")}</Label>
                  <Select value={modelType} onValueChange={setModelType}>
                    <SelectTrigger id="model-type">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">
                        {t("rag.form.model.small")}
                      </SelectItem>
                      <SelectItem value="medium">
                        {" "}
                        {t("rag.form.model.medium")}
                      </SelectItem>
                      <SelectItem value="large">
                        {t("rag.form.model.large")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="temperature">
                    {t("rag.form.temperature")}
                  </Label>
                  <span className="text-sm text-slate-500">0.7</span>
                </div>
                <Input
                  id="temperature"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  defaultValue="0.7"
                />
                <p className="text-xs text-slate-500">
                  {t("rag.form.temperature-desc")}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-params">
                  {t("rag.form.custom-params")}
                </Label>
                <Textarea
                  id="custom-params"
                  placeholder={t("rag.form.custom-placeholder")}
                  className="h-20"
                />
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" disabled={loading}>
          {t("rag.form.reset")}
        </Button>
        <Button onClick={handleSubmit} disabled={loading || !query}>
          {loading ? (
            <>
              <span className="animate-spin mr-2">⟳</span>{" "}
              {t("rag.form.generate")}
            </>
          ) : (
            <>
              <BrainCircuit className="h-4 w-4 mr-2" />{" "}
              {t("rag.form.processing")}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
