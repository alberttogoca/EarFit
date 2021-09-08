import { InstrumentSelector } from 'components/Configuration';
import { NotePlayer } from 'context/soundfont-wrapper';
import { useState } from 'react';
import { OverlayTrigger, ToggleButton, Tooltip } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  page?: string;
  options?: Selectable[];
  instrument?: NotePlayer;
}

export const ConfigurationPlaceholder = ({ page }: IProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Options</h1>
      </div>

      {(page == 'Scales' || page == 'Intervals') && (
        <div className="p-3">
          <ToggleButton
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            value={0}
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          >
            {' '}
            ASCENDING
          </ToggleButton>
          <ToggleButton
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            value={0}
            checked={!checked}
            onChange={() => {
              setChecked(!checked);
            }}
          >
            {' '}
            DESCENDING
          </ToggleButton>
        </div>
      )}

      {/*ACTIVE INSTRUMENT*/}
      <div className="p-3">
        <p className="lead">
          Instrument
          <OverlayTrigger
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="3">Select the instrument that plays</Tooltip>}
          >
            <img src="/images/tooltipIcon.png" alt="tooltip" width="15" height="15"></img>
          </OverlayTrigger>
        </p>

        <InstrumentSelector />
      </div>
    </>
  );
};
