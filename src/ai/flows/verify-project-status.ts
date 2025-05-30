
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
      const response = await fetch(input.url);
      return response.status < 400;
    } catch (error) {
      console.error(`Error checking URL ${input.url}:`, error);
      return false;
    }
  }
);

const verifyProjectStatusPrompt = ai.definePrompt({
  name: 'verifyProjectStatusPrompt',
  tools: [checkUrlStatus],
  input: {schema: VerifyProjectStatusInputSchema},
  output: {schema: VerifyProjectStatusOutputSchema},
  system: `Your task is to determine if a project URL is active.
You MUST use the 'checkUrlStatus' tool to get the status of the URL: {{{url}}}.
The 'checkUrlStatus' tool will return 'true' if the site is active (responds with HTTP status < 400) and 'false' otherwise.
After the tool provides its boolean result, you MUST populate the 'isActive' field in your output based *only* on this boolean result.
Do not add any explanatory text or conversation; provide only the structured output matching the defined schema.`,
  prompt: `Assess the status of the project at the URL: {{{url}}}`,
});

const verifyProjectStatusFlow = ai.defineFlow(
  {
    name: 'verifyProjectStatusFlow',
    inputSchema: VerifyProjectStatusInputSchema,
    outputSchema: VerifyProjectStatusOutputSchema,
  },
  async input => {
    const {output} = await verifyProjectStatusPrompt(input);
    if (!output) {
      // Handle cases where output might be null or undefined,
      // though with a well-defined output schema and a correctly functioning LLM/tool, this should be rare.
      console.error('verifyProjectStatusPrompt did not return a valid output.');
      // Fallback to a default or throw an error, depending on desired behavior.
      // For now, let's assume offline if output is missing.
      return { isActive: false };
    }
    return output;
  }
);

