import { KnowledgeGraph, Entity, Relationship } from "./types";

/**
 * This file contains utility functions for working with the knowledge graph.
 * In a real application, these would interact with a graph database or API.
 */

// Get all entity types present in the knowledge graph
export function getEntityTypes(graph: KnowledgeGraph): string[] {
  const types = new Set<string>();
  
  graph.nodes.forEach(node => {
    types.add(node.type);
  });
  
  return Array.from(types);
}

// Filter nodes by type
export function filterNodesByType(graph: KnowledgeGraph, type: string): Entity[] {
  if (type === 'all') return graph.nodes;
  
  return graph.nodes.filter(node => node.type === type);
}

// Get relationships for a specific node
export function getNodeRelationships(graph: KnowledgeGraph, nodeId: string): Relationship[] {
  return graph.edges.filter(edge => 
    edge.source === nodeId || edge.target === nodeId
  );
}

// Get connected nodes for a specific node
export function getConnectedNodes(graph: KnowledgeGraph, nodeId: string): Entity[] {
  const relationships = getNodeRelationships(graph, nodeId);
  const connectedNodeIds = new Set<string>();
  
  relationships.forEach(rel => {
    if (rel.source === nodeId) {
      connectedNodeIds.add(rel.target);
    } else {
      connectedNodeIds.add(rel.source);
    }
  });
  
  return graph.nodes.filter(node => connectedNodeIds.has(node.id));
}

// Find the shortest path between two nodes
export function findShortestPath(graph: KnowledgeGraph, sourceId: string, targetId: string): Entity[] {
  // Implementation of breadth-first search for shortest path
  const visited = new Set<string>();
  const queue: Array<{ id: string; path: Entity[] }> = [];
  
  // Get source node
  const sourceNode = graph.nodes.find(node => node.id === sourceId);
  if (!sourceNode) return [];
  
  queue.push({ id: sourceId, path: [sourceNode] });
  visited.add(sourceId);
  
  while (queue.length > 0) {
    const { id, path } = queue.shift()!;
    
    if (id === targetId) {
      return path;
    }
    
    const relationships = getNodeRelationships(graph, id);
    
    for (const rel of relationships) {
      const nextId = rel.source === id ? rel.target : rel.source;
      
      if (!visited.has(nextId)) {
        visited.add(nextId);
        const nextNode = graph.nodes.find(node => node.id === nextId);
        if (nextNode) {
          queue.push({ id: nextId, path: [...path, nextNode] });
        }
      }
    }
  }
  
  return []; // No path found
}

// Get subgraph related to a specific entity
export function getRelatedSubgraph(graph: KnowledgeGraph, nodeId: string, depth: number = 1): KnowledgeGraph {
  const nodes = new Set<string>();
  const edges = new Set<string>();
  
  // Add the starting node
  nodes.add(nodeId);
  
  // BFS to find related nodes up to specified depth
  let currentDepth = 0;
  let currentFrontier = [nodeId];
  
  while (currentDepth < depth && currentFrontier.length > 0) {
    const nextFrontier: string[] = [];
    
    for (const id of currentFrontier) {
      const relationships = getNodeRelationships(graph, id);
      
      for (const rel of relationships) {
        edges.add(`${rel.source}-${rel.target}-${rel.label}`);
        
        const nextId = rel.source === id ? rel.target : rel.source;
        if (!nodes.has(nextId)) {
          nodes.add(nextId);
          nextFrontier.push(nextId);
        }
      }
    }
    
    currentFrontier = nextFrontier;
    currentDepth++;
  }
  
  // Build subgraph
  return {
    nodes: graph.nodes.filter(node => nodes.has(node.id)),
    edges: graph.edges.filter(edge => 
      edges.has(`${edge.source}-${edge.target}-${edge.label}`)
    )
  };
}

// Calculate basic metrics for the knowledge graph
export function calculateGraphMetrics(graph: KnowledgeGraph) {
  const nodeCount = graph.nodes.length;
  const edgeCount = graph.edges.length;
  
  // Calculate entity type distribution
  const typeDistribution: Record<string, number> = {};
  graph.nodes.forEach(node => {
    typeDistribution[node.type] = (typeDistribution[node.type] || 0) + 1;
  });
  
  // Calculate relationship type distribution
  const relationshipDistribution: Record<string, number> = {};
  graph.edges.forEach(edge => {
    relationshipDistribution[edge.label] = (relationshipDistribution[edge.label] || 0) + 1;
  });
  
  // Calculate average connections per node
  const connectionsPerNode = edgeCount * 2 / nodeCount;
  
  return {
    nodeCount,
    edgeCount,
    typeDistribution,
    relationshipDistribution,
    connectionsPerNode
  };
}