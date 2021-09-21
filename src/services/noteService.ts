import { Note as TonalNote, Scale as TonalScale } from '@tonaljs/tonal';

export interface Note {
  value: string;
  letter: string;
}

export interface Scale {
  name: string;
}

let scales: Scale[] = undefined;

export const getNotes = (scale: Scale): Note[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = scale.name.toLowerCase();
  const notes = TonalScale.get(tonic + octave + ' ' + pattern).notes;
  //major
  return notes.map<Note>((n) => {
    return {
      value: n,
      letter: TonalNote.get(n).pc,
    };
  });
};

export const getScales = (): Scale[] => {
  if (scales === undefined) {
    scales = [
      { name: 'Major' },
      { name: 'Dorian' },
      { name: 'Phrygian' },
      { name: 'Lydian' },
      { name: 'Mixolydian' },
      { name: 'Aeolian' },
      { name: 'Locrian' },
    ];
  }
  return scales;
};
