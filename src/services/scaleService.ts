//import { Scale as ScaleType } from '@tonaljs/scale';
import { Scale as TonalScale } from '@tonaljs/tonal';
import Selectable, { selectThreeRandomItems } from 'utils/Selectable';

export const getScales = (): Selectable[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = 'major';
  const modes = TonalScale.modeNames(tonic + octave + ' ' + pattern);
  const scaleList = modes.map(([root, mode]) => TonalScale.get([root, mode])); //Obtaining notes for each mode
  const myScales: Selectable[] = scaleList.map((m) => {
    return {
      id: m.type.toUpperCase(),
      values: m.notes,
      isSelected: false,
      displayName: m.type.toUpperCase(),
      color: 'secondary',
    };
  });
  return selectThreeRandomItems(myScales);
};

export const getNotesScales = (): string[] => {
  return ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
};
