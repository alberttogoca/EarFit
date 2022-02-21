import { useEffect, useState } from 'react';
import { getScales } from 'services/scaleService';
import { Answer, reverseAllItemValues } from 'utils/Types';

type HookReturnType = {
  scales: Answer[];
  changeDirection: () => void;
};

const useScales = (): HookReturnType => {
  const [scales, setScales] = useState<Answer[]>([]);

  useEffect(() => {
    const newScales = getScales();
    setScales(newScales);
  }, []);

  //TODO: Extract
  const changeDirection = (): void => {
    const newScales = reverseAllItemValues(scales);
    setScales(newScales);
  };

  return { scales, changeDirection };
};

export default useScales;
