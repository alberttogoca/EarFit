import { useEffect, useState } from 'react';
import { getNotes } from 'services/noteService';
import { Answer } from 'utils/Selectable';

type HookReturnType = {
  notes: Answer[]; //no tiene que ser selectable, tiene que ser un objeto minimo!!
};

const useNotes = (selectedScale: string): HookReturnType => {
  const [notes, setNotes] = useState<Answer[]>([]);

  useEffect(() => {
    const newNotes = getNotes(selectedScale);
    setNotes(newNotes);
  }, [selectedScale]);

  return { notes };
};

export default useNotes;
