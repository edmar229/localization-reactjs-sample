import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export function useLanguage() {
  const value = useContext(LanguageContext);
  return value;
}
