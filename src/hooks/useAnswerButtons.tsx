import { useEffect, useState } from 'react';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  answerButtons: AnswerButton[];
  updateAnswerButton(optionToUpdate: AnswerButton, isAnswer: boolean): void;
  clearAnswerButton(): void;
};

export function useAnswerButtons(selectables: Selectable[]): HookReturnType {
  const [answerButtons, setOptions] = useState<AnswerButton[]>([]);

  useEffect(() => {
    const newAnswerButtons = selectablesToAnswerButtons(selectables);
    setOptions(newAnswerButtons);
  }, [selectables]);

  function selectablesToAnswerButtons(selectables: Selectable[]): AnswerButton[] {
    return selectables
      .filter((n) => n.isSelected)
      .map<AnswerButton>((item) => {
        return {
          id: item.id,
          displayName: item.displayName,
          color: 'secondary',
        };
      });
  }

  function updateAnswerButton(optionToUpdate: AnswerButton, isAnswer: boolean): void {
    const newOptions = answerButtons.map<AnswerButton>((option) => {
      if (optionToUpdate.displayName === option.displayName) {
        return {
          ...option,
          color: isAnswer ? 'success' : 'danger',
        };
      }
      return { ...option };
    });

    setOptions(newOptions);
  }

  function clearAnswerButton(): void {
    setOptions((options) => {
      return options.map<AnswerButton>((option) => {
        return {
          ...option,
          color: 'secondary',
        };
      });
    });
  }

  return { answerButtons, updateAnswerButton, clearAnswerButton };
}

export default useAnswerButtons;
