import { useScaleDropdown } from 'hooks';
import { useAnswerButtons, useAnswerToggles, usePlayButton } from 'hooks';
import { useEffect, useState } from 'react';
import { getNotes } from 'services/noteService';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  title: string;
  answerToggles: Selectable[];
  answerButtons: Selectable[];
  answer: Selectable;
  scalesNames: string[];
  selectedScale: string;
  setNewSelectedScale: (id: string) => void;
  updateIsSelected: (id: string, newValue: boolean) => void;
  selectAllOrThree: () => void;
  label: string;
  playNote: (selectable: Selectable) => void;
  handleAnswerButtonClick: (selectedOption: Selectable) => boolean;
  streak: number;
};

const useNotes = (): HookReturnType => {
  const title = 'Notes';
  const [notes, setNotes] = useState<Selectable[]>([]);
  const { scalesNames, selectedScale, setNewSelectedScale } = useScaleDropdown();
  const { label, playNote } = usePlayButton('Note?');
  const { answerToggles, updateIsSelected, selectAllOrThree } = useAnswerToggles(notes);
  const { answerButtons, answer, handleAnswerButtonClick, streak } = useAnswerButtons(answerToggles, playNote);
  //isLoading

  useEffect(() => {
    if (selectedScale === undefined) {
      return;
    }
    setNotes(getNotes(selectedScale));
  }, [selectedScale]);

  return {
    title,
    answerToggles,
    answerButtons,
    answer,
    scalesNames,
    selectedScale,
    setNewSelectedScale,
    updateIsSelected,
    selectAllOrThree,
    label,
    playNote,
    handleAnswerButtonClick,
    streak,
  };
};

export default useNotes;
