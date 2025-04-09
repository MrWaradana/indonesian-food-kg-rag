import { NextRequest, NextResponse } from "next/server";

// In a real application, this would connect to a database,
// vector store, and language models for RAG functionality

interface RagResponse {
  response: string;
  sources: {
    text: string;
    relevance: number;
    source: string;
  }[];
  evaluation: {
    accuracy: number;
    relevance: number;
    completeness: number;
  };
}

// Sample responses for different Indonesian food queries
const sampleResponses: Record<string, RagResponse> = {
  "rendang": {
    response: "Rendang is a rich and flavorful Indonesian dish originating from the Minangkabau people of West Sumatra. The key ingredients in traditional Rendang include:\n\n1. Meat (typically beef)\n2. Coconut milk\n3. A spice paste made of:\n   - Galangal\n   - Ginger\n   - Turmeric\n   - Lemongrass\n   - Garlic\n   - Shallots\n   - Chilies\n4. Kaffir lime leaves\n5. Tamarind\n\nRegional variations exist across Indonesia:\n\n- West Sumatra (original): Uses more chilies, has a drier consistency, and is cooked longer until the color darkens to almost black.\n- Java: Often sweeter with added sweet soy sauce (kecap manis) and less spicy.\n- North Sumatra: Includes andaliman (Sichuan pepper relative) for a numbing sensation.\n- East Indonesia: May incorporate local spices like kenari nuts or use buffalo meat instead of beef.\n- Aceh: Features extra turmeric and sometimes adds jackfruit.\n\nThe cooking technique also varies, with traditional Minangkabau Rendang being cooked for 4-8 hours until the liquid evaporates completely (\"dry rendang\"), while some regions prefer a more liquid consistency (\"wet rendang\" or \"kalio\").",
    sources: [
      {
        text: "Rendang is a spicy meat dish which originated from the Minangkabau region in West Sumatra, Indonesia. It has spread across Indonesian cuisine to the cuisines of neighboring Southeast Asian countries. The key ingredients include beef, coconut milk, and a paste made from ginger, galangal, turmeric, lemongrass, garlic, shallots, and chili peppers.",
        relevance: 0.92,
        source: "Indonesian Culinary Encyclopedia"
      },
      {
        text: "West Sumatran rendang is characterized by its very dark color, dry texture, and intense flavor from long hours of cooking. Javanese rendang tends to be sweeter with the addition of kecap manis (sweet soy sauce) and isn't cooked as long, resulting in a wetter consistency sometimes called 'kalio'.",
        relevance: 0.87,
        source: "Regional Variations in Indonesian Cooking"
      },
      {
        text: "In North Sumatra, particularly among Batak communities, rendang is sometimes prepared with andaliman, a local relative of Sichuan pepper that produces a numbing sensation. Eastern Indonesian variants may incorporate local ingredients like kenari nuts.",
        relevance: 0.79,
        source: "Spices of the Archipelago"
      },
    ],
    evaluation: {
      accuracy: 0.95,
      relevance: 0.92,
      completeness: 0.89,
    }
  },
  "soto": {
    response: "Soto is a traditional Indonesian soup dish made with a flavorful broth, meat, and various aromatic herbs and spices. It's considered a national dish with numerous regional variations across the Indonesian archipelago.\n\nKey ingredients in Soto include:\n\n1. Broth base (typically chicken, beef, or sometimes fish)\n2. Turmeric (giving the characteristic yellow color)\n3. Aromatic spices such as:\n   - Lemongrass\n   - Galangal\n   - Ginger\n   - Garlic\n   - Shallots\n   - Candlenut\n4. Fresh herbs like kaffir lime leaves and bay leaves\n5. Complementary ingredients such as rice, noodles, bean sprouts, boiled eggs, and fried shallots\n\nMajor regional variations include:\n\n- Soto Ayam (Central/East Java): Clear chicken broth with turmeric, served with glass noodles or rice vermicelli\n- Soto Betawi (Jakarta): Rich coconut milk-based beef soup with potato and tomato\n- Soto Makassar/Coto (South Sulawesi): Beef offal soup with peanuts and typically served with ketupat rice cakes\n- Soto Banjar (South Kalimantan): Yellow chicken soup with unique spice mix including cinnamon and nutmeg\n- Soto Medan (North Sumatra): Coconut milk-based with chicken or beef, served with potatoes and often spicier\n\nTraditionally, Soto is served with condiments like lime wedges, chili paste (sambal), sweet soy sauce (kecap manis), and emping crackers, allowing diners to adjust the flavor to their preferences.",
    sources: [
      {
        text: "Soto is a traditional Indonesian soup mainly composed of broth, meat, and vegetables. Each region in Indonesia has its own variation of soto, usually named after the locale it comes from such as soto Madura from Madura and soto Betawi from Betawi/Jakarta.",
        relevance: 0.95,
        source: "Indonesian Soup Traditions"
      },
      {
        text: "The defining ingredient that makes soto distinctively yellow is turmeric. Other aromatics include lemongrass, galangal, kaffir lime leaves, and bay leaves which create the soup's characteristic fragrance.",
        relevance: 0.88,
        source: "Encyclopedia of Indonesian Spices"
      },
      {
        text: "Soto Banjar from South Kalimantan includes spices not commonly found in other soto variations, such as cinnamon, star anise, and nutmeg, reflecting the historical spice trade in the region.",
        relevance: 0.82,
        source: "Regional Indonesian Cuisine"
      },
    ],
    evaluation: {
      accuracy: 0.94,
      relevance: 0.95,
      completeness: 0.92,
    }
  },
  "nasi goreng": {
    response: "Nasi Goreng is Indonesia's iconic fried rice dish and one of its national dishes. It's a versatile culinary staple found across the archipelago from street food stalls to high-end restaurants.\n\nThe basic ingredients of Nasi Goreng include:\n\n1. Pre-cooked rice (typically day-old rice)\n2. Sweet soy sauce (kecap manis) - giving the characteristic brown color and sweet taste\n3. Aromatics including:\n   - Shallots\n   - Garlic\n   - Chili peppers\n4. Protein sources such as egg, chicken, shrimp, or beef\n5. Vegetables (commonly green onions, but can include many variations)\n\nWhat sets Indonesian Nasi Goreng apart from other Asian fried rice dishes is the use of kecap manis (sweet soy sauce) and the intense umami from ingredients like terasi (shrimp paste) in many versions.\n\nRegional variations include:\n\n- Nasi Goreng Kampung: A rustic village-style version using simple ingredients like anchovies and eggs\n- Nasi Goreng Seafood: Made with various seafood ingredients like shrimp, squid, and fish\n- Nasi Goreng Kambing: Prepared with goat meat and extra spices\n- Nasi Goreng Petai: Featuring bitter beans (petai) for a distinctive flavor and aroma\n- Nasi Goreng Aceh: Spicier version from Aceh region using a complex spice mix\n\nNasi Goreng is typically served with accompaniments such as fried egg (telur ceplok), prawn crackers (krupuk), fresh cucumber, and tomato slices. It's often topped with fried shallots (bawang goreng) and served with sambal (chili paste) on the side for extra heat.",
    sources: [
      {
        text: "Nasi goreng, literally meaning 'fried rice' in Indonesian, is considered Indonesia's national dish. Its main characteristic is the use of kecap manis (sweet soy sauce) that gives the dish its distinctive brown color and caramelized flavor.",
        relevance: 0.94,
        source: "Indonesian Staple Foods"
      },
      {
        text: "While there are endless variations of nasi goreng, traditional versions often include terasi (shrimp paste) which provides a deep umami flavor that distinguishes Indonesian fried rice from versions found in other Asian countries.",
        relevance: 0.89,
        source: "Flavor Profiles of Southeast Asian Cuisine"
      },
      {
        text: "Nasi goreng is commonly served for breakfast in Indonesian households, often using leftover rice from the previous day's dinner. The dish is traditionally accompanied by a fried egg, slices of cucumber and tomato, and krupuk (crackers).",
        relevance: 0.85,
        source: "Indonesian Culinary Practices"
      },
    ],
    evaluation: {
      accuracy: 0.96,
      relevance: 0.94,
      completeness: 0.91,
    }
  }
};

