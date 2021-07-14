import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";

import English from '../localization/languages/en.json';

type LanguageContextType = {
  locale: string;
  changeLanguage: (argument: string) => void;
}

type LanguageContextPrividerProps = {
  children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider(props: LanguageContextPrividerProps) {
  const [locale, setLocale] = useState(navigator.language.toLowerCase());
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    const storageLanguage = localStorage.getItem('languageCode');
    if(!storageLanguage) {
      changeLanguage(locale);
    } else {
      changeLanguage(storageLanguage);
    }
  }, [locale]);

  async function changeLanguage(languageCode: string) {
    const selectedLanguageObject = await import(`../localization/languages/${languageCode}.json`);
    setLocale(languageCode);
    setMessages(selectedLanguageObject);
  }

  return(
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}
