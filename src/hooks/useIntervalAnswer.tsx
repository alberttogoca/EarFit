import { useEffect, useState } from 'react';
import { calcIntervalToPlay } from 'services/intervalService';
import { Answer, getRandomItemThatIsSelected, reverseItemValues, SelectableAnswer } from 'utils/Types';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Answer) => boolean;
  changeDirection: () => void;
};

const useAnswer = (answerTogglesSelected: SelectableAnswer[]): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>();
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    if (!answer || !answerTogglesSelected.find((n) => n.id === answer.id)?.isSelected) {
      if (answerTogglesSelected.length > 0) {
        const intervalAnswer = getRandomItemThatIsSelected(answerTogglesSelected);
        const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
        setAnswer(newAnswer);
      }
    }
  }, [answer, answerTogglesSelected, reverse]);

  const setNewAnswer = (): void => {
    if (answerTogglesSelected.length > 0) {
      const intervalAnswer = getRandomItemThatIsSelected(answerTogglesSelected);
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
