import { useEffect, useState } from 'react';
import Selectable from 'utils/Selectable';

import useStreak from './useStreak';

type HookReturnType = {
  answerButtons: Selectable[];
  handleAnswerButtonClick: (selectedOption: Selectable) => boolean;
  streak: number;
  updateAnswerButtonColor: (answerButton: Selectable, isAnswer: boolean) => void;
  clearAllAnswerButtonsColor: () => void;
};

export function useAnswerButtons(
  selectables: Selectable[],
  answer: Selectable,
  setNewAnswer: () => void,
  playNote: (answer: Selectable) => void
): HookReturnType {
  const [answerButtons, setAnswerButtons] = useState<Selectable[]>([]);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  useEffect(() => {
    const newOptions = selectables
      .filter((n) => n.isSelected)
      .map<Selectable>((item) => {
        return {
          ...item,
          color: 'secondary',
        };
      });

    setAnswerButtons(newOptions);
  }, [selectables]);

  function handleAnswerButtonClick(selectedOption: Selectable): boolean {
    if (selectedOption.id.toUpperCase() === answer.id.toUpperCase()) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playNote(answer);

      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);

      return true;
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  function updateAnswerButtonColor(answerButton: Selectable, isAnswer: boolean): void {
    const newOptions = answerButtons.map<Selectable>((option) => {
      if (answerButton.displayName === option.displayName) {
        return {
          ...option,
          color: isAnswer ? 'success' : 'danger',
        };
      }
      return { ...option };
    });

    setAnswerButtons(newOptions);
  }

  function clearAllAnswerButtonsColor(): void {
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<Selectable>((option) => {
        return {
          ...option,
          color: 'secondary',
        };
      });
    });
  }

  return { answerButtons, handleAnswerButtonClick, streak, updateAnswerButtonColor, clearAllAnswerButtonsColor };
}

export default useAnswerButtons;
