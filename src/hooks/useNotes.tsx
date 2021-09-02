import { useEffect, useState } from 'react';
import { getNotes, getScales, Note, Scale } from 'services/noteService';
import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

export interface SelectableNote extends Selectable, Note {}

type HookReturnType = {
  notes: SelectableNote[];
  scales: Scale[];
  selectedScale: Scale;
  answer: Note;
  setNewAnswer: () => SelectableNote;
  updateIsSelectedNote: (displayName: string, newValue: boolean) => void;
  setNewSelectedScale: (name: string) => void;
};

const useNotes = (): HookReturnType => {
  const [notes, setNotes] = useState<SelectableNote[]>([]);
  const [scales, setScales] = useState<Scale[]>([]);
  const [answer, setAnswer] = useState<Note>();
  const [selectedScale, setSelectedScale] = useState<Scale>(undefined);

  useEffect(() => {
    const newScales = getScales();
    setScales(newScales);
    setSelectedScale(newScales[0]);
  }, []);

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
  }, [notes, selectedScale]);

  const setNewAnswer = (): SelectableNote => {
    const selectedNotes = notes.filter((n) => n.isSelected);
    const noteAnswer = getRandomItem(selectedNotes);
    setAnswer(noteAnswer);
    return noteAnswer;
  };

  const setNewSelectedScale = (name: string): void => {
    const newScale = scales.find((s) => s.name === name);
    if (newScale) {
      setSelectedScale(newScale);
    }
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

  return { notes, answer, setNewAnswer, updateIsSelectedNote, scales, selectedScale, setNewSelectedScale };
};

export default useNotes;
