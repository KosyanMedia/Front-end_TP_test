import { SearchFormText, SearchFormTheme } from './types';

export const LARGE_WIDTH = 1024;
export const MEDIUM_WIDTH = 768;
export const SMALL_WIDTH = 440;

export const DEFAULT_LOCALIZATION: SearchFormText = {
  headerText: 'Where does it come from? Why do we use it?',
  descriptionText:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  departInputPlaceholder: 'Depart date',
  returnInputPlaceholder: 'Return date',
  searchButtonText: 'SEARCH',
};

export const LOCALIZATION: Record<string, SearchFormText> = {
  'ru-RU': {
    headerText: 'Откуда это взялось? Почему мы это используем?',
    descriptionText:
      'Давно установлено, что читатель будет отвлекаться на текстовое содержимое страницы, глядя на ее макет.',
    departInputPlaceholder: 'Дата отъезда',
    returnInputPlaceholder: 'Дата возвращения',
    searchButtonText: 'ПОИСК',
  },
  'en-US': DEFAULT_LOCALIZATION,
};

export const DEFAULT_THEME: SearchFormTheme = {
  backgroundColor: '#4a90e2',
  color: '#ffffff',
  buttonBgColor: '#f5a623',
  buttonColor: '#ffffff',
};
