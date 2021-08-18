import { SelectInstrumentButtonGroup } from 'components/Exercise';
import { ActiveOptionsButtonItem } from 'components/Exercise/ActiveOptionsButtonItem';
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  options?: Selectable[];
  onOptionIsSelectedChange?: (option: Selectable, newValue: boolean) => void;
}

export const NotesConfiguration = ({ options, onOptionIsSelectedChange }: IProps): JSX.Element => {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Options</h1>
      </div>
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
                <ActiveOptionsButtonItem key={idx} option={option} onIsSelectedChange={onOptionIsSelectedChange} />
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
