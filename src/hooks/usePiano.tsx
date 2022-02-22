import { useInstrumentContext } from 'context/EarfitContext';
import { KeyboardShortcuts, MidiNumbers } from 'react-piano';

type HookReturnType = {
  noteRange: { first: string; last: string };
  keyboardShortcuts: { firstnote: string; lastnote: string };
  playNote: (note: string) => void;
  stopNote: (note: string) => void;
  disabled: boolean;
};

const usePiano = (firstNote?: string, lastNote?: string): HookReturnType => {
  const { instrument } = useInstrumentContext();
  const disabled = instrument ? true : false;
  const hasNotes = firstNote && lastNote;
  const startNote = hasNotes ? firstNote : 'c3';
  const endNote = hasNotes ? lastNote : 'c4';

  const noteRange = {
    first: MidiNumbers.fromNote(startNote),
    last: MidiNumbers.fromNote(endNote),
  };

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const playNote = (note: string): void => {
    instrument?.notePlayer?.play(note);
  };
  const stopNote = (note: string): void => {
    instrument?.notePlayer?.stop(note);
  };

  return { noteRange, keyboardShortcuts, playNote, stopNote, disabled };
};

export default usePiano;
