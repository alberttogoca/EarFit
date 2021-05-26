import { Note, Scale } from '@tonaljs/tonal';
import { useEffect, useState } from 'react';
import { getRandomItem } from 'utils/arrayUtils';

export interface Answer {
  name: string;
  value: string;
}

type HookReturnType = {
  notes: string[];
  options: string[];
  answer: Answer;
  setNewAnswer: () => Answer;
};

const useNotes = (): HookReturnType => {
  const [notes, setNotes] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<Answer>();

  const setNewAnswer = (): Answer => {
    const value = getRandomItem(notes);
    const name = Note.get(value).letter;
    const newAnswer = { name, value };
    setAnswer(newAnswer);
    return newAnswer;
  };

  useEffect(() => {
    const tonic = 'C';
    const octave = '3';
    const pattern = 'major';
    const modes = Scale.modeNames(tonic + octave + ' ' + pattern);
    const scaleList = modes.map(([r, n]) => Scale.get([r, n]));
    const noteList = scaleList[0].notes; //major
    const noteNames = noteList.map((n) => Note.get(n).letter);
    setNotes(noteList);
    setOptions(noteNames);
    const value = getRandomItem(noteList);
    const name = Note.get(value).letter;
    const newAnswer = { name, value };
    setAnswer(newAnswer);
  }, []);

  return { notes, options, answer, setNewAnswer };
};

export default useNotes;
