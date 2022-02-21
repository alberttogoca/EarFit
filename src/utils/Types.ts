import { getRandomItem } from './arrayUtils';

type VariantColor = 'success' | 'secondary' | 'danger';

export type Answer = {
  id: string;
  values: string[];
  displayName: string;
};

export type IsSelectable = {
  isSelected: boolean;
};

export type WithColor = {
  color: VariantColor;
};

export type SelectableAnswer = Answer & IsSelectable;

export type SelectableAnswerWithColor = SelectableAnswer & WithColor;

export function updateIsSelectedItem<T extends SelectableAnswer>(items: T[], id: string, newIsSelected: boolean): T[] {
  const hasManySelectedItems = items.filter((s) => s.isSelected).length > 1;
  if (newIsSelected === true || hasManySelectedItems) {
    const newItems = items.map((item) => {
      return {
        ...item,
        isSelected: item.id === id ? newIsSelected : item.isSelected,
      };
    });
    return newItems;
  }
  return items;
}

function updateIsSelectedAllItems<T extends IsSelectable>(items: T[], value: boolean): T[] {
  return items.map((i) => {
    return { ...i, isSelected: value };
  });
}

export function getItemsWithThreeSelected<T extends IsSelectable>(items: T[]): T[] {
  const newItems = updateIsSelectedAllItems(items, false);

  for (let i = 0; i < 3; i++) {
    const item = getRandomItem(newItems.filter((x) => !x.isSelected));
    item.isSelected = true;
  }
  return newItems;
}

export function selectThreeRandomItems<T extends IsSelectable>(items: T[]): T[] {
  const newItems = updateIsSelectedAllItems(items, false);

  for (let i = 0; i < 3; i++) {
    const item = getRandomItem(newItems.filter((x) => !x.isSelected));
    item.isSelected = true;
  }
  return newItems.filter((t) => t.isSelected == true);
}

export function selectAllOrThreeItems<T extends IsSelectable>(items: T[]): T[] {
  const allSelected = items.every((option) => option.isSelected === true);
  return allSelected ? getItemsWithThreeSelected(items) : updateIsSelectedAllItems(items, true);
}

export function getRandomItemThatIsSelected<T extends IsSelectable>(items: T[]): T {
  const selectedItems = items.filter((s) => s.isSelected);
  const randomItemIsSelected = getRandomItem(selectedItems);
  return randomItemIsSelected;
}

export function setAllColorSecondary<T extends WithColor>(items: T[]): T[] {
  const itemsSecondary = items.map<T>((actualButton) => {
    return {
      ...actualButton,
      color: 'secondary',
    };
  });
  return itemsSecondary;
}

export function setItemColorSuccesOrDanger<T extends SelectableAnswerWithColor>(
  items: T[],
  id: string,
  isAnswer: boolean
): T[] {
  const itemsWithUpdateColor = items.map<T>((item) => {
    if (id === item.id) {
      return {
        ...item,
        color: isAnswer ? 'success' : 'danger',
      };
    }
    return { ...item };
  });
  return itemsWithUpdateColor;
}

//TODO: Dejar solo uno (useIntervals)
export function reverseItemValues<T extends Answer>(item: T): T {
  return { ...item, values: item.values.reverse() };
}
//TODO: Dejar solo uno (useScales)
export function reverseAllItemValues<T extends Answer>(items: T[]): T[] {
  const newItems = items.map((item) => {
    return {
      ...item,
      values: item.values.reverse(),
    };
  });
  return newItems;
}
