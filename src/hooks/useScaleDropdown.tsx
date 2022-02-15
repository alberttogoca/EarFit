import { useEffect, useState } from 'react';

type HookReturnType = {
  scalesNames: string[];
  selectedScale: string;
  setNewSelectedScale: (name: string) => void;
};

const scalesNames = ['Major', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];

const useScaleDropdown = (): HookReturnType => {
  const [selectedScale, setSelectedScale] = useState<string>(undefined);

  useEffect(() => {
    setSelectedScale(scalesNames[0]);
  }, []);

  const setNewSelectedScale = (name: string): void => {
    const newScale = scalesNames.find((s) => s === name);
    if (newScale) {
      setSelectedScale(newScale);
    }
  };

  return { scalesNames, selectedScale, setNewSelectedScale };
};

export default useScaleDropdown;
