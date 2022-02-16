import { useEffect, useState } from 'react';
import { getScales } from 'services/scaleService';
import { Answer, getRandomItemThatIsSelected, reverseAllItemValues, SelectableAnswer } from 'utils/Selectable';

type HookReturnType = {
  scales: SelectableAnswer[];
  setNewScales: (selectable: SelectableAnswer[]) => void;
  answer: Answer;
  setNewAnswer: () => void;
  changeDirection: () => void;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<SelectableAnswer[]>([]);
  const [answer, setAnswer] = useState<Answer>();

  useEffect(() => {
    const newScales = getScales();
    setScales(newScales);
  }, []);

  useEffect(() => {
    if (!answer || !scales.find((n) => n.id === answer.id)?.isSelected) {
      const newAnswer = getRandomItemThatIsSelected(scales);
      setAnswer(newAnswer);
    }
  }, [answer, scales]);

  function setNewScales(newNotes: SelectableAnswer[]): void {
    setScales(newNotes);
  }

  const setNewAnswer = (): Answer => {
    const scaleAnswer = getRandomItemThatIsSelected(scales);
    setAnswer(scaleAnswer);
    return scaleAnswer;
  };

  const changeDirection = (): void => {
    const newScales = reverseAllItemValues(scales);
    setScales(newScales);
  };

  return { scales, setNewScales, answer, setNewAnswer, changeDirection };
};

export default useScales;
