"use client";

import RagForm from "@/components/rag-form";
import ResultDisplay from "@/components/result-display";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function RagPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link
          href="/dashboard"
          className="mr-4 text-slate-500 hover:text-slate-800"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{t("rag.title")}</h1>
          <p className="text-slate-600">{t("rag.description")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <RagForm />
        </div>
        <div>
          <ResultDisplay />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">{t("rag.title")}</h2>
        <div className="bg-slate-50 p-6 rounded-lg">
          <p className="text-slate-600 mb-4">
            Retrieval-Augmented Generation (RAG) combines information retrieval
            with text generation to create more accurate and informative
            responses. This approach enhances language models by providing them
            with relevant context retrieved from a knowledge base.
          </p>
          <p className="text-slate-600 mb-4">
            Knowledge graph integration further improves RAG by:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-600 mb-4">
            <li>
              <span className="font-medium">Structured Retrieval:</span> Using
              the graph{`'`}s structure to find more relevant information than
              simple keyword matching.
            </li>
            <li>
              <span className="font-medium">Relationship Context:</span>{" "}
              Incorporating knowledge about how entities are related, providing
              richer context for generation.
            </li>
            <li>
              <span className="font-medium">Enhanced Reasoning:</span> Enabling
              better reasoning by following relationship paths in the knowledge
              graph.
            </li>
            <li>
              <span className="font-medium">Cultural Context:</span> Capturing
              cultural nuances and regional variations in Indonesian cuisine.
            </li>
          </ul>
          <p className="text-slate-600">
            For your master thesis, this tool allows you to compare traditional
            RAG with knowledge graph-enhanced RAG, demonstrating the
            improvements in accuracy, relevance, and completeness of responses
            about Indonesian cuisine.
          </p>
        </div>
      </div>
    </div>
  );
}
