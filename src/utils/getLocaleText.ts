import { DEFAULT_LOCALIZATION } from '../constants';
import { SearchFormText } from '../types';

export function getLocaleText(
  language: string,
  localization: Record<string, SearchFormText>,
): SearchFormText {
  if (language in localization) {
    return localization[language];
  }

  return DEFAULT_LOCALIZATION;
}
