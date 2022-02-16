import { Scale as TonalScale } from '@tonaljs/tonal';
import { SelectableAnswer, selectThreeRandomItems } from 'utils/Selectable';

export const getScales = (): SelectableAnswer[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = 'major';
  const modes = TonalScale.modeNames(tonic + octave + ' ' + pattern);
  const scaleList = modes.map(([root, mode]) => TonalScale.get([root, mode])); //Obtaining notes for each mode
  const myScales: SelectableAnswer[] = scaleList.map((m) => {
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

export const getScaleNames = (): string[] => {
  return ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
};
