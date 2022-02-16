import { useState } from 'react';

type HookReturnType = {
  scalesNames: string[];
  selectedScale: string;
  setNewSelectedScale: (name: string) => void;
};

const useScaleDropdown = (): HookReturnType => {
  const scalesNames = ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
  const [selectedScale, setSelectedScale] = useState<string>(scalesNames[0]);

  const setNewSelectedScale = (name: string): void => {
    const newScale = scalesNames.find((s) => s === name);
    setSelectedScale(newScale);
  };

  return { scalesNames, selectedScale, setNewSelectedScale };
};

export default useScaleDropdown;
