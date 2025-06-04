// src/lib/i18n.ts
import 'server-only'; // Ensures this runs on server only

// Define a type for the dictionary structure based on one of the JSON files
// This helps with type safety when accessing translations.
// You can generate this type from your JSON or define it manually.
// For simplicity, we'll use `any` for now, but a specific type is recommended.
export type Dictionary = Record<string, any>; 
// Example of a more specific type if you had a flat structure or wanted to type nested:
// export type Dictionary = {
//   [key: string]: string | Dictionary;
// };


const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const load = dictionaries[locale] || dictionaries.en; // Fallback to English if locale is not found
  try {
    return await load();
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error);
    // Fallback to English dictionary in case of an error
    return await dictionaries.en(); 
  }
};
