import { InstrumentName, NotePlayer } from 'context/soundfont-wrapper';
import { useInstrumentContext } from 'context/SoundfontContext';
import { ReactNode } from 'react';

interface Props {
  title: string;
  instrument?: NotePlayer;
  children?: ReactNode;
  emoji: string;
  instrumentName: InstrumentName;
}

export const InstrumentButton = ({ title, emoji, instrumentName }: Props): JSX.Element => {
  const { setNewInstrument } = useInstrumentContext();

  return (
    <>
      {/*SELECT INSTRUMENT*/}
      <button
        type="button"
        className="btn btn-check btn-sm   "
        aria-pressed="true"
        onClick={() => setNewInstrument(instrumentName)}
      >
        <span role="img" aria-label="trumpet">
          {emoji}
        </span>
        {title}
      </button>
    </>
  );
};
