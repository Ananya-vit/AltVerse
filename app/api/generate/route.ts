import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.9,
      max_completion_tokens: 2000,

      messages: [
        {
          role: "system",
          content:
            "Return ONLY valid JSON. No markdown. No explanations. No ```json blocks.",
        },
        {
          role: "user",
          content: `Generate an alternate reality for "${prompt}".

Return JSON in exactly this format:

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
}

Requirements:
- 1 overview paragraph
- 5 timeline events
- 4 headlines
- 4 impacts
- 4 figures
- analysis scores from 0-100
- return ONLY JSON`,
        },
      ],
    });

    const responseText =
      completion.choices[0]?.message?.content ?? "{}";

    console.log("===== GROQ RESPONSE =====");
    console.log(responseText);

    const cleaned = responseText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return NextResponse.json(parsed);

  } catch (error: any) {
    console.error("===== GROQ ERROR =====");
    console.error(error);

    return NextResponse.json(
      {
        error: error?.message || "Generation failed",
      },
      { status: 500 }
    );
  }
}