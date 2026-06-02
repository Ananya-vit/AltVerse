import OpenAI from "openai";
import { NextResponse } from "next/server";

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const completion = await openrouter.chat.completions.create({
      model: "google/gemini-2.5-flash",
      max_tokens: 800,
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
}`,
        },
      ],
    });

    const responseText =
      completion.choices[0].message.content ?? "{}";

    console.log("===== RAW RESPONSE =====");
    console.log(responseText);

    try {
      const cleaned = responseText
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/```$/i, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      return NextResponse.json(parsed);
    } catch (parseError) {
      console.error("===== JSON PARSE FAILED =====");
      console.error(parseError);

      return NextResponse.json(
        {
          error: "JSON_PARSE_FAILED",
          raw: responseText,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("===== OPENROUTER ERROR =====");
    console.error(error);

    return NextResponse.json(
      {
        error: error?.message || "Generation failed",
        details: error,
      },
      { status: 500 }
    );
  }
}