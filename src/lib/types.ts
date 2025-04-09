// Knowledge Graph Types
export interface Entity {
    id: string;
    label: string;
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    properties?: Record<string, any>;
  }
  
  export interface Relationship {
    source: string;
    target: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    properties?: Record<string, any>;
  }
  
  export interface KnowledgeGraph {
    nodes: Entity[];
    edges: Relationship[];
  }
  
  export interface KnowledgeGraphResponse {
    success: boolean;
    knowledgeGraph: KnowledgeGraph;
    stats: {
      entityCount: number;
      relationshipCount: number;
      extractionMethod: string;
      graphType: string;
    };
  }
  
  // RAG Types
  export interface Source {
    text: string;
    relevance: number;
    source: string;
  }
  
  export interface Evaluation {
    accuracy: number;
    relevance: number;
    completeness: number;
  }
  
  export interface RagResponse {
    success: boolean;
    query: string;
    response: string;
    sources: Source[];
    evaluation: Evaluation;
    metadata: {
      useKnowledgeGraph: boolean;
      retrievalMethod: string;
      modelType: string;
      temperature: number;
    };
  }
  
  // Form Types
  export interface KnowledgeGraphFormData {
    text?: string;
    file?: File;
    extractionMethod: string;
    graphType: string;
    advancedOptions?: string;
  }
  
  export interface RagFormData {
    query: string;
    useKnowledgeGraph: boolean;
    retrievalMethod: string;
    modelType: string;
    temperature: number;
    customParams?: string;
  }