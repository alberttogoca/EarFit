import 'react-piano/dist/styles.css';

import DimensionsProvider from 'components/DimensionsProvider';
import { useInstrumentContext } from 'context/SoundfontContext';
import { KeyboardShortcuts, MidiNumbers, Piano } from 'react-piano';

interface IProps {
  firstNote?: string;
  lastNote?: string;
}

export const PianoBasic = ({ firstNote, lastNote }: IProps): JSX.Element => {
  const { instrument } = useInstrumentContext();
  const hasNotes = firstNote && lastNote;
  const startNote = hasNotes ? firstNote : 'c3';
  const endNode = hasNotes ? lastNote : 'c4';

  const noteRange = {
    first: MidiNumbers.fromNote(startNote),
    last: MidiNumbers.fromNote(endNode),
  };

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <>
      <DimensionsProvider>
        {({ newWidth }) => (
          <Piano
            noteRange={noteRange}
            width={newWidth}
            playNote={(note: string) => instrument?.play(note)}
            stopNote={(note: string) => instrument?.stop(note)}
            keyboardShortcuts={keyboardShortcuts}
            disabled={!instrument}
          ></Piano>
        )}
      </DimensionsProvider>
    </>
  );
};
