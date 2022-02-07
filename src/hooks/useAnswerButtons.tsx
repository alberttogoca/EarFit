import { useEffect, useState } from 'react';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  answerButtons: AnswerButton[];
  updateAnswerButtonColor(answerButton: AnswerButton, isAnswer: boolean): void;
  clearAnswerButtonColor(): void;
};

export function useAnswerButtons(selectables: Selectable[]): HookReturnType {
  const [answerButtons, setAnswerButtons] = useState<AnswerButton[]>([]);

  useEffect(() => {
    const newAnswerButtons = selectablesToAnswerButtons(selectables);
    setAnswerButtons(newAnswerButtons);
  }, [selectables]);

  function selectablesToAnswerButtons(selectables: Selectable[]): AnswerButton[] {
    return selectables
      .filter((n) => n.isSelected)
      .map<AnswerButton>((item) => {
        return {
          id: item.id,
          displayName: item.id,
          color: 'secondary',
        };
      });
  }

  function updateAnswerButtonColor(answerButton: AnswerButton, isAnswer: boolean): void {
    const newAnswerButtons = answerButtons.map<AnswerButton>((actualButton) => {
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
      return answerButtons.map<AnswerButton>((actualButton) => {
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
