import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simulate API call to the knowledge graph endpoint
export async function createKnowledgeGraph(formData: FormData) {
  try {
    const response = await fetch("/api/knowledge-graph", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to create knowledge graph");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating knowledge graph:", error);
    throw error;
  }
}

// Simulate API call to the RAG endpoint
export async function generateRagResponse(query: string, options: {
  useKnowledgeGraph?: boolean;
  retrievalMethod?: string;
  modelType?: string;
  temperature?: number;
} = {}) {
  try {
    const response = await fetch("/api/rag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        ...options,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate RAG response");
    }

    return await response.json();
  } catch (error) {
    console.error("Error generating RAG response:", error);
    throw error;
  }
}

// Helper to format percentage
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(0)}%`;
}

// Helper to format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// Get entity color based on type
export function getEntityColor(type: string): string {
  const colorMap: Record<string, string> = {
    "Dish": "bg-blue-100 text-blue-800",
    "Ingredient": "bg-green-100 text-green-800",
    "Spice": "bg-amber-100 text-amber-800",
    "Region": "bg-purple-100 text-purple-800",
    "Province": "bg-indigo-100 text-indigo-800",
    "CookingMethod": "bg-red-100 text-red-800"
  };

  return colorMap[type] || "bg-slate-100 text-slate-800";
}

// Helper to truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}