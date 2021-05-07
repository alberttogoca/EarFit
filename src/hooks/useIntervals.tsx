import { Interval, Scale } from '@tonaljs/tonal';
import { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

interface IntervalNotes {
  note1: string;
  note2: string;
}

interface Answer {
  name: string;
  value: IntervalNotes;
}

type HookReturnType = {
  notes: string[];
  options: string[];
  answer: Answer;
  setNewAnswer: () => Answer;
};

const useIntervals = (): HookReturnType => {
  const [notes, setNotes] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<Answer>(undefined);

  const setNewAnswer = (): Answer => {
    const n1 = getRandomItem(notes);
    const n2 = getRandomItem(notes);
    const value = { note1: n1, note2: n2 };
    const name = Interval.distance(value.note1, value.note2).slice(-2);
    const newAnswer = { name, value };
    setAnswer(newAnswer);
    return newAnswer;
  };

  useEffect(() => {
    const tonic = 'C';
    const octave = '3';
    const pattern = 'major';
    const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
    const scaleList = modes.map(([root, name]) => Scale.get([root, name]));
    const noteList = scaleList[0].notes; //major
    setNotes(noteList);
    //INFO: +/-: direccion, 2: distancia notas, P/M/m/A/dd/d?: justa/mayor/menor/aumentado/disminuido/? (semitonos)
    //const almostAllIntervals = ['1P', '2m', '2M', '3m', '3M', '4P', '4A', '5P', '6m', '6M', '7m', '7M'];

    const intervalsSet = new Set<string>();
    const allPosbileIntervals = noteList.map(
      (firstnote) => noteList.map((secondnote) => Interval.distance(firstnote, secondnote).slice(-2)) //slice es para quitar la direccion
    );
    allPosbileIntervals.forEach((intervalList) => intervalList.forEach((item) => intervalsSet.add(item)));
    const intervals = Array.from(intervalsSet).sort();
    setOptions(intervals);

    const n1 = getRandomItem(noteList);
    const n2 = getRandomItem(noteList); // TO DO: ¿que esta nota sea siempre mayor?
    const value = { note1: n1, note2: n2 };
    const name = Interval.distance(value.note1, value.note2).slice(-2);
    const answer = { name, value };
    setAnswer(answer);
  }, []);

  return { notes, options, answer, setNewAnswer };
};

export default useIntervals;