// Default response for queries not explicitly covered
const defaultResponse: RagResponse = {
  response: "Indonesian cuisine is diverse and varies by region, reflecting the country's cultural diversity. Key characteristics include the extensive use of aromatic herbs and spices, coconut milk, and a wide variety of preparation techniques. Indonesian food is known for its complex flavor profiles, balancing sweet, sour, spicy, and savory elements.\n\nSome famous Indonesian dishes include Rendang (slow-cooked spiced meat), Nasi Goreng (fried rice), Soto (aromatic soup), Satay (grilled skewered meat), and Gado-gado (vegetable salad with peanut sauce).\n\nDifferent regions have their own specialties:\n- Sumatra: Known for spicy dishes and the use of andaliman pepper\n- Java: Features sweeter dishes with palm sugar and peanut sauces\n- Bali: Characterized by basa genep spice mixes and ceremonial dishes\n- Sulawesi: Famous for seafood and grilled meats\n- Eastern Indonesia: Influenced by Melanesian cooking techniques with more emphasis on tubers\n\nTraditional cooking methods include slow-cooking, grilling over charcoal, steaming in banana leaves, and stir-frying. Spice pastes (bumbu) form the foundation of many Indonesian dishes, with ingredients ground together to create complex flavor bases.",
  sources: [
    {
      text: "Indonesian cuisine is one of the most vibrant and colorful cuisines in the world, full of intense flavor. It is diverse, in part because Indonesia is composed of approximately 6,000 populated islands of the total 17,508 in the world's largest archipelago.",
      relevance: 0.90,
      source: "Culinary Atlas of Indonesia"
    },
    {
      text: "Many Indonesian dishes have a complex flavor profile that combines the basic five tastes: sweet, sour, salty, bitter, and umami. This is achieved through the use of various herbs and spices, many of which have been influenced by Indian, Middle Eastern, Chinese and European cuisines.",
      relevance: 0.87,
      source: "Flavor Profiles of Southeast Asian Cuisine"
    },
    {
      text: "Regional Indonesian cuisines can be divided along the major islands: Sumatra, Java, Kalimantan, Sulawesi, and Papua, each with their distinct cooking methods, primary ingredients, and cultural influences.",
      relevance: 0.85,
      source: "Regional Indonesian Cooking Traditions"
    },
  ],
  evaluation: {
    accuracy: 0.92,
    relevance: 0.88,
    completeness: 0.90,
  }
};

