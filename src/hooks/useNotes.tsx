import { useScaleDropdown } from 'hooks';
import { useEffect, useState } from 'react';
import { getNotes, scalesNames } from 'services/noteService';
import Selectable, {
  getRandomItemThatIsSelected,
  selectAllOrThreeItems,
  selectThreeRandomItems,
  updateIsSelectedItem,
} from 'utils/Selectable';

type HookReturnType = {
  notes: Selectable[];
  answer: Selectable;
  scalesNames: string[];
  selectedScale: string;
  setNewAnswer: () => Selectable;
  setNewSelectedScale: (id: string) => void;
  updateIsSelected: (id: string, newValue: boolean) => void;
  selectAllOrThree: () => void;
};

const useNotes = (): HookReturnType => {
  const [notes, setNotes] = useState<Selectable[]>([]);
  const [answer, setAnswer] = useState<Selectable>();
  const { selectedScale, setNewSelectedScale } = useScaleDropdown();

  useEffect(() => {
    if (selectedScale === undefined) {
      return;
    }
    const selectableNotes = getNotes(selectedScale);
    const newNotesSelection = selectThreeRandomItems(selectableNotes);
    setNotes(newNotesSelection);
  }, [selectedScale]);

  useEffect(() => {
    if (!answer || !notes.find((n) => n.id === answer.id)?.isSelected) {
      setNewAnswer();
    }
  }, [notes]);

  const setNewAnswer = (): Selectable => {
    const newAnswer = getRandomItemThatIsSelected(notes);
    setAnswer(newAnswer);
    return newAnswer;
  };

  const updateIsSelected = (id: string, newIsSelected: boolean): void => {
    const newNotes = updateIsSelectedItem(notes, id, newIsSelected);
    setNotes(newNotes);
  };

  const selectAllOrThree = (): void => {
    const newNotesSelection = selectAllOrThreeItems(notes);
    setNotes(newNotesSelection);
  };

  return {
    notes,
    answer,
    scalesNames,
    selectedScale,
    setNewAnswer,
    setNewSelectedScale,
    updateIsSelected,
    selectAllOrThree,
  };
};

export default useNotes;
