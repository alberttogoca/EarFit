import { useEffect, useState } from 'react';
import { getScales, Scale } from 'services/noteService';

type HookReturnType = {
  scales: Scale[];
  selectedScale: Scale;
  setNewSelectedScale: (name: string) => void;
};

const useNoteScales = (): HookReturnType => {
  const [scales, setScales] = useState<Scale[]>([]);
  const [selectedScale, setSelectedScale] = useState<Scale>(undefined);

  useEffect(() => {
    const newScales = getScales();
    setScales(newScales);
    setSelectedScale(newScales[0]);
  }, []);

  const setNewSelectedScale = (name: string): void => {
    const newScale = scales.find((s) => s.name === name);
    if (newScale) {
      setSelectedScale(newScale);
    }
  };

  return { scales, selectedScale, setNewSelectedScale };
};

export default useNoteScales;
