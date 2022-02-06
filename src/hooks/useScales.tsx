import { useEffect, useState } from 'react';
import { getScales } from 'services/scaleService';
import Selectable, {
  getRandomItemThatIsSelected,
  reverseValues,
  selectThreeOptions,
  toggleAllOptions,
  updateIsSelected,
} from 'utils/Selectable';

type HookReturnType = {
  scales: Selectable[];
  answer: Selectable;
  setNewAnswer: () => Selectable;
  updateIsSelectedScale: (displayName: string, newIsSelected: boolean) => void;
  changeScalesDirection: () => void;
  toggleAllScales: () => void;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();

  useEffect(() => {
    const selectableScales = getScales();
    const newScalesSelection = selectThreeOptions(selectableScales);
    setScales(newScalesSelection);
  }, []);

  useEffect(() => {
    if (!answer || !scales.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [scales]);

  const toggleAllScales = (): void => {
    const newScalesSelection = toggleAllOptions(scales);
    setScales(newScalesSelection);
  };

  const setNewAnswer = (): Selectable => {
    const scaleAnswer = getRandomItemThatIsSelected(scales);
    setAnswer(scaleAnswer);
    return scaleAnswer;
  };

  const updateIsSelectedScale = (displayName: string, newIsSelected: boolean): void => {
    const newScales = updateIsSelected(scales, displayName, newIsSelected);
    setScales(newScales);
  };

  const changeScalesDirection = (): void => {
    const newScales = reverseValues(scales);
    setScales(newScales);
  };

  return { scales, answer, setNewAnswer, updateIsSelectedScale, changeScalesDirection, toggleAllScales };
};

export default useScales;
