import { useScaleDropdown } from 'hooks';
import { useEffect, useState } from 'react';
import { calcIntervalToPlay, getIntervals } from 'services/intervalService';
import { getNotes } from 'services/noteService';
import { getScales } from 'services/scaleService';
import Selectable, {
  getRandomItemThatIsSelected,
  reverseAllItemValues,
  reverseItemValues,
  selectAllOrThreeItems,
  selectThreeRandomItems,
  updateIsSelectedItem,
} from 'utils/Selectable';

type ExerciseVariant = 'notes' | 'intervals' | 'scales';

type HookReturnType = {
  selectables: Selectable[];
  answer: Selectable;
  scalesNames: string[];
  selectedScale: string;
  setNewAnswer: () => Selectable;
  setNewSelectedScale: (id: string) => void;
  updateIsSelected: (id: string, newValue: boolean) => void;
  selectAllOrThree: () => void;
  changeDirection: () => void;
};

const useExercise = (exerciseVariant: ExerciseVariant): HookReturnType => {
  const [selectables, setSelectables] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();
  const { scalesNames, selectedScale, setNewSelectedScale } = useScaleDropdown();

  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    let newSelectables = undefined;
    switch (exerciseVariant) {
      case 'notes':
        newSelectables = getNotes(selectedScale);
        break;
      case 'intervals':
        newSelectables = getIntervals();
        break;
      case 'scales':
        newSelectables = getScales();
        break;
    }
    const newSelectablesSelection = selectThreeRandomItems(newSelectables);
    setSelectables(newSelectablesSelection);
  }, [selectedScale, exerciseVariant]);

  useEffect(() => {
    if (!answer || !selectables.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [selectables]);

  const setNewAnswer = (): Selectable => {
    let newAnswer = undefined;
    switch (exerciseVariant) {
      case 'intervals':
        if (selectables.length > 0) {
          const intervalAnswer = getRandomItemThatIsSelected(selectables);
          newAnswer = { ...intervalAnswer, values: calcIntervalToPlay(intervalAnswer.id, reverse) };
          setAnswer(newAnswer);
          return newAnswer;
        }
        return null;
      default:
        newAnswer = getRandomItemThatIsSelected(selectables);
        setAnswer(newAnswer);
        return newAnswer;
    }
  };

  const updateIsSelected = (id: string, newIsSelected: boolean): void => {
    const newNotes = updateIsSelectedItem(selectables, id, newIsSelected);
    setSelectables(newNotes);
  };

  const selectAllOrThree = (): void => {
    const newNotesSelection = selectAllOrThreeItems(selectables);
    setSelectables(newNotesSelection);
  };

  const changeDirection = (): void => {
    switch (exerciseVariant) {
      case 'intervals':
        setReverse(!reverse);
        setAnswer(reverseItemValues(answer));
        break;
      default:
        setSelectables(reverseAllItemValues(selectables));
    }
  };

  return {
    selectables,
    answer,
    scalesNames,
    selectedScale,
    setNewAnswer,
    setNewSelectedScale,
    updateIsSelected,
    selectAllOrThree,
    changeDirection,
  };
};

export default useExercise;
