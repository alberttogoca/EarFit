import { Note, Scale } from '@tonaljs/tonal';

export interface Note {
  value: string;
  letter: string;
}

export interface Scale {
  name: string;
}

let scales: Scale[] = undefined;

export const getNotes = (): Note[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = 'major';
  const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
  const scaleList = modes.map(([r, n]) => Scale.get([r, n]));
  const noteList = scaleList[0].notes; //major
  return noteList.map<Note>((n) => {
    return {
      value: n,
      letter: Note.get(n).letter,
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
