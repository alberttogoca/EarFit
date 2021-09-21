import { useState } from 'react';

type HookReturnType = {
  streak: number;
  clearStreak: () => void;
  IncrementStreak: () => void;
};

const useStreak = (): HookReturnType => {
  const [streak, setStreak] = useState(0);

  const clearStreak = (): void => setStreak(0);

  const IncrementStreak = (): void => setStreak(streak + 1);

  return { streak, clearStreak, IncrementStreak };
};

export default useStreak;
