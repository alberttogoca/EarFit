import { getRandomItem } from './arrayUtils';

type VariantColor = 'success' | 'secondary' | 'danger';

export default interface Selectable {
  id: string;
  values: string[];
  isSelected: boolean;
  displayName: string;
  color: VariantColor;
}

export function updateIsSelectedItem<T extends Selectable>(items: T[], id: string, newIsSelected: boolean): T[] {
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

function updateIsSelectedAllItems<T extends Selectable>(items: T[], value: boolean): T[] {
  return items.map((i) => {
    return { ...i, isSelected: value };
  });
}

export function selectThreeRandomItems<T extends Selectable>(items: T[]): T[] {
  const newItems = updateIsSelectedAllItems(items, false);

  for (let i = 0; i < 3; i++) {
    const item = getRandomItem(newItems.filter((x) => !x.isSelected));
    item.isSelected = true;
  }
  return newItems;
}

export function selectAllOrThreeItems<T extends Selectable>(items: T[]): T[] {
  const allSelected = items.every((option) => option.isSelected === true);
  return allSelected ? selectThreeRandomItems(items) : updateIsSelectedAllItems(items, true);
}

export function getRandomItemThatIsSelected<T extends Selectable>(items: T[]): T {
  const selectedItems = items.filter((s) => s.isSelected);
  const randomItemIsSelected = getRandomItem(selectedItems);
  return randomItemIsSelected;
}

export function setAllColorSecondary<T extends Selectable>(items: T[]): T[] {
  const itemsSecondary = items.map<T>((actualButton) => {
    return {
      ...actualButton,
      color: 'secondary',
    };
  });
  return itemsSecondary;
}

export function setItemColorSuccesOrDanger<T extends Selectable>(items: T[], id: string, isAnswer: boolean): T[] {
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
export function reverseItemValues<T extends Selectable>(item: T): T {
  return { ...item, values: item.values.reverse() };
}
//TODO: Dejar solo uno (useScales)
export function reverseAllItemValues<T extends Selectable>(items: T[]): T[] {
  const newItems = items.map((item) => {
    return {
      ...item,
      values: item.values.reverse(),
    };
  });
  return newItems;
}
