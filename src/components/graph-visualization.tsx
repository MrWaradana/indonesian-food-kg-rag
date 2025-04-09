"use client";

import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Download, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Sample data structure for the knowledge graph
interface Node {
  id: string;
  label: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: Record<string, any>;
}

interface Edge {
  source: string;
  target: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: Record<string, any>;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

// This would normally come from your API/backend
const sampleGraphData: GraphData = {
  nodes: [
    { id: "n1", label: "Rendang", type: "Dish" },
    { id: "n2", label: "Beef", type: "Ingredient" },
    { id: "n3", label: "Coconut Milk", type: "Ingredient" },
    { id: "n4", label: "Ginger", type: "Spice" },
    { id: "n5", label: "Turmeric", type: "Spice" },
    { id: "n6", label: "Lemongrass", type: "Spice" },
    { id: "n7", label: "Galangal", type: "Spice" },
    { id: "n8", label: "Padang", type: "Region" },
    { id: "n9", label: "West Sumatra", type: "Province" },
    { id: "n10", label: "Slow-cooked", type: "CookingMethod" },
  ],
  edges: [
    { source: "n1", target: "n2", label: "contains" },
    { source: "n1", target: "n3", label: "contains" },
    { source: "n1", target: "n4", label: "contains" },
    { source: "n1", target: "n5", label: "contains" },
    { source: "n1", target: "n6", label: "contains" },
    { source: "n1", target: "n7", label: "contains" },
    { source: "n1", target: "n8", label: "originates_from" },
    { source: "n8", target: "n9", label: "located_in" },
    { source: "n1", target: "n10", label: "prepared_using" },
  ],
};

export default function GraphVisualization({ data = sampleGraphData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [filterType, setFilterType] = useState("all");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // In a real application, you would use a library like D3.js, Cytoscape.js, or react-force-graph
  // to render the actual graph visualization. For now, we'll just show a placeholder.

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleDownload = () => {
    // In a real app, this would generate and download an image of the graph
    alert("Downloading graph visualization...");
  };

  const filterNodesByType = (nodes: Node[], type: string) => {
    if (type === "all") return nodes;
    return nodes.filter((node) => node.type === type);
  };

  const getNodeTypes = (nodes: Node[]) => {
    const types = new Set(nodes.map((node) => node.type));
    return Array.from(types);
  };

  const nodeTypes = getNodeTypes(data.nodes);
  const filteredNodes = filterNodesByType(data.nodes, filterType);

  // This would filter edges based on filtered nodes in a real implementation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredEdges = data.edges;

  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Knowledge Graph Visualization</CardTitle>
            <CardDescription>
              Visual representation of Indonesian food knowledge graph with{" "}
              {data.nodes.length} nodes and {data.edges.length} relationships.
            </CardDescription>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm">{Math.round(zoom * 100)}%</span>
            <Button variant="outline" size="icon" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-slate-500" />
            <Label htmlFor="node-type-filter">Filter by:</Label>
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger id="node-type-filter" className="w-40">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {nodeTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="graph">
          <TabsList className="mb-4">
            <TabsTrigger value="graph">Graph View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>

          <TabsContent value="graph">
            <div
              ref={containerRef}
              className="border rounded-lg bg-slate-50 flex items-center justify-center"
              style={{
                height: "500px",
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
            >
              {/* Placeholder for actual graph visualization */}
              <div className="text-center p-8">
                <p className="text-slate-400 mb-4">
                  This is where the actual graph visualization would be rendered
                  using a library like D3.js or Cytoscape.js
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  {filteredNodes.slice(0, 6).map((node) => (
                    <div
                      key={node.id}
                      className={`p-3 rounded-lg text-sm font-medium cursor-pointer ${
                        node.type === "Dish"
                          ? "bg-blue-100 text-blue-800"
                          : node.type === "Ingredient"
                          ? "bg-green-100 text-green-800"
                          : node.type === "Spice"
                          ? "bg-amber-100 text-amber-800"
                          : node.type === "Region"
                          ? "bg-purple-100 text-purple-800"
                          : node.type === "Province"
                          ? "bg-indigo-100 text-indigo-800"
                          : node.type === "CookingMethod"
                          ? "bg-red-100 text-red-800"
                          : "bg-slate-100 text-slate-800"
                      }`}
                      onClick={() => setSelectedNode(node)}
                    >
                      {node.label}
                    </div>
                  ))}
                </div>
                {filteredNodes.length > 6 && (
                  <p className="text-slate-400 mt-4">
                    ...and {filteredNodes.length - 6} more nodes
                  </p>
                )}
              </div>
            </div>

            {selectedNode && (
              <div className="mt-4 p-4 border rounded-lg bg-white">
                <h4 className="text-sm font-bold mb-2">
                  Selected: {selectedNode.label}
                </h4>
                <p className="text-sm text-slate-600 mb-1">
                  Type: {selectedNode.type}
                </p>
                <p className="text-sm text-slate-600">
                  Connections:{" "}
                  {
                    data.edges.filter(
                      (edge) =>
                        edge.source === selectedNode.id ||
                        edge.target === selectedNode.id
                    ).length
                  }
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="table">
            <div
              className="border rounded-lg overflow-auto"
              style={{ maxHeight: "500px" }}
            >
              <table className="w-full">
                <thead className="bg-slate-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium text-slate-500">
                      ID
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-slate-500">
                      Label
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-slate-500">
                      Type
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-slate-500">
                      Connections
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNodes.map((node) => (
                    <tr
                      key={node.id}
                      className="border-t hover:bg-slate-50 cursor-pointer"
                      onClick={() => setSelectedNode(node)}
                    >
                      <td className="p-2 text-sm">{node.id}</td>
                      <td className="p-2 text-sm font-medium">{node.label}</td>
                      <td className="p-2 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            node.type === "Dish"
                              ? "bg-blue-100 text-blue-800"
                              : node.type === "Ingredient"
                              ? "bg-green-100 text-green-800"
                              : node.type === "Spice"
                              ? "bg-amber-100 text-amber-800"
                              : node.type === "Region"
                              ? "bg-purple-100 text-purple-800"
                              : node.type === "Province"
                              ? "bg-indigo-100 text-indigo-800"
                              : node.type === "CookingMethod"
                              ? "bg-red-100 text-red-800"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {node.type}
                        </span>
                      </td>
                      <td className="p-2 text-sm">
                        {
                          data.edges.filter(
                            (edge) =>
                              edge.source === node.id || edge.target === node.id
                          ).length
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
