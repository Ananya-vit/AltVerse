import OpenAI from "openai";
import { NextResponse } from "next/server";

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
    console.log(
        "OPENROUTER  KEY EXISTS:",
        !!process.env.OPENROUTER_API_KEY
    );
  try {
    const { prompt } = await req.json();

    const completion =
      await openrouter.chat.completions.create({
        model: "google/gemini-3.1-flash-lite",
        max_tokens: 1500,
        temperature: 0.9,

        messages: [
          {
            role: "user",
           content: `Generate an alternate reality for "${prompt}".

Return ONLY valid JSON.

{
  "overview": "string",

  "timeline": [
    {
      "year": "string",
      "event": "string"
    }
  ],

  "headlines": [
    {
      "source": "string",
      "headline": "string"
    }
  ],

  "impacts": [
    {
      "title": "string",
      "description": "string"
    }
  ],

  "figures": [
    {
      "name": "string",
      "role": "string",
      "description": "string"
    }
  ],
  "analysis": {
  "plausibility": 0,
  "globalImpact": 0,
  "divergence": 0
}
          
}`, },
    ],
  });

    const responseText =
      completion.choices[0].message.content ?? "{}";

    const parsed = JSON.parse(responseText);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("OPENROUTER ERROR:", error);

    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );
  }
}