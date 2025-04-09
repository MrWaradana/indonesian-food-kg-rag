import { KnowledgeGraph, RagResponse } from "./types";

/**
 * This file contains utility functions for RAG optimization with knowledge graphs.
 * In a real application, these would interact with a vector database, language models, and graph database.
 */

// Extract entities from a query string
export function extractEntitiesFromQuery(query: string): string[] {
  // In a real application, this would use NLP techniques to extract entities
  // For now, we'll just provide a simple mock implementation

  const commonIndonesianFoodEntities = [
    "rendang",
    "nasi goreng",
    "soto",
    "satay",
    "gado-gado",
    "tempeh",
    "sambal",
    "beef",
    "chicken",
    "rice",
    "coconut milk",
    "lemongrass",
    "turmeric",
    "Java",
    "Sumatra",
    "Bali",
    "Sulawesi",
    "Padang",
    "Jakarta",
  ];

  return commonIndonesianFoodEntities.filter((entity) =>
    query.toLowerCase().includes(entity.toLowerCase())
  );
}

// Get relevant nodes from the knowledge graph based on query entities
export function getRelevantNodes(
  graph: KnowledgeGraph,
  entities: string[]
): string[] {
  const relevantNodeIds: string[] = [];

  // Simple implementation to find nodes with matching labels
  graph.nodes.forEach((node) => {
    if (
      entities.some((entity) =>
        node.label.toLowerCase().includes(entity.toLowerCase())
      )
    ) {
      relevantNodeIds.push(node.id);
    }
  });

  return relevantNodeIds;
}

// Enhance query with knowledge graph information
export function enhanceQueryWithKG(
  query: string,
  graph: KnowledgeGraph
): string {
  const entities = extractEntitiesFromQuery(query);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const relevantNodeIds = getRelevantNodes(graph, entities);

  // In a real application, this would add context from the knowledge graph
  // to improve retrieval. For this example, we just return the original query.

  return query;
}

// Compare RAG with and without knowledge graph
export function compareRagApproaches(
  withKG: RagResponse,
  withoutKG: RagResponse
): Record<string, number> {
  // Calculate improvement percentages
  const accuracyImprovement =
    ((withKG.evaluation.accuracy - withoutKG.evaluation.accuracy) /
      withoutKG.evaluation.accuracy) *
    100;

  const relevanceImprovement =
    ((withKG.evaluation.relevance - withoutKG.evaluation.relevance) /
      withoutKG.evaluation.relevance) *
    100;

  const completenessImprovement =
    ((withKG.evaluation.completeness - withoutKG.evaluation.completeness) /
      withoutKG.evaluation.completeness) *
    100;

  return {
    accuracyImprovement,
    relevanceImprovement,
    completenessImprovement,
    overallImprovement:
      (accuracyImprovement + relevanceImprovement + completenessImprovement) /
      3,
  };
}

// Calculate source relevance to query
export function calculateSourceRelevance(
  source: string,
  query: string
): number {
  // In a real application, this would use semantic similarity
  // For now, we'll use a simple word overlap metric

  const sourceWords = new Set(source.toLowerCase().split(/\s+/));
  const queryWords = new Set(query.toLowerCase().split(/\s+/));

  let overlap = 0;
  for (const word of queryWords) {
    if (sourceWords.has(word) && word.length > 3) {
      // Ignore short words
      overlap++;
    }
  }

  return Math.min(overlap / queryWords.size, 1);
}

// Generate explanation for knowledge graph contribution
export function explainKnowledgeGraphContribution(
  query: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  graph: KnowledgeGraph
): string {
  const entities = extractEntitiesFromQuery(query);

  if (entities.length === 0) {
    return "The knowledge graph would provide general context about Indonesian cuisine.";
  }

  // For this example, we'll generate a simple explanation
  return `Using the knowledge graph improved the response quality by providing structured relationships between ${entities.join(
    ", "
  )} and other Indonesian food entities, resulting in a more comprehensive and accurate answer.`;
}
