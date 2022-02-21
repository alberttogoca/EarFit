import { useEffect, useState } from 'react';
import { calcInterval } from 'services/intervalService';
import { Answer, getRandomItemThatIsSelected, SelectableAnswer } from 'utils/Types';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Answer) => boolean;
};

type VariantAnswer = 'notes' | 'interval' | 'scales';

const useAnswer = (answerToggles: SelectableAnswer[], variant?: VariantAnswer): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>(undefined);

  useEffect(() => {
    if (answerToggles.length > 0 && (!answer || !answerToggles.find((n) => n.id === answer.id)?.isSelected)) {
      const randomAnswer = getRandomItemThatIsSelected(answerToggles);
      const newAnswer = variant === 'interval' ? calcInterval(randomAnswer) : randomAnswer;
      setAnswer(newAnswer);
    }
  }, [answer, answerToggles, variant]);

  const setNewAnswer = (): void => {
    const randomAnswer = getRandomItemThatIsSelected(answerToggles);
    const newAnswer = variant === 'interval' ? calcInterval(randomAnswer) : randomAnswer;
    setAnswer(newAnswer);
  };

  const isCorrectAnswer = (item: Answer): boolean => {
    const isAnswer = item.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  return { answer, setNewAnswer, isCorrectAnswer };
};

export default useAnswer;
