import { useEffect, useState } from 'react';
import { getScales } from 'services/scaleService';
import Selectable, { getRandomItemThatIsSelected, reverseAllItemValues } from 'utils/Selectable';

type HookReturnType = {
  scales: Selectable[];
  setNewScales: (selectable: Selectable[]) => void;
  answer: Selectable;
  setNewAnswer: () => void;
  changeDirection: () => void;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();

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

  function setNewScales(newNotes: Selectable[]): void {
    setScales(newNotes);
  }

  const setNewAnswer = (): Selectable => {
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
