import { useEffect, useState } from 'react';
import { getIntervals } from 'services/intervalService';
import { Answer } from 'utils/Types';

type HookReturnType = {
  intervals: Answer[];
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<Answer[]>([]);

  useEffect(() => {
    const newIntervals = getIntervals();
    setIntervals(newIntervals);
  }, []);

  return { intervals };
};

export default useIntervals;