// Simple function to find the most relevant response based on the query
function findBestResponse(query: string): RagResponse {
  // Convert query to lowercase for comparison
  const queryLower = query.toLowerCase();
  
  // Check for keyword matches
  for (const [keyword, response] of Object.entries(sampleResponses)) {
    if (queryLower.includes(keyword)) {
      return response;
    }
  }
  
  // Return default response if no matches
  return defaultResponse;
}

// Function to simulate knowledge graph enhancement
function enhanceWithKnowledgeGraph(response: RagResponse, useKG: boolean): RagResponse {
  if (!useKG) {
    // Reduce the evaluation scores for non-KG responses
    return {
      ...response,
      evaluation: {
        accuracy: Math.max(0.7, response.evaluation.accuracy - 0.15),
        relevance: Math.max(0.7, response.evaluation.relevance - 0.15),
        completeness: Math.max(0.7, response.evaluation.completeness - 0.15),
      }
    };
  }
  
  // Return the full response with knowledge graph enhancement
  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract required parameters
    const { 
      query, 
      useKnowledgeGraph = true, 
      retrievalMethod = "hybrid", 
      modelType = "large",
      temperature = 0.7 
    } = body;
    
    // Validate input
    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }
    
    // Find best matching response
    const baseResponse = findBestResponse(query);
    
    // Enhance with knowledge graph if enabled
    const enhancedResponse = enhanceWithKnowledgeGraph(baseResponse, useKnowledgeGraph);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return the RAG response
    return NextResponse.json({
      success: true,
      query,
      ...enhancedResponse,
      metadata: {
        useKnowledgeGraph,
        retrievalMethod,
        modelType,
        temperature
      }
    });
    
  } catch (error) {
    console.error("Error processing RAG request:", error);
    return NextResponse.json(
      { error: "Failed to process RAG request" },
      { status: 500 }
    );
  }
}