import { Scale as TonalScale } from '@tonaljs/tonal';
import { Answer } from 'utils/Selectable';

export const getScales = (): Answer[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = 'major';
  const modes = TonalScale.modeNames(tonic + octave + ' ' + pattern);
  const scaleList = modes.map(([root, mode]) => TonalScale.get([root, mode])); //Obtaining notes for each mode
  const myScales: Answer[] = scaleList.map((m) => {
    return {
      id: m.type.toUpperCase(),
      values: m.notes,
      displayName: m.type.toUpperCase(),
    };
  });
  return myScales;
};

export const getScaleNames = (): string[] => {
  return ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
};
