import { useEffect, useState } from 'react';
import { Answer, getItemsWithThreeSelected, SelectableAnswer, selectThreeRandomItems } from 'utils/Types';

type HookReturnType = {
  answerToggles: SelectableAnswer[];
  updateIsSelected: (selectable: SelectableAnswer) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(answers: Answer[]): HookReturnType {
  const [answerToggles, setItems] = useState<SelectableAnswer[]>([]);

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
    const allSelected = answerToggles.every((option) => option.isSelected === true);
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
    const ids = selectThreeRandomItems(answerToggles).map((i) => i.id);
    setItems((items) => {
      return items.map<SelectableAnswer>((item) => {
        return {
          ...item,
          isSelected: ids.some((id) => id == item.id),
        };
      });
    });
  };

  const updateIsSelected = (selectable: SelectableAnswer): void => {
    const { id } = selectable;
    const newValue = !selectable.isSelected;
    const hasManySelectedNotes = answerToggles.filter((n) => n.isSelected).length > 1;

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

  return { answerToggles, updateIsSelected, selectAllOrThree };
}

export default useAnswerToggles;
