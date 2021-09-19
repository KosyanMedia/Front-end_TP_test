import { createNode } from '../../utils/createNode';

import styles from './styles.module.css';

interface ButtonProps {
  id: string;
  name: string;
  type: 'submit' | 'reset' | 'button';
  text: string;
  backgroundColor: string;
  color: string;
}

export function Button({
  id,
  name,
  type,
  text,
  backgroundColor,
  color,
}: ButtonProps): HTMLElement {
  const buttonNode = createNode(
    'button',
    {
      id,
      name,
      type,
      className: styles.Button,
      style: `background-color: ${backgroundColor}; color: ${color}`,
    },
    [text],
  );

  // workaround for ie
  buttonNode.style.backgroundColor = backgroundColor;
  buttonNode.style.color = color;

  return buttonNode;
}
