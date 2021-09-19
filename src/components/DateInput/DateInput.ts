import { createNode } from '../../utils/createNode';
import calendarIcon from './assets/calendar.svg';

import styles from './styles.module.css';

interface DateInputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
}

export function DateInput({
  id,
  name,
  label,
  placeholder,
}: DateInputProps): HTMLElement {
  const departDatelabel: HTMLElement = createNode(
    'label',
    {
      for: id,
      className: styles.VisuallyHidden,
    },
    [label],
  );

  const departDateInput: HTMLElement = createNode('input', {
    id,
    name,
    type: 'text',
    className: styles.DateInput,
    style: `background-image: url(${calendarIcon});`,
    placeholder,
  });

  // workaround for ie
  departDateInput.style.backgroundImage = `url(${calendarIcon});`;

  return createNode('div', { className: styles.DateInputWrapper }, [
    departDatelabel,
    departDateInput,
  ]);
}
