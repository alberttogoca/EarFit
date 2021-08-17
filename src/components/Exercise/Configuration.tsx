import { SelectInstrumentButtonGroup } from 'components/Exercise';
import { NotePlayer } from 'context/soundfont-wrapper';
import React, { useState } from 'react';
import { OverlayTrigger, ToggleButton, Tooltip } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

import { ActiveOptionsButtonItem } from './ActiveOptionsButtonItem';

interface IProps {
  page?: string;
  options?: Selectable[];
  instrument?: NotePlayer;
}

export const Configuration = ({ page, options }: IProps): JSX.Element => {
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

      {/*ACTIVE NOTES*/}
      {options && (
        <div className="p-3">
          <p className="lead">
            Active Options
            <OverlayTrigger
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="2">Select the options on which you would like to be tested</Tooltip>}
            >
              <img src="/images/tooltipIcon.png" alt="tooltip" width="15" height="15"></img>
            </OverlayTrigger>
          </p>

          <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
            <div>
              {options.map((option, idx) => (
                <ActiveOptionsButtonItem
                  key={idx}
                  option={option}
                  onIsSelectedChange={() => {
                    console.log('Active Options not implemented yet');
                  }}
                />
              ))}
            </div>
          </div>
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
        <SelectInstrumentButtonGroup />
      </div>
    </>
  );
};
