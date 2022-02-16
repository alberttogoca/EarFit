import { useState } from 'react';

type HookReturnType = {
  selectedScale: string;
  setNewSelectedScale: (name: string) => void;
};

const useNotesScales = (scales: string[]): HookReturnType => {
  const [selectedScale, setSelectedScale] = useState<string>(scales[0]);

  const setNewSelectedScale = (name: string): void => {
    const newScale = scales.find((s) => s === name);
    setSelectedScale(newScale);
  };

  return { selectedScale, setNewSelectedScale };
};

export default useNotesScales;
