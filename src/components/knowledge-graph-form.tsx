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
import { Upload, FileText, Database } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/language-context";

export default function KnowledgeGraphForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("text");

  // Form state
  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [extractionMethod, setExtractionMethod] = useState("automatic");
  const [graphType, setGraphType] = useState("comprehensive");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(t("kg.form.title"), {
        description: "Your knowledge graph has been successfully generated.",
      });

      // Here you would normally redirect to the results page or update the UI

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error", {
        description: "Failed to create knowledge graph. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("kg.form.title")}</CardTitle>
        <CardDescription>{t("kg.form.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Tabs
            defaultValue="text"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="text">
                <FileText className="h-4 w-4 mr-2" />
                {t("kg.form.text-tab")}
              </TabsTrigger>
              <TabsTrigger value="file">
                <Upload className="h-4 w-4 mr-2" />
                {t("kg.form.file-tab")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text-input">{t("kg.form.text-label")}</Label>
                <Textarea
                  id="text-input"
                  placeholder={t("kg.form.text-placeholder")}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>
            </TabsContent>

            <TabsContent value="file" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file-upload">{t("kg.form.file-label")}</Label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".txt,.csv,.json,.xlsx,.docx"
                  />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <Upload className="h-10 w-10 text-slate-400 mb-2" />
                      <p className="text-sm font-medium mb-1">
                        {file ? file.name : t("kg.form.file-description")}
                      </p>
                      <p className="text-xs text-slate-500">
                        {t("kg.form.file-formats")}
                      </p>
                    </div>
                  </Label>
                  {file && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => setFile(null)}
                    >
                      {t("kg.form.remove-file")}
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <Label htmlFor="extraction-method">
                {t("kg.form.extraction-method")}
              </Label>
              <Select
                value={extractionMethod}
                onValueChange={setExtractionMethod}
              >
                <SelectTrigger id="extraction-method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automatic">
                    {t("kg.form.method.automatic")}
                  </SelectItem>
                  <SelectItem value="rule-based">
                    {t("kg.form.method.rule-based")}
                  </SelectItem>
                  <SelectItem value="hybrid">
                    {t("kg.form.method.hybrid")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="graph-type">{t("kg.form.graph-type")}</Label>
              <Select value={graphType} onValueChange={setGraphType}>
                <SelectTrigger id="graph-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comprehensive">
                    {t("kg.form.type.comprehensive")}
                  </SelectItem>
                  <SelectItem value="ingredient-focused">
                    {t("kg.form.type.ingredient")}
                  </SelectItem>
                  <SelectItem value="recipe-focused">
                    {t("kg.form.type.recipe")}
                  </SelectItem>
                  <SelectItem value="regional">
                    {t("kg.form.type.regional")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <Label htmlFor="advanced-options">
              {t("kg.form.advanced-options")}
            </Label>
            <Textarea
              id="advanced-options"
              placeholder={t("kg.form.advanced-placeholder")}
              className="h-20"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" disabled={loading}>
          {t("kg.form.reset")}
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={
            loading ||
            (activeTab === "text" && !textInput) ||
            (activeTab === "file" && !file)
          }
        >
          {loading ? (
            <>
              <span className="animate-spin mr-2">⟳</span>{" "}
              {t("kg.form.processing")}
            </>
          ) : (
            <>
              <Database className="h-4 w-4 mr-2" /> {t("kg.form.generate")}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
