import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const NEXT_PUBLIC_OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

if (!NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY in .env file");
}

export const config = {
  openAiApiKey: NEXT_PUBLIC_OPENAI_API_KEY,
};
