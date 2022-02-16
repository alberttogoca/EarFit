import { useEffect } from 'react';
import Selectable, { setAllColorSecondary, setItemColorSuccesOrDanger } from 'utils/Selectable';

import useStreak from './useStreak';

type HookReturnType = {
  handleAnswerButtonClick: (selectedOption: Selectable) => void;
  streak: number;
  updateAnswerButtonColor;
  clearAllAnswerButtonsColor;
};

const useAnswerButtons = (
  selectables: Selectable[],
  setNewSelectables: (selectables: Selectable[]) => void,
  answer?: Selectable,
  setNewAnswer?: () => void,
  play?: (selectable: Selectable) => void
): HookReturnType => {
  useEffect(() => {
    //clearAllAnswerButtonsColor();
  }, [selectables]);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  function handleAnswerButtonClick(answerButton: Selectable): void {
    const isAnswer = answerButton.id === answer.id;
    if (isAnswer) {
      setNewAnswer();
      updateAnswerButtonColor(answerButton, isAnswer);
      IncrementStreak();
      play(answer);
      setTimeout(() => {
        clearAllAnswerButtonsColor();
      }, 1000);
    } else {
      updateAnswerButtonColor(answerButton, isAnswer);
      clearStreak();
    }
  }

  function updateAnswerButtonColor(answerButton: Selectable, isAnswer: boolean): void {
    const newAnswerButtons = setItemColorSuccesOrDanger(selectables, answerButton.id, isAnswer);
    setNewSelectables(newAnswerButtons);
  }

  function clearAllAnswerButtonsColor(): void {
    const newAnswerButtons = setAllColorSecondary(selectables);
    setNewSelectables(newAnswerButtons);
  }

  return { handleAnswerButtonClick, streak, updateAnswerButtonColor, clearAllAnswerButtonsColor };
};

export default useAnswerButtons;
