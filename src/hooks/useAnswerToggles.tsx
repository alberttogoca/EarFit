import { useEffect, useState } from 'react';
import Selectable, {
  Answer,
  getItemsWithThreeSelected,
  SelectableAnswer,
  selectThreeRandomItems,
} from 'utils/Selectable';

type HookReturnType = {
  items: SelectableAnswer[];
  updateIsSelected: (selectable: Selectable) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(answers: Answer[]): HookReturnType {
  const [items, setItems] = useState<SelectableAnswer[]>([]);

  useEffect(() => {
    if (!answers || answers.length === 0) {
      return;
    }
    const selectedAnswers = answers.map<SelectableAnswer>((s) => {
      return { ...s, isSelected: false };
    });

    const newItems = getItemsWithThreeSelected(selectedAnswers);
    setItems(newItems);
  }, [answers]);

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
      return items.map<SelectableAnswer>((item) => {
        return {
          ...item,
          isSelected: true,
        };
      });
    });
  };

  const selectThreeItems = (): void => {
    const ids = selectThreeRandomItems(items).map((i) => i.id);
    setItems((items) => {
      return items.map<SelectableAnswer>((item) => {
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
        return items.map<SelectableAnswer>((item) => {
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
