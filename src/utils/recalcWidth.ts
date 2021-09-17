import { searchFormStyles } from '../components/SearchForm';
import { LARGE_WIDTH, MEDIUM_WIDTH, SMALL_WIDTH } from '../constants';

export function recalcWidth(node: HTMLElement): void {
  const nodeWidth = node.clientWidth;

  if (nodeWidth < SMALL_WIDTH) {
    node.classList.remove(searchFormStyles.Small);
    node.classList.remove(searchFormStyles.Medium);

    node.classList.add(searchFormStyles.ExtraSmall);

    return;
  }

  if (nodeWidth < MEDIUM_WIDTH) {
    node.classList.remove(searchFormStyles.ExtraSmall);
    node.classList.remove(searchFormStyles.Medium);

    node.classList.add(searchFormStyles.Small);

    return;
  }

  if (nodeWidth < LARGE_WIDTH) {
    node.classList.remove(searchFormStyles.ExtraSmall);
    node.classList.remove(searchFormStyles.Small);

    node.classList.add(searchFormStyles.Medium);

    return;
  }

  node.classList.remove(searchFormStyles.ExtraSmall);
  node.classList.remove(searchFormStyles.Small);
  node.classList.remove(searchFormStyles.Medium);
}
