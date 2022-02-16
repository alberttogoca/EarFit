import { useEffect, useState } from 'react';
import Selectable, { getRandomItemThatIsSelected } from 'utils/Selectable';

type HookReturnType = {
  answer: Selectable;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Selectable) => boolean;
};

const useAnswer = (selectables: Selectable[]): HookReturnType => {
  const [answer, setAnswer] = useState<Selectable>();

  useEffect(() => {
    const selectedItems = selectables.filter((s) => s.isSelected);

    if (!answer || !selectedItems.find((n) => n.id === answer.id)?.isSelected) {
      const newAnswer = getRandomItemThatIsSelected(selectedItems);
      setAnswer(newAnswer);
    }
  }, [answer, selectables]);

  const setNewAnswer = (): void => {
    const selectedItems = selectables.filter((s) => s.isSelected);
    const newAnswer = getRandomItemThatIsSelected(selectedItems);
    setAnswer(newAnswer);
  };

  const isCorrectAnswer = (item: Selectable): boolean => {
    const isAnswer = item.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  return { answer, setNewAnswer, isCorrectAnswer };
};

export default useAnswer;
