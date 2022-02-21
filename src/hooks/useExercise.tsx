import { useEffect, useState } from 'react';
import { getIntervals } from 'services/intervalService';
import { getNotes } from 'services/noteService';
import { getScales } from 'services/scaleService';
import { Answer, VariantExercise } from 'utils/Types';

type HookReturnType = {
  answers: Answer[];
};

const useExercise = (variant: VariantExercise, selectedScale?: string): HookReturnType => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    switch (variant) {
      case 'notes':
        setAnswers(getNotes(selectedScale));
        break;
      case 'intervals':
        setAnswers(getIntervals());
        break;
      case 'scales':
        setAnswers(getScales());
        break;
    }
  }, [selectedScale, variant]);

  return { answers };
};

export default useExercise;
