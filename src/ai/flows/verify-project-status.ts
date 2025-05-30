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
  prompt: `You are a service that determines if a project is active given its URL.

  Use the checkUrlStatus tool to check if the project at the given URL is active.
  The URL is: {{{url}}}.

  Return a JSON object with the field 'isActive' set to true if the project is active, and false otherwise.
  `,
});

const verifyProjectStatusFlow = ai.defineFlow(
  {
    name: 'verifyProjectStatusFlow',
    inputSchema: VerifyProjectStatusInputSchema,
    outputSchema: VerifyProjectStatusOutputSchema,
  },
  async input => {
    const {output} = await verifyProjectStatusPrompt(input);
    return output!;
  }
);
