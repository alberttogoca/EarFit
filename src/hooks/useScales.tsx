import { useEffect, useState } from 'react';
import { getScales } from 'services/scaleService';
import { Answer } from 'utils/Types';

type HookReturnType = {
  scales: Answer[];
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<Answer[]>([]);

  useEffect(() => {
    const newScales = getScales();
    setScales(newScales);
  }, []);

  return { scales };
};

export default useScales;
