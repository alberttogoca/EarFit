import { useEffect, useState } from 'react';
import { getNotes, scalesNames } from 'services/noteService';
import Selectable, {
  getRandomItemThatIsSelected,
  selectThreeOptions,
  toggleAllOptions,
  updateIsSelected,
} from 'utils/Selectable';

type HookReturnType = {
  notes: Selectable[];
  answer: Selectable;
  scalesNames: string[];
  selectedScale: string;

  setNewAnswer: () => Selectable;
  updateIsSelectedNote: (displayName: string, newValue: boolean) => void;
  toggleAllNotes: () => void;
  setNewSelectedScale: (name: string) => void;
};

const useNotes = (): HookReturnType => {
  const [notes, setNotes] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();
  const [selectedScale, setSelectedScale] = useState<string>(scalesNames[0]);

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

  const setNewSelectedScale = (name: string): void => {
    const newScale = scalesNames.find((s) => s === name);
    if (newScale) {
      setSelectedScale(newScale);
    }
  };

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

  return {
    notes,
    answer,
    scalesNames,
    selectedScale,
    setNewAnswer,
    updateIsSelectedNote,
    toggleAllNotes,
    setNewSelectedScale,
  };
};

export default useNotes;
