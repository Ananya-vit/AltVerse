import OpenAI from "openai";
import { NextResponse } from "next/server";

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function GET() {
  try {
    const completion = await openrouter.chat.completions.create({
      model: "google/gemini-3.1-flash-lite",

      max_tokens: 1500,

      temperature: 0.9,

      messages: [
        {
          role: "user",
          content: `
Generate an alternate reality for:

"India Colonized Britain"

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use code fences.
Do NOT explain anything.

Format:

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
  ]
}
`,
        },
      ],
    });

    const responseText =
      completion.choices[0].message.content ?? "{}";

    console.log("AI RESPONSE:");
    console.log(responseText);

    return NextResponse.json({
      result: responseText,
    });
  } catch (error) {
    console.error("OPENROUTER ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        error: "Generation failed",
      },
      {
        status: 500,
      }
    );
  }
}