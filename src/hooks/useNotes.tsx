import { useEffect, useState } from 'react';
import { getNotes } from 'services/noteService';
import Selectable, { getRandomItemThatIsSelected } from 'utils/Selectable';

type HookReturnType = {
  notes: Selectable[];
  setNewNotes: (newNotes: Selectable[]) => void;
  answer: Selectable;
  setNewAnswer: () => void;
};

const useNotes = (selectedScale: string): HookReturnType => {
  const [notes, setNotes] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>(undefined);

  useEffect(() => {
    const newNotes = getNotes(selectedScale);
    setNotes(newNotes);
  }, [selectedScale]);

  useEffect(() => {
    if (!answer || !notes.find((s) => s.id === answer.id)?.isSelected) {
      const newAnswer = getRandomItemThatIsSelected(notes);
      setAnswer(newAnswer);
    }
  }, [answer, notes]);

  function setNewNotes(newNotes: Selectable[]): void {
    setNotes(newNotes);
  }

  function setNewAnswer(): void {
    const newAnswer = getRandomItemThatIsSelected(notes);
    setAnswer(newAnswer);
  }

  return {
    notes,
    setNewNotes,
    answer,
    setNewAnswer,
  };
};

export default useNotes;
