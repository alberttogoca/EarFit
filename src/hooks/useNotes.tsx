import { useEffect, useState } from 'react';
import { getNotes } from 'services/noteService';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  notes: Selectable[]; //no tiene que ser selectable, tiene que ser un objeto minimo!!
};

const useNotes = (selectedScale: string): HookReturnType => {
  const [notes, setNotes] = useState<Selectable[]>([]);

  useEffect(() => {
    const newNotes = getNotes(selectedScale);
    setNotes(newNotes);
  }, [selectedScale]);

  return { notes };
};

export default useNotes;
