import { Scale as ScaleType } from '@tonaljs/scale';
import { Scale } from '@tonaljs/tonal';
import { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface Answer {
  name: string;
  value: ScaleType;
}

type HookReturnType = {
  scales: ScaleType[];
  options: Selectable[];
  answer: Answer;
  setNewAnswer: () => Answer;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<ScaleType[]>([]);
  const [options, setOptions] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Answer>();

  const setNewAnswer = (): Answer => {
    const value = getRandomItem(scales);
    const name = value.type;
    const newAnswer = { name, value };
    setAnswer(newAnswer);
    return newAnswer;
  };

  useEffect(() => {
    const tonic = 'C';
    const octave = '3';
    const pattern = 'major';
    const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
    const scaleList = modes.map(([root, mode]) => Scale.get([root, mode])); //Obtaining notes for each mode
    const scaleNames = scaleList.map((m) => m.type.toUpperCase());
    setScales(scaleList);
    setOptions(
      scaleNames.map((s) => {
        return { displayName: s, isSelected: true };
      })
    );
    const value = getRandomItem(scaleList);
    const name = value.type;
    const newAnswer = { name, value };
    setAnswer(newAnswer);
  }, []);

  return { scales, options, answer, setNewAnswer };
};

export default useScales;
