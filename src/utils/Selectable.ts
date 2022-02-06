import { getRandomItem } from './arrayUtils';

type VariantColor = 'success' | 'secondary' | 'danger';

export default interface Selectable {
  id: string;
  values: string[];
  isSelected: boolean;
  displayName: string;
  color: VariantColor;
}

export function selectAllItems<T extends Selectable>(items: T[], value: boolean): T[] {
  return items.map((i) => {
    return { ...i, isSelected: value };
  });
}

export function selectThreeOptions<T extends Selectable>(items: T[]): T[] {
  const newItems = selectAllItems(items, false);
  console.log(newItems);

  for (let i = 0; i < 3; i++) {
    const item = getRandomItem(newItems.filter((x) => !x.isSelected));
    item.isSelected = true;
  }
  return newItems;
}

export function toggleAllOptions<T extends Selectable>(items: T[]): T[] {
  const allSelected = items.every((option) => option.isSelected === true);

  return allSelected ? selectThreeOptions(items) : selectAllItems(items, true);
}

export function updateIsSelected<T extends Selectable>(items: T[], displayName: string, newIsSelected: boolean): T[] {
  const hasManySelectedScales = items.filter((s) => s.isSelected).length > 1;
  if (newIsSelected === true || hasManySelectedScales) {
    const newItems = items.map((item) => {
      return {
        ...item,
        isSelected: item.displayName === displayName ? newIsSelected : item.isSelected,
      };
    });
    return newItems;
  }
}

export function getRandomItemThatIsSelected<T extends Selectable>(items: T[]): T {
  const selectedItems = items.filter((s) => s.isSelected);
  const randomItemIsSelected = getRandomItem(selectedItems);
  return randomItemIsSelected;
}

export function reverseValues<T extends Selectable>(items: T[]): T[] {
  const newItems = items.map((item) => {
    return {
      ...item,
      values: item.values.reverse(),
    };
  });
  return newItems;
}
