import { SearchForm } from './components/SearchForm';
import { DEFAULT_THEME, LOCALIZATION } from './constants';
import { SearchFormText, SearchFormTheme } from './types';
import { getLocaleText } from './utils/getLocaleText';
import { recalcWidth } from './utils/recalcWidth';

interface SearchFormOptions {
  text?: Partial<SearchFormText>;
  theme?: Partial<SearchFormTheme>;
}

export function initSearchForm(
  containerId: string,
  options?: SearchFormOptions,
): void {
  const formText: SearchFormText = getLocaleText(
    navigator.language,
    LOCALIZATION,
  );

  const mergedText: SearchFormText = {
    ...formText,
    ...(options?.text && options.text),
  };

  const mergedTheme = {
    ...DEFAULT_THEME,
    ...(options?.theme && options.theme),
  };

  const searchForm: HTMLElement = SearchForm({
    text: mergedText,
    theme: mergedTheme,
  });

  searchForm.addEventListener('submit', function (event: Event) {
    event.preventDefault();
  });

  document.getElementById(containerId).appendChild(searchForm);

  recalcWidth(searchForm);

  window.addEventListener('resize', function () {
    recalcWidth(searchForm);
  });
}
