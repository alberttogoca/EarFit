import { useEffect, useState } from 'react';
import { getNotes, Note, Scale } from 'services/noteService';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface SelectableNote extends Selectable, Note {}

type HookReturnType = {
  notes: SelectableNote[];
  answer: Note;
  setNewAnswer: () => SelectableNote;
  updateIsSelectedNote: (displayName: string, newValue: boolean) => void;
};

const useNotes = (selectedScale: Scale): HookReturnType => {
  const [notes, setNotes] = useState<SelectableNote[]>([]);
  const [answer, setAnswer] = useState<Note>();

  useEffect(() => {
    if (selectedScale === undefined) {
      return;
    }

    const newNotes = getNotes(selectedScale).map<SelectableNote>((note) => {
      return {
        ...note,
        isSelected: true,
        displayName: note.letter,
      };
    });

    setNotes(newNotes);
  }, [selectedScale]);

  useEffect(() => {
    if (!answer || !notes.find((n) => n.letter === answer.letter)?.isSelected) {
      setNewAnswer();
    }
  }, [notes]);

  const setNewAnswer = (): SelectableNote => {
    const selectedNotes = notes.filter((n) => n.isSelected);
    const noteAnswer = getRandomItem(selectedNotes);
    setAnswer(noteAnswer);
    return noteAnswer;
  };

  const updateIsSelectedNote = (displayName: string, newValue: boolean): void => {
    const hasManySelectedNotes = notes.filter((n) => n.isSelected).length > 1;
    if (newValue === true || hasManySelectedNotes) {
      const newNotes = notes.map((note) => {
        return {
          ...note,
          isSelected: note.displayName === displayName ? newValue : note.isSelected,
        };
      });
      setNotes(newNotes);
    }
  };

  return { notes, answer, setNewAnswer, updateIsSelectedNote };
};

export default useNotes;
