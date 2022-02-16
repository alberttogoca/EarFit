import { useEffect, useState } from 'react';
import Selectable, { selectThreeRandomItems, selectThreeRandomItems2 } from 'utils/Selectable';

type HookReturnType = {
  items: Selectable[];
  updateIsSelected: (selectable: Selectable) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(selectables: Selectable[]): HookReturnType {
  const [items, setItems] = useState<Selectable[]>([]);

  useEffect(() => {
    if (!selectables || selectables.length === 0) {
      return;
    }

    //convertir los selectables en selectables
    const newItems = selectThreeRandomItems(selectables);
    setItems(newItems);
  }, [selectables]);

  const selectAllOrThree = (): void => {
    const allSelected = items.every((option) => option.isSelected === true);
    if (allSelected) {
      selectThreeItems();
    } else {
      selectAllItems();
    }
  };

  const selectAllItems = (): void => {
    setItems((items) => {
      return items.map<Selectable>((item) => {
        return {
          ...item,
          isSelected: true,
        };
      });
    });
  };

  const selectThreeItems = (): void => {
    const ids = selectThreeRandomItems2(items).map((i) => i.id);
    setItems((items) => {
      return items.map<Selectable>((item) => {
        return {
          ...item,
          isSelected: ids.some((id) => id == item.id),
        };
      });
    });
  };

  const updateIsSelected = (selectable: Selectable): void => {
    const { id } = selectable;
    const newValue = !selectable.isSelected;
    const hasManySelectedNotes = items.filter((n) => n.isSelected).length > 1;

    if (newValue === true || hasManySelectedNotes) {
      setItems((items) => {
        return items.map<Selectable>((item) => {
          return {
            ...item,
            isSelected: item.id === id ? newValue : item.isSelected,
          };
        });
      });
    }
  };

  return { items, updateIsSelected, selectAllOrThree };
}

export default useAnswerToggles;
