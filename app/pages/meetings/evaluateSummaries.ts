import OpenAI from "openai";
import { EvalData } from "@/app/data";


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

/**
 * Evaluates summaries based on truthfulness, clarity, conciseness, and relevance.
 */
export async function evaluateSummaries(meeting: EvalData) {
  const prompt = `
You are an expert evaluator. Compare two summaries based on:
- Truthfulness (accuracy to the original text)
- Clarity (easy to understand)
- Conciseness (no unnecessary details)
- Relevance (covers important points)

Original text:
"${meeting.transcript}"

Summary 1:
"${meeting.summary1}"

Summary 2:
"${meeting.summary2}"

Provide a score (1-10) for each summary and a brief explanation of which summary is better "Overall".
`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: prompt }],
  });

  console.log(response)
  console.log(response.choices[0].message.content)

  return response.choices[0].message.content;
}
