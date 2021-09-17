import { createNode } from '../../utils/createNode';

import styles from './styles.module.css';

interface ButtonProps {
  id: string;
  name: string;
  type: 'submit' | 'reset' | 'button';
  text: string;
  style: string;
}

export function Button({
  id,
  name,
  type,
  text,
  style,
}: ButtonProps): HTMLElement {
  return createNode(
    'button',
    {
      id,
      name,
      type,
      className: styles.Button,
      style,
    },
    [text],
  );
}
