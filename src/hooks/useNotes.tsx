import { useEffect, useState } from 'react';
import { getNotes } from 'services/noteService';
import { Answer } from 'utils/Types';

type HookReturnType = {
  notes: Answer[];
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
