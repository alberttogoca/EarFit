import { useState } from 'react';
import { getScaleNames } from 'services/scaleService';

type HookReturnType = {
  scalesNames: string[];
  selectedScale: string;
  setNewSelectedScale: (scaleName: string) => void;
};

const useNotesScales = (): HookReturnType => {
  const scalesNames = getScaleNames();
  const [selectedScale, setSelectedScale] = useState<string>(scalesNames[0]);

  const setNewSelectedScale = (scaleName: string): void => {
    const newScale = scalesNames.find((s) => s === scaleName);
    setSelectedScale(newScale);
  };

  return { scalesNames, selectedScale, setNewSelectedScale };
};

export default useNotesScales;
