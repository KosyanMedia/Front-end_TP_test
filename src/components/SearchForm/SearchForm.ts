import { SearchFormText, SearchFormTheme } from '../../types';
import { createNode } from '../../utils/createNode';
import { Button } from '../Button';
import { DateInput } from '../DateInput';

import styles from './styles.module.css';

interface SearchFormProps {
  text: SearchFormText;
  theme: SearchFormTheme;
}

export function SearchForm({
  text: {
    headerText,
    descriptionText,
    departInputPlaceholder,
    returnInputPlaceholder,
    searchButtonText,
  },
  theme: { backgroundColor, color, buttonBgColor, buttonColor },
}: SearchFormProps): HTMLElement {
  const searchFormHeader: HTMLElement = createNode(
    'header',
    { className: styles.SearchFormHeader },
    [headerText],
  );

  const searchFormDescription: HTMLElement = createNode(
    'p',
    { className: styles.SearchFormDescription },
    [descriptionText],
  );

  const departDateInputContainer: HTMLElement = createNode(
    'div',
    { className: styles.InputContainer },
    [
      DateInput({
        id: 'departDate',
        name: 'departDate',
        label: 'Depart date',
        placeholder: departInputPlaceholder,
      }),
    ],
  );

  const returnDateInputContainer: HTMLElement = createNode(
    'div',
    { className: styles.InputContainer },
    [
      DateInput({
        id: 'returnDate',
        name: 'returnDate',
        label: 'Return date',
        placeholder: returnInputPlaceholder,
      }),
    ],
  );

  const searchFormButton: HTMLElement = Button({
    id: 'searchButton',
    name: 'searchButton',
    type: 'submit',
    text: searchButtonText,
    style: `background-color: ${buttonBgColor}; color: ${buttonColor}`,
  });

  const searchFormButtonContainer: HTMLElement = createNode(
    'div',
    { className: styles.ButtonContainer },
    [searchFormButton],
  );

  return createNode(
    'form',
    {
      id: 'searchForm',
      className: styles.SearchForm,
      style: `background-color: ${backgroundColor}; color: ${color}`,
    },
    [
      searchFormHeader,
      searchFormDescription,
      departDateInputContainer,
      returnDateInputContainer,
      searchFormButtonContainer,
    ],
  );
}

export { styles as searchFormStyles };
