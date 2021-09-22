import { transpose } from '@tonaljs/core';
import { Note as TonalNote } from '@tonaljs/tonal';
import { getRandomItem } from 'utils/arrayUtils';

export interface Interval {
  name: string;
  value: string[];
}

const octaves = [1, 2, 3, 4, 5, 6, 7];
const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notes = octaves.flatMap((octave) => names.flatMap((name) => name + octave)).concat(['A0', 'A#0', 'B0', 'C8']);

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

export const getIntervals = (): Interval[] => {
  const allIntervals = allIntervalsNames.map((interval) => {
    return { name: interval, value: [] };
  });
  return allIntervals;
};

export const calcIntervalToPlay = (interval: string, reverseInterval?: boolean): string[] => {
  let note1 = getRandomItem(notes);
  let note2 = transpose(note1, interval);

  while ((+note2.slice(-1) === 8 || +note2.slice(-1) === 0) && !['A0', 'A#0', 'B0', 'C8'].includes(note2)) {
    note1 = getRandomItem(notes);
    note2 = transpose(note1, interval);
  }

  const value = [note1, TonalNote.simplify(note2)];

  if (reverseInterval) {
    value.reverse();
  }

  return value;
};

//INFO
//const uniqueIntervalsFromNames = Array.from(new Set(names.flatMap((n1) => names.flatMap((n2) => TonalInterval.distance(n1, n2)))).values()).sort();
//const uniqueIntervalsFromNamesArraySort = ['1P', '1A', '2m', '2M', '2A', '3d', '3m', '3M', '3A', '4d', '4P', '4A', '5d', '5P', '5A', '6d', '6m', '6M', '6A', '7d', '7m', '7M', '8d']
//const allNaturalIntervalsNames = ['1P','2m','2M','3m','3M','4P','4A','5P','6m','6M','7m','7M','P8'];
//const allIntervalsNames = ['1P', '1A', '2d', '2m', '2M', '2A', '3d', '3m', '3M', '3A', '4d', '4P', '4A', '5d', '5P', '5A', '6d', '6m', '6M', '6A', '7d', '7m', '7M', '7A', '8d', '8P', '8A']

/* 
//PROBLEMA: Intervalos que suenan igual pero se escriben distinto: 
Enarmonía
Una enarmonía se produce entre dos notas que tienen el mismo sonido y escritura diferente. 
Puesto que no existe distancia entre dos notas enarmónicas, no se considera un intervalo.
  console.log(TonalInterval.distance('C3', 'C#3'));
  console.log(TonalInterval.distance('C3', 'Db3'));
  console.log(TonalInterval.distance('C#3', 'Db3'));
  console.log(TonalInterval.distance('Db3', 'C#3')); */

/* const allIntervalsNames = [
  '1P | 2d (0 semitone)', //2d
  '2m | 1A (1 semitone)', //1A
  '2M | 3d (2 semitones)', //3d
  '3m | 2A (3 semitones)', //2A
  '3M | 4d (4 semitones)', //4d
  '4P | 3A (5 semitones)', //3A
  '4A | 5d (6 semitones)', //5d
  '5P | 6d (7 semitones)', //6d
  '6m | 5A (8 semitones)', //5A
  '6M | 7d (9 semitones)', //7d
  '7m | 6A (10 semitones)', //6A
  '7M | 8d (11 semitones)', //8d
  'P8 | 7A (12 semitones)', //7A
]; */
