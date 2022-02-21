import { useEffect, useState } from 'react';
import { Answer, getRandomItemThatIsSelected, SelectableAnswer } from 'utils/Types';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Answer) => boolean;
};

const useAnswer = (selectables: SelectableAnswer[]): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>();

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

  const isCorrectAnswer = (item: Answer): boolean => {
    const isAnswer = item.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  return { answer, setNewAnswer, isCorrectAnswer };
};

export default useAnswer;
