import 'react-piano/dist/styles.css';

import DimensionsProvider from 'components/DimensionsProvider';
import { getInstrument, NotePlayer } from 'music-instrument-js';
import React, { useEffect, useState } from 'react';
import { KeyboardShortcuts, MidiNumbers, Piano } from 'react-piano';

export default function PianoBasic(props: unknown): JSX.Element {
  const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f5'),
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
            {...props}
          ></Piano>
        )}
      </DimensionsProvider>
    </>
  );
}
