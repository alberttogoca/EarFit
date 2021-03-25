import 'react-piano/dist/styles.css';

import DimensionsProvider from 'components/DimensionsProvider';
import useInstrument from 'hooks/useInstrument';
import { KeyboardShortcuts, MidiNumbers, Piano } from 'react-piano';

interface IProps {
  firstNote?: string;
  lastNote?: string;
}

export default function PianoBasic({ firstNote, lastNote }: IProps): JSX.Element {
  //default
  let start = 'c3';
  let end = 'c4';
  const instrument = useInstrument();

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
