import { useEffect, useState } from 'react';
import { getNotes, Scale } from 'services/noteService';
import Selectable, {
  getRandomItemThatIsSelected,
  selectThreeOptions,
  toggleAllOptions,
  updateIsSelected,
} from 'utils/Selectable';

type HookReturnType = {
  notes: Selectable[];
  answer: Selectable;
  setNewAnswer: () => Selectable;
  updateIsSelectedNote: (displayName: string, newValue: boolean) => void;
  toggleAllNotes: () => void;
};

const useNotes = (selectedScale: Scale): HookReturnType => {
  const [notes, setNotes] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();

  useEffect(() => {
    if (selectedScale === undefined) {
      return;
    }
    const selectableNotes = getNotes(selectedScale);
    const newNotesSelection = selectThreeOptions(selectableNotes);
    setNotes(newNotesSelection);
  }, [selectedScale]);

  useEffect(() => {
    if (!answer || !notes.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [notes]);

  const toggleAllNotes = (): void => {
    const newNotesSelection = toggleAllOptions(notes);
    setNotes(newNotesSelection);
  };

  const setNewAnswer = (): Selectable => {
    const notesAnswer = getRandomItemThatIsSelected(notes);
    setAnswer(notesAnswer);
    return notesAnswer;
  };

  const updateIsSelectedNote = (displayName: string, newIsSelected: boolean): void => {
    const newNotes = updateIsSelected(notes, displayName, newIsSelected);
    setNotes(newNotes);
  };

  return { notes, answer, setNewAnswer, updateIsSelectedNote, toggleAllNotes };
};

export default useNotes;
