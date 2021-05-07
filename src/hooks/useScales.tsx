import { Scale as ScaleType } from '@tonaljs/scale';
import { Scale } from '@tonaljs/tonal';
import { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

interface Answer {
  name: string;
  value: ScaleType;
}

type HookReturnType = {
  scales: ScaleType[];
  options: string[];
  answer: Answer;
  setNewAnswer: () => Answer;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<ScaleType[]>([]);
  const [options, setOptions] = useState<string[]>([]);
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
    setOptions(scaleNames);
    const value = getRandomItem(scaleList);
    const name = value.type;
    const newAnswer = { name, value };
    setAnswer(newAnswer);
  }, []);

  return { scales, options, answer, setNewAnswer };
};

export default useScales;
