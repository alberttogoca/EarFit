import { SelectInstrumentButtonGroup } from 'components/Exercise';
import { ActiveOptionsButtonGroup } from 'components/Exercise/ActiveOptionsButtonGroup';
import { NotePlayer } from 'context/soundfont-wrapper';
import React, { useState } from 'react';
import { Dropdown, OverlayTrigger, ToggleButton, Tooltip } from 'react-bootstrap';

interface IProps {
  page?: string;
  options?: string[];
  instrument?: NotePlayer;
}

export const Configuration = ({ page, options }: IProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Options</h1>
      </div>

      {page == 'Notes' && (
        <div className="p-3">
          <p className="lead">
            Scale
            <OverlayTrigger
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="1">Select the scale from which the notes are taken</Tooltip>}
            >
              <img src="/images/tooltipIcon.png" alt="tooltip" width="15" height="15"></img>
            </OverlayTrigger>
          </p>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Scale
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Major</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Dorian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Phrygian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Lydian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Mixolydian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Aeolian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Locrian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}

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
              <ActiveOptionsButtonGroup options={options} />
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
