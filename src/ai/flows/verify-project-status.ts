
// VerifyProjectStatus story implementation.
'use server';
/**
 * @fileOverview This file contains a Genkit flow for verifying the status of project URLs.
 *
 * - verifyProjectStatus - A function that checks if a given URL is active.
 * - VerifyProjectStatusInput - The input type for the verifyProjectStatus function.
 * - VerifyProjectStatusOutput - The return type for the verifyProjectStatus function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyProjectStatusInputSchema = z.object({
  url: z.string().url().describe('The URL of the project to verify.'),
});
export type VerifyProjectStatusInput = z.infer<typeof VerifyProjectStatusInputSchema>;

const VerifyProjectStatusOutputSchema = z.object({
  isActive: z.boolean().describe('Whether the project URL is currently active.'),
});
export type VerifyProjectStatusOutput = z.infer<typeof VerifyProjectStatusOutputSchema>;

export async function verifyProjectStatus(input: VerifyProjectStatusInput): Promise<VerifyProjectStatusOutput> {
  return verifyProjectStatusFlow(input);
}

const checkUrlStatus = ai.defineTool(
  {
    name: 'checkUrlStatus',
    description: 'Checks if a given URL is active by attempting to fetch it. Returns true if the URL responds with a status code less than 400, and false otherwise.',
    inputSchema: z.object({
      url: z.string().url().describe('The URL to check.'),
    }),
    outputSchema: z.boolean(),
  },
  async (input) => {
    try {
      console.log(`[checkUrlStatus] Attempting to fetch: ${input.url}`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

      const response = await fetch(input.url, {
        method: 'GET', // Explicitly set method
        redirect: 'follow', // Explicitly follow redirects
        signal: controller.signal 
      });
      clearTimeout(timeoutId); // Clear timeout if fetch completes

      console.log(`[checkUrlStatus] Response for ${input.url}: status=${response.status}, ok=${response.ok}, redirected=${response.redirected}`);
      return response.status < 400;
    } catch (error: any) {
      // clearTimeout(timeoutId); // Ensure timeout is cleared on error too
      if (error.name === 'AbortError') {
        console.error(`[checkUrlStatus] Fetch timed out for URL ${input.url}`);
      } else {
        console.error(`[checkUrlStatus] Error fetching URL ${input.url}: Message: ${error.message}`, error.cause ? `Cause: ${JSON.stringify(error.cause)}` : '', `Type: ${error.name}`);
      }
      return false;
    }
  }
);

const verifyProjectStatusPrompt = ai.definePrompt({
  name: 'verifyProjectStatusPrompt',
  tools: [checkUrlStatus],
  input: {schema: VerifyProjectStatusInputSchema},
  output: {schema: VerifyProjectStatusOutputSchema},
  system: `You are an AI assistant that checks if a URL is active.
You have one tool available: 'checkUrlStatus'. This tool takes a URL and returns 'true' if the URL is active, and 'false' otherwise.
Given the input URL: {{{url}}}
1. Call the 'checkUrlStatus' tool with this URL.
2. Take the boolean result from the 'checkUrlStatus' tool.
3. Construct a JSON object with a single key "isActive" set to this boolean result.
Your entire response MUST be ONLY this JSON object. For example: { "isActive": true } or { "isActive": false }. Do not add any other text, conversation, or explanations.`,
  prompt: `{{{url}}}`, // Main prompt is now just the URL, system prompt handles the logic.
});

const verifyProjectStatusFlow = ai.defineFlow(
  {
    name: 'verifyProjectStatusFlow',
    inputSchema: VerifyProjectStatusInputSchema,
    outputSchema: VerifyProjectStatusOutputSchema,
  },
  async input => {
    try {
      const {output} = await verifyProjectStatusPrompt(input);
      if (!output) {
        console.error('[verifyProjectStatusFlow] verifyProjectStatusPrompt did not return a valid output. Input was:', input);
        return { isActive: false }; // Fallback if LLM fails to construct output
      }
      return output;
    } catch (error) {
      console.error(`[verifyProjectStatusFlow] Error calling verifyProjectStatusPrompt for URL ${input.url}:`, error);
      // Return a default "offline" status if the LLM call fails (e.g., 503 error)
      return { isActive: false };
    }
  }
);
