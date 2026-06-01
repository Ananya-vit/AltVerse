import OpenAI from "openai";
import { NextResponse } from "next/server";

const openrouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    console.log("===== DEBUG START =====");

    console.log(
      "KEY EXISTS:",
      !!process.env.OPENROUTER_API_KEY
    );

    console.log(
      "KEY PREFIX:",
      process.env.OPENROUTER_API_KEY?.slice(0, 8)
    );

    const { prompt } = await req.json();

    console.log("PROMPT:", prompt);

    const completion =
      await openrouter.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Say hello",
          },
        ],
      });

    console.log("OPENROUTER SUCCESS");

    return NextResponse.json({
      success: true,
      response: completion.choices[0].message.content,
    });

  } catch (error: any) {
    console.error("===== OPENROUTER ERROR =====");
    console.error(error);

    return NextResponse.json(
      {
        error: error?.message || "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}