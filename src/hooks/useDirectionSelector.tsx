import { useState } from 'react';

type HookReturnType = {
  direction: boolean;
  changeDirection: () => void;
};

export const useDirectionSelector = (): HookReturnType => {
  const [direction, setDirection] = useState<boolean>(true);

  const changeDirection = (): void => {
    setDirection(!direction);
  };

  return { direction, changeDirection };
};

export default useDirectionSelector;
