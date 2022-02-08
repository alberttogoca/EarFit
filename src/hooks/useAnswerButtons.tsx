import { useEffect, useState } from 'react';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  answerButtons: Selectable[];
  updateAnswerButtonColor(answerButton: Selectable, isAnswer: boolean): void;
  clearAnswerButtonColor(): void;
};

export function useAnswerButtons(selectables: Selectable[]): HookReturnType {
  const [answerButtons, setAnswerButtons] = useState<Selectable[]>([]);

  useEffect(() => {
    const newAnswerButtons = selectables.filter((n) => n.isSelected);
    setAnswerButtons(newAnswerButtons);
  }, [selectables]);

  function updateAnswerButtonColor(answerButton: Selectable, isAnswer: boolean): void {
    const newAnswerButtons = answerButtons.map<Selectable>((actualButton) => {
      if (answerButton.id === actualButton.id) {
        return {
          ...actualButton,
          color: isAnswer ? 'success' : 'danger',
        };
      }
      return { ...actualButton };
    });

    setAnswerButtons(newAnswerButtons);
  }

  function clearAnswerButtonColor(): void {
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<Selectable>((actualButton) => {
        return {
          ...actualButton,
          color: 'secondary',
        };
      });
    });
  }

  return { answerButtons, updateAnswerButtonColor, clearAnswerButtonColor };
}

export default useAnswerButtons;
