import { NotePlayer } from 'context/soundfont-wrapper';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  title: string;
  instrument: NotePlayer;
  onClick: MouseEventHandler;
  children?: ReactNode;
}

export const PlayButton = ({ instrument, onClick, title }: Props): JSX.Element => {
  return (
    <>
      {/*PLAY SOUND*/}
      <div className="d-flex justify-content-center p-3 ">
        {instrument && (
          <button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true" onClick={onClick}>
            {title}
          </button>
        )}
        {!instrument && <div>Loading instrument...</div>}
      </div>
    </>
  );
};
