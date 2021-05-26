import 'react-piano/dist/styles.css';

import { useInstrumentContext } from 'context/SoundfontContext';
import { KeyboardShortcuts, MidiNumbers, Piano as ReactPiano } from 'react-piano';
import useMeasure from 'react-use-measure';

interface IProps {
  firstNote?: string;
  lastNote?: string;
}

export const Piano = ({ firstNote, lastNote }: IProps): JSX.Element => {
  const { instrument } = useInstrumentContext();
  const [containerRef, containerSize] = useMeasure();
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
    <div className="m-3" ref={containerRef}>
      <ReactPiano
        noteRange={noteRange}
        width={containerSize.width}
        playNote={(note: string) => instrument?.play(note)}
        stopNote={(note: string) => instrument?.stop(note)}
        keyboardShortcuts={keyboardShortcuts}
        disabled={!instrument}
      ></ReactPiano>
    </div>
  );
};
