import { useEffect, useState } from 'react';
import { getScales, Scale } from 'services/scaleService';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface SelectableScale extends Selectable, Scale {}

type HookReturnType = {
  scales: SelectableScale[];
  answer: Scale;
  setNewAnswer: () => SelectableScale;
  updateIsSelectedScale: (displayName: string, newValue: boolean) => void;
  changeScalesDirection: () => void;
  selectAllOptions: () => void;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<SelectableScale[]>([]);
  const [answer, setAnswer] = useState<Scale>();

  useEffect(() => {
    const newScales = getScales().map<SelectableScale>((scale) => {
      return {
        ...scale,
        isSelected: false,
        displayName: scale.name,
      };
    });
    selectThreeOptions(newScales);

    setScales(newScales);
  }, []);

  useEffect(() => {
    if (!answer || !scales.find((n) => n.name === answer.name)?.isSelected) {
      setNewAnswer();
    }
  }, [scales]);

  const selectThreeOptions = (scales: SelectableScale[]): void => {
    let item = getRandomItem(scales);
    for (let i = 0; i < 3; i++) {
      while (item.isSelected === true) {
        item = getRandomItem(scales);
      }
      item.isSelected = true;
    }
  };

  const selectAllOptions = (): void => {
    const allSelected = scales.every((option) => option.isSelected === true);
    const newScales = scales.map<SelectableScale>((scale) => {
      return {
        ...scale,
        isSelected: !allSelected,
      };
    });
    if (allSelected) {
      selectThreeOptions(newScales);
    }
    setScales(newScales);
  };

  const setNewAnswer = (): SelectableScale => {
    const selectedScales = scales.filter((s) => s.isSelected);
    const scaleAnswer = getRandomItem(selectedScales);
    setAnswer(scaleAnswer);
    return scaleAnswer;
  };

  const updateIsSelectedScale = (displayName: string, newValue: boolean): void => {
    const hasManySelectedScales = scales.filter((s) => s.isSelected).length > 1;
    if (newValue === true || hasManySelectedScales) {
      const newScales = scales.map((scale) => {
        return {
          ...scale,
          isSelected: scale.displayName === displayName ? newValue : scale.isSelected,
        };
      });
      setScales(newScales);
    }
  };

  const changeScalesDirection = (): void => {
    const newScales = scales.map((scale) => {
      return {
        ...scale,
        value: scale.value.reverse(),
      };
    });
    setScales(newScales);
  };

  return { scales, answer, setNewAnswer, updateIsSelectedScale, changeScalesDirection, selectAllOptions };
};

export default useScales;
