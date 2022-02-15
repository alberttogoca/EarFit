import { useStreak } from 'hooks';
import { useEffect, useState } from 'react';
import Selectable, { getRandomItemThatIsSelected } from 'utils/Selectable';

type HookReturnType = {
  answerButtons: Selectable[];
  answer: Selectable;
  handleAnswerButtonClick: (selectedOption: Selectable) => boolean;
  streak: number;
};

export function useAnswerButtons(
  selectables: Selectable[],
  playNote: (selectable: Selectable) => void
): HookReturnType {
  const [answerButtons, setAnswerButtons] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>(undefined);
  const { streak, clearStreak, IncrementStreak } = useStreak();

  useEffect(() => {
    if (selectables.length < 1) {
      return;
    }

    const newAnswerButtons = selectables.filter((n) => n.isSelected);
    setAnswerButtons(newAnswerButtons);
  }, [selectables]);

  useEffect(() => {
    if (!answer || !selectables.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [selectables]);

  const setNewAnswer = (): Selectable => {
    const newAnswer = getRandomItemThatIsSelected(selectables);
    setAnswer(newAnswer);
    return newAnswer;
  };

  const handleAnswerButtonClick = (selectedOption: Selectable): boolean => {
    console.log('answer: ' + answer.id);
    console.log('selected: ' + selectedOption.id);

    if (selectedOption.id === answer.id) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playNote(answer);

      setTimeout(() => {
        clearAnswerButtonColor();
      }, 1000);

      return true;
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
      return false;
    }
  };

  const updateAnswerButtonColor = (answerButton: Selectable, isAnswer: boolean): void => {
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
  };

  const clearAnswerButtonColor = (): void => {
    setAnswerButtons((answerButtons) => {
      return answerButtons.map<Selectable>((actualButton) => {
        return {
          ...actualButton,
          color: 'secondary',
        };
      });
    });
  };

  return { answerButtons, answer, handleAnswerButtonClick, streak };
}

export default useAnswerButtons;
