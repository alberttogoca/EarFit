import { useEffect, useState } from 'react';
import { Answer, SelectableAnswer, SelectableAnswerColor } from 'utils/Selectable';

import usePlayButton from './usePlayButton';
import useStreak from './useStreak';

type HookReturnType = {
  answerButtons: SelectableAnswerColor[];
  handleAnswerButtonClick: (selectedOption: SelectableAnswerColor) => void;
  streak: number;
};

export function useAnswerButtons(
  selectables: SelectableAnswer[],
  answer: Answer,
  setNewAnswer: () => void
): HookReturnType {
  const { playNote } = usePlayButton();
  const [answerButtons, setAnswerButtons] = useState<SelectableAnswerColor[]>([]);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  useEffect(() => {
    if (!selectables || selectables.length === 0) {
      return;
    }

    const newOptions = selectables
      .filter((n) => n.isSelected)
      .map<SelectableAnswerColor>((item) => {
        return {
          ...item,
          color: 'secondary',
        };
      });

    setAnswerButtons(newOptions);
  }, [selectables]);

  function handleAnswerButtonClick(selectedOption: SelectableAnswerColor): void {
    const isAnswer = selectedOption.id.toUpperCase() === answer.id.toUpperCase();
    if (isAnswer) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playNote(answer);

      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
    }
  }

  function updateAnswerButtonColor(answerButton: SelectableAnswerColor, isAnswer: boolean): void {
    const newColor = isAnswer ? 'success' : 'danger';
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<SelectableAnswerColor>((option) => {
        return {
          ...option,
          color: answerButton.id === option.id ? newColor : option.color,
        };
      });
    });
  }

  function clearAllAnswerButtonsColor(): void {
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<SelectableAnswerColor>((option) => {
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
