import 'react-piano/dist/styles.css';

import { usePiano } from 'hooks';
import { Piano as ReactPiano } from 'react-piano';
import useMeasure from 'react-use-measure';

interface Props {
  firstNote?: string;
  lastNote?: string;
}

export default function Piano({ firstNote, lastNote }: Props): JSX.Element {
  const { noteRange, keyboardShortcuts, playNote, stopNote, disabled } = usePiano(firstNote, lastNote);
  const [containerRef, containerSize] = useMeasure();

  return (
    <div className="m-3" ref={containerRef}>
      <ReactPiano
        noteRange={noteRange}
        width={containerSize.width}
        playNote={playNote}
        stopNote={stopNote}
        keyboardShortcuts={keyboardShortcuts}
        disabled={disabled}
      ></ReactPiano>
    </div>
  );
}
