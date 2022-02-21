import { useEffect, useState } from 'react';
import { getIntervals } from 'services/intervalService';
import { SelectableAnswer } from 'utils/Types';

type HookReturnType = {
  intervals: SelectableAnswer[];
};

const useIntervals = (): HookReturnType => {
  const [intervals, setIntervals] = useState<SelectableAnswer[]>([]);

  useEffect(() => {
    const newIntervals = getIntervals();
    setIntervals(newIntervals);
  }, []);

  return { intervals };
};

export default useIntervals;
