import { useState } from 'react';

type HookReturnType = {
  selectedScale: string;
  setNewSelectedScale: (scaleName: string) => void;
};

const useNotesScales = (scalesNames: string[]): HookReturnType => {
  const [selectedScale, setSelectedScale] = useState<string>(scalesNames[0]);

  const setNewSelectedScale = (scaleName: string): void => {
    const newScale = scalesNames.find((s) => s === scaleName);
    setSelectedScale(newScale);
  };

  return { selectedScale, setNewSelectedScale };
};

export default useNotesScales;
