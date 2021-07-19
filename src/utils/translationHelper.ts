import defaultStrings from '../localization/languages/en.json';
import languageMetadata from "../localization/translations.json";

type jsonObject = {
  [key: string]: string;
}

const defaultLanguageData: jsonObject = defaultStrings;

//Returns the en.json value
export function getDefaultMessage(key: string) {
  const defaultMessage = defaultLanguageData[key];
  return defaultMessage || ""
}

export const supportedLanguages = Object.keys(languageMetadata);
