import { useState } from 'react';

type HookReturnType = {
  scalesNames: string[];
  selectedScale: string;
  setNewSelectedScale: (name: string) => void;
};

const useNotesIntervals = (intervals: string[]): HookReturnType => {
  const [selectedScale, setSelectedScale] = useState<string>(scalesNames[0]);

  const setNewSelectedScale = (name: string): void => {
    const newScale = scalesNames.find((s) => s === name);
    setSelectedScale(newScale);
  };

  return { scalesNames, selectedScale, setNewSelectedScale };
};

export default useNotesIntervals;
