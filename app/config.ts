import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY in .env file");
}

export const config = {
  openAiApiKey: OPENAI_API_KEY,
};
