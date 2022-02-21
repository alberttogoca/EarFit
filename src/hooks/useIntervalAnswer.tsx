import { useEffect, useState } from 'react';
import { calcIntervalToPlay } from 'services/intervalService';
import { Answer, getRandomItemThatIsSelected, SelectableAnswer } from 'utils/Types';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Answer) => boolean;
};

const useAnswer = (answerTogglesSelected: SelectableAnswer[]): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>();

  useEffect(() => {
    if (!answer || !answerTogglesSelected.find((n) => n.id === answer.id)?.isSelected) {
      if (answerTogglesSelected.length > 0) {
        const intervalAnswer = getRandomItemThatIsSelected(answerTogglesSelected);
        const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id) };
        setAnswer(newAnswer);
      }
    }
  }, [answer, answerTogglesSelected]);

  const setNewAnswer = (): void => {
    if (answerTogglesSelected.length > 0) {
      const intervalAnswer = getRandomItemThatIsSelected(answerTogglesSelected);
      const newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id) };
      setAnswer(newAnswer);
    }
  };

  const isCorrectAnswer = (item: Answer): boolean => {
    const isAnswer = item.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  return { answer, setNewAnswer, isCorrectAnswer };
};

export default useAnswer;
