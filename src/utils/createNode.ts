export function createNode(
  tagName: string,
  attributes?: Record<string, string | object>,
  children?: (string | HTMLElement)[]
): HTMLElement {
  const node: HTMLElement = document.createElement(tagName);

  const attributesKeys = Object.keys(attributes);

  for (let i = 0; i < attributesKeys.length; i++) {
    const attribute = attributesKeys[i];

    // @ts-ignore
    node[attribute] = attributes[attribute];
  }

  if (children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (typeof child === 'string') {
        const textNode = document.createTextNode(child);
        node.appendChild(textNode);
      }

      if (typeof child === 'object') {
        node.appendChild(child);
      }
    }
  }

  return node;
}
