import { transpose } from '@tonaljs/core';
import { Scale as TonalScale } from '@tonaljs/tonal';
import { getRandomItem } from 'utils/arrayUtils';

export interface Interval {
  name: string;
  value: string[];
}

//Max range is A0 -> C8. Actual range is C1 -> B7
const octaves = [1, 2, 3, 4, 5, 6, 7];
const notes = octaves.flatMap((octave) => {
  return TonalScale.get('C' + octave + ' major').notes;
});

//INFO: +/-: direccion, 2: distancia notas, P/M/m/A/dd/d?: justa/mayor/menor/aumentado/disminuido/? (semitonos)
const almostAllIntervalsNames = [
  '1P',
  '2m',
  '2M',
  '3m',
  '3M',
  '4P',
  '4A',
  '5d',
  '5P',
  '5A',
  '6m',
  '6M',
  '7m',
  '7M',
  'P8',
];

export const getIntervals = (): Interval[] => {
  const almostAllIntervals = almostAllIntervalsNames.map((interval) => {
    return { name: interval, value: [] };
  });
  return almostAllIntervals;
};

export const calcIntervalToPlay = (interval: string, reverseInterval?: boolean): string[] => {
  let note1 = getRandomItem(notes);
  let note2 = transpose(note1, interval);

  while (+note1.slice(-1) === 8 || +note2.slice(-1) === 8) {
    note1 = getRandomItem(notes);
    note2 = transpose(note1, interval);
  }

  const value = [note1, note2];

  if (reverseInterval) {
    value.reverse();
  }

  return value;
};
