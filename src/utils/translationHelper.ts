import { IntlShape } from 'react-intl';

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

export function isLanguageRightToLeft(languageCode: string) {
  return languageCode === "ar" || languageCode === "fa";
}

export function translateMessageId(id: string, intl: IntlShape) {
  if (!id) {
    return "";
  }

  if(!intl || !intl.formatMessage) {
    return "";
  }

  const translation = intl.formatMessage({
    id,
    defaultMessage: getDefaultMessage(id),
  });

  if(translation === id) {
    return "";
  }

  return translation;
}

export const supportedLanguages = Object.keys(languageMetadata);
