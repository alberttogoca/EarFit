import 'react-piano/dist/styles.css';

import DimensionsProvider from 'components/DimensionsProvider';
import { getInstrument, NotePlayer } from 'music-instrument-js';
import React, { useEffect, useState } from 'react';
import { KeyboardShortcuts, MidiNumbers, Piano } from 'react-piano';
interface IProps {
  firstNote?: string;
  lastNote?: string;
}
export default function PianoBasic({ firstNote, lastNote }: IProps): JSX.Element {
  //default
  let start = 'c3';
  let end = 'c4';

  if (firstNote && lastNote) {
    start = firstNote;
    end = lastNote;
  }

  const noteRange = {
    first: MidiNumbers.fromNote(start),
    last: MidiNumbers.fromNote(end),
  };

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const [instrument, setInstrument] = useState<NotePlayer>(undefined);

  useEffect(() => {
    const loadInstrument = async (): Promise<void> => {
      const piano = await getInstrument('acoustic_grand_piano');
      setInstrument(piano);
    };
    loadInstrument();
  }, []);

  return (
    <>
      <DimensionsProvider>
        {({ containerWidth }) => (
          <Piano
            noteRange={noteRange}
            width={containerWidth}
            playNote={(note) => {
              instrument.play(note, {});
            }}
            stopNote={(note) => {
              instrument.stop(note);
            }}
            keyboardShortcuts={keyboardShortcuts}
            disabled={!instrument}
          ></Piano>
        )}
      </DimensionsProvider>
    </>
  );
}
