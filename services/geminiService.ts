import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

export const generateTravelResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are "Travukwik AI", a friendly and expert travel consultant for the travel agency "Travukwik". 
        The agency is located at 9 Bode Thomas St, Surulere, Lagos, Nigeria.
        Your goal is to help users plan trips, suggest destinations, and provide travel advice.
        Keep responses concise, engaging, and helpful. Format important lists with markdown.
        If asked about contact details, provide the address above and email info@travukwik.com.
        Always emphasize that Travukwik makes travel quick and seamless.`,
      },
    });
    return response.text || "I couldn't generate a travel plan right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to the travel assistant.");
  }
};
