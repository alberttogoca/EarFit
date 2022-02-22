import { useEffect, useState } from 'react';
import { calcInterval } from 'services/intervalService';
import { Answer, SelectableAnswer, VariantExercise } from 'types';
import { getRandomItem } from 'utils/arrayUtils';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (possibleAnswer: Answer) => boolean;
};

const useAnswer = (variant: VariantExercise, answerToggles: SelectableAnswer[]): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>(undefined);

  useEffect(() => {
    if (answerToggles.length < 1 || (answer && answerToggles.find((n) => n.id === answer.id)?.isSelected)) {
      return;
    }
    const selectedItems = answerToggles.filter((s) => s.isSelected);
    const randomAnswer = getRandomItem(selectedItems);
    switch (variant) {
      case 'notes':
        setAnswer(randomAnswer);
        break;
      case 'scales':
        setAnswer(randomAnswer);
        break;
      case 'intervals':
        setAnswer(calcInterval(randomAnswer));
    }
  }, [answer, answerToggles, variant]);

  const setNewAnswer = (): void => {
    const selectedItems = answerToggles.filter((s) => s.isSelected);
    const randomAnswer = getRandomItem(selectedItems);
    switch (variant) {
      case 'notes':
        setAnswer(randomAnswer);
        break;
      case 'scales':
        setAnswer(randomAnswer);
        break;
      case 'intervals':
        setAnswer(calcInterval(randomAnswer));
    }
  };

  const isCorrectAnswer = (possibleAnswer: Answer): boolean => {
    const isAnswer = possibleAnswer.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  return { answer, setNewAnswer, isCorrectAnswer };
};

export default useAnswer;
