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
  play: (answer: Answer) => void
): HookReturnType {
  const [answerButtons, setAnswerButtons] = useState<SelectableAnswerWithColor[]>([]);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  useEffect(() => {
    if (!answerToggles || answerToggles.length === 0) {
      return;
    }

    const newOptions = answerToggles
      .filter((n) => n.isSelected)
      .map<SelectableAnswerWithColor>((item) => {
        return {
          ...item,
          color: 'secondary',
        };
      });

    setAnswerButtons(newOptions);
  }, [answerToggles]);

  function handleAnswerButtonClick(selectedOption: SelectableAnswerWithColor): void {
    const isAnswer = selectedOption.id.toUpperCase() === answer.id.toUpperCase();
    if (isAnswer) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      play(answer);

      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
    }
  }

  function updateAnswerButtonColor(answerButton: SelectableAnswerWithColor, isAnswer: boolean): void {
    const newColor = isAnswer ? 'success' : 'danger';
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<SelectableAnswerWithColor>((option) => {
        return {
          ...option,
          color: answerButton.id === option.id ? newColor : option.color,
        };
      });
    });
  }

  function clearAllAnswerButtonsColor(): void {
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<SelectableAnswerWithColor>((option) => {
        return {
          ...option,
          color: 'secondary',
        };
      });
    });
  }

  return { answerButtons, handleAnswerButtonClick, streak };
}

export default useAnswerButtons;
