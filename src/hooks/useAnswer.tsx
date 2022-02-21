import { useEffect, useState } from 'react';
import { Answer, getRandomItemThatIsSelected, SelectableAnswer } from 'utils/Types';

type HookReturnType = {
  answer: Answer;
  setNewAnswer: () => void;
  isCorrectAnswer: (item: Answer) => boolean;
};

const useAnswer = (answerToggles: SelectableAnswer[]): HookReturnType => {
  const [answer, setAnswer] = useState<Answer>();

  useEffect(() => {
    const selectedAnswers = answerToggles.filter((s) => s.isSelected);
    if (!answer || !selectedAnswers.find((n) => n.id === answer.id)?.isSelected) {
      const newAnswer = getRandomItemThatIsSelected(selectedAnswers);
      setAnswer(newAnswer);
    }
  }, [answer, answerToggles]);

  const setNewAnswer = (): void => {
    const selectedAnswers = answerToggles.filter((s) => s.isSelected);
    const newAnswer = getRandomItemThatIsSelected(selectedAnswers);
    setAnswer(newAnswer);
  };

  const isCorrectAnswer = (item: Answer): boolean => {
    const isAnswer = item.id.toUpperCase() === answer.id.toUpperCase();
    return isAnswer;
  };

  return { answer, setNewAnswer, isCorrectAnswer };
};

export default useAnswer;
