//import { Scale as ScaleType } from '@tonaljs/scale';
import { Scale as TonalScale } from '@tonaljs/tonal';

export interface Scale {
  value: string[];
  name: string;
}

export const getScales = (pattern2 = 'major'): Scale[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = pattern2;
  const modes = TonalScale.modeNames(tonic + octave + ' ' + pattern);
  const scaleList = modes.map(([root, mode]) => TonalScale.get([root, mode])); //Obtaining notes for each mode
  const toReturn = scaleList.map((m) => {
    return {
      value: m.notes,
      name: m.type.toUpperCase(),
    };
  });
  return toReturn;
};
