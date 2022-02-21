import { useEffect, useState } from 'react';
import { calcIntervalToPlay } from 'services/intervalService';
import { Answer, getRandomItemThatIsSelected, reverseItemValues, SelectableAnswer } from 'utils/Selectable';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Answer) => boolean;
  changeDirection: () => void;
};

const useAnswer = (selectables: SelectableAnswer[]): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>();
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    if (!answer || !selectables.find((n) => n.id === answer.id)?.isSelected) {
      if (selectables.length > 0) {
        const intervalAnswer = getRandomItemThatIsSelected(selectables);
        const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
        setAnswer(newAnswer);
      }
    }
  }, [answer, selectables, reverse]);

  const setNewAnswer = (): void => {
    if (selectables.length > 0) {
      const intervalAnswer = getRandomItemThatIsSelected(selectables);
      const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
      setAnswer(newAnswer);
    }
  };

  const isCorrectAnswer = (item: Answer): boolean => {
    const isAnswer = item.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  //TODO: Extract
  const changeDirection = (): void => {
    setReverse(!reverse);
    setAnswer(reverseItemValues(answer));
  };

  return { answer, setNewAnswer, isCorrectAnswer, changeDirection };
};

export default useAnswer;
