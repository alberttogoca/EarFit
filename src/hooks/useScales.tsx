import { useEffect, useState } from 'react';
import { getScales } from 'services/scaleService';
import Selectable, {
  getRandomItemThatIsSelected,
  reverseAllItemValues,
  selectAllOrThreeItems,
  selectThreeRandomItems,
  updateIsSelectedItem,
} from 'utils/Selectable';

type HookReturnType = {
  scales: Selectable[];
  answer: Selectable;
  setNewAnswer: () => Selectable;
  changeDirection: () => void;
  updateIsSelected: (id: string, newValue: boolean) => void;
  selectAllOrThree: () => void;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();

  useEffect(() => {
    const selectableScales = getScales();
    const newScalesSelection = selectThreeRandomItems(selectableScales);
    setScales(newScalesSelection);
  }, []);

  useEffect(() => {
    if (!answer || !scales.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [scales]);

  const setNewAnswer = (): Selectable => {
    const scaleAnswer = getRandomItemThatIsSelected(scales);
    setAnswer(scaleAnswer);
    return scaleAnswer;
  };

  const changeDirection = (): void => {
    const newScales = reverseAllItemValues(scales);
    setScales(newScales);
  };

  const updateIsSelected = (id: string, newIsSelected: boolean): void => {
    const newScales = updateIsSelectedItem(scales, id, newIsSelected);
    setScales(newScales);
  };

  const selectAllOrThree = (): void => {
    const newScalesSelection = selectAllOrThreeItems(scales);
    setScales(newScalesSelection);
  };

  return { scales, answer, setNewAnswer, changeDirection, updateIsSelected, selectAllOrThree };
};

export default useScales;
