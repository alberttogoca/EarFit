import { Note, Scale } from '@tonaljs/tonal';
import { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface Note extends Selectable {
  value: string;
  letter: string;
}

type HookReturnType = {
  notes: Note[];
  answer: Note;
  setNewAnswer: () => Note;
  updateIsSelectedNote: (displayName: string, newIsSelectedValue: boolean) => void;
};

const useNotes = (): HookReturnType => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [answer, setAnswer] = useState<Note>();

  const createNotes = (): Note[] => {
    const tonic = 'C';
    const octave = '3';
    const pattern = 'major';
    const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
    const scaleList = modes.map(([r, n]) => Scale.get([r, n]));
    const noteList = scaleList[0].notes; //major
    return noteList.map<Note>((n) => {
      return {
        value: n,
        displayName: Note.get(n).letter,
        letter: Note.get(n).letter,
        isSelected: true,
      };
    });
  };

  useEffect(() => {
    const notes = createNotes();
    setNotes(notes);
  }, []);

  useEffect(() => {
    if (!answer || notes.some((n) => n.displayName === answer.displayName && !n.isSelected)) {
      setNewAnswer();
    }
  }, [notes]);

  const setNewAnswer = (): Note => {
    const noteAnswer = getRandomItem(notes.filter((n) => n.isSelected));
    setAnswer(noteAnswer);
    return noteAnswer;
  };

  const updateIsSelectedNote = (displayName: string, newIsSelectedValue: boolean): void => {
    setNotes((oldNotes) => {
      return oldNotes.map((note) => {
        if (note.displayName === displayName && note.isSelected !== newIsSelectedValue) {
          return {
            ...note,
            isSelected: newIsSelectedValue,
          };
        }
        return note;
      });
    });
  };

  return { notes, answer, setNewAnswer, updateIsSelectedNote };
};

export default useNotes;
