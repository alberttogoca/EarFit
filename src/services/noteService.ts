import { Note as TonalNote, Scale as TonalScale } from '@tonaljs/tonal';
import { Answer } from 'utils/Types';

export const getNotes = (scaleName: string): Answer[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = scaleName.toLowerCase();
  const notes = TonalScale.get(tonic + octave + ' ' + pattern).notes;
  //major
  const myNotes: Answer[] = notes.map((n) => {
    return {
      id: TonalNote.get(n).pc,
      values: [n],
      displayName: TonalNote.get(n).pc,
    };
  });
  return myNotes;
};
