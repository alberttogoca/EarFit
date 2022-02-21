import { transpose } from '@tonaljs/core';
import { Note as TonalNote } from '@tonaljs/tonal';
import { getRandomItem } from 'utils/arrayUtils';
import { SelectableAnswer } from 'utils/Types';

const octaves = [1, 2, 3, 4, 5, 6, 7];
const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const allNotes = octaves.flatMap((octave) => names.flatMap((name) => name + octave)).concat(['A0', 'A#0', 'B0', 'C8']);
const allIntervalsNames = [
  '1P | 2d', //(0 semitones)
  '2m | 1A', //(1 semitones)
  '2M | 3d', //(2 semitones)
  '3m | 2A', //(3 semitones)
  '3M | 4d', //(4 semitones)
  '4P | 3A', //(5 semitones)
  '4A | 5d', //(6 semitones)
  '5P | 6d', //(7 semitones)
  '6m | 5A', //(8 semitones)
  '6M | 7d', //(9 semitones)
  '7m | 6A', //(10 semitones)
  '7M | 8d', //(11 semitones)
  '8P | 7A', //(12 semitones)
];

export const getIntervals = (): SelectableAnswer[] => {
  const myIntervals: SelectableAnswer[] = allIntervalsNames.map((interval) => {
    return {
      id: interval,
      values: calcIntervalToPlay(interval),
      isSelected: false,
      displayName: interval,
      color: 'secondary',
    };
  });
  return myIntervals;
};

export const calcIntervalToPlay = (interval: string): string[] => {
  let note1 = getRandomItem(allNotes);
  let note2 = transpose(note1, interval);

  while ((+note2.slice(-1) === 8 || +note2.slice(-1) === 0) && !['A0', 'A#0', 'B0', 'C8'].includes(note2)) {
    note1 = getRandomItem(allNotes);
    note2 = transpose(note1, interval);
  }

  const values = [note1, TonalNote.simplify(note2)];

  return values;
};
