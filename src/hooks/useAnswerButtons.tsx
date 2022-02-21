import { useEffect, useState } from 'react';
import { Answer, SelectableAnswer, SelectableAnswerWithColor } from 'utils/Types';

import useStreak from './useStreak';

type HookReturnType = {
  answerButtons: SelectableAnswerWithColor[];
  handleAnswerButtonClick: (answerButton: SelectableAnswerWithColor) => void;
  streak: number;
};

export function useAnswerButtons(
  answerToggles: SelectableAnswer[],
  answer: Answer,
  setNewAnswer: () => void,
  play: (answer: Answer, direction?: boolean) => void,
  direction?: boolean
): HookReturnType {
  const [answerButtons, setAnswerButtons] = useState<SelectableAnswerWithColor[]>([]);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  useEffect(() => {
    if (!answerToggles || answerToggles.length < 1) {
      return;
    }
    const selectedAnswers = answerToggles.filter((s) => s.isSelected);
    const newAnswerButtons = selectedAnswers.map<SelectableAnswerWithColor>((item) => {
      return {
        ...item,
        color: 'secondary',
      };
    });
    setAnswerButtons(newAnswerButtons);
  }, [answerToggles]);

  function handleAnswerButtonClick(answerButtonSelected: SelectableAnswerWithColor): void {
    const isAnswer = answerButtonSelected.id.toUpperCase() === answer.id.toUpperCase();
    if (isAnswer) {
      setNewAnswer();
      updateAnswerButtonColor(answerButtonSelected, true);
      IncrementStreak();
      play(answer, direction);

      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);
    } else {
      updateAnswerButtonColor(answerButtonSelected, false);
      clearStreak();
    }
  }

  function updateAnswerButtonColor(answerButtonSelected: SelectableAnswerWithColor, isAnswer: boolean): void {
    const newColor = isAnswer ? 'success' : 'danger';
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<SelectableAnswerWithColor>((answerButton) => {
        return {
          ...answerButton,
          color: answerButtonSelected.id === answerButton.id ? newColor : answerButton.color,
        };
      });
    });
  }

  function clearAllAnswerButtonsColor(): void {
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<SelectableAnswerWithColor>((answerButton) => {
        return {
          ...answerButton,
          color: 'secondary',
        };
      });
    });
  }

  return { answerButtons, handleAnswerButtonClick, streak };
}

export default useAnswerButtons;
