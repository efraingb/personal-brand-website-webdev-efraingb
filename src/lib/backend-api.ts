/**
 * @fileOverview API Service for external backend synchronization.
 * Connects specifically with the SER platform (Efecto SER).
 */

export interface ContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  message?: string;
  source: string;
  sourceDomain: string;
  metadata?: Record<string, any>;
}

/**
 * Registers a contact lead in the SER centralized backend.
 * Uses a resilient approach with AbortController for timeouts.
 */
export async function registerContactInSER(payload: ContactPayload): Promise<boolean> {
  const SER_ENDPOINT = 'https://zusivqy.efraingb.org/api/external/contact';
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

  try {
    const response = await fetch(SER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.warn('SER synchronization skipped or failed:', error);
    return false; // Silently fail to not interrupt UX
  }
}
