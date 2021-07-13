import { SelectInstrumentButtonGroup, Tooltip } from 'components/Exercise';
import { NotePlayer } from 'context/soundfont-wrapper';
import { Dropdown } from 'react-bootstrap';

interface IProps {
  page?: string;
  options?: string[];
  instrument?: NotePlayer;
}

export const Configuration = ({ page, options }: IProps): JSX.Element => {
  function toggleOption(selectedOption: string): void {
    if (options.includes(selectedOption)) {
      console.log(`${selectedOption} removed`);
    } else {
      console.log(`${selectedOption} added`);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Options</h1>
      </div>

      {page == 'Notes' && (
        <div className="p-3">
          <p className="lead">
            Scale <Tooltip>Select the scale from which the notes are taken</Tooltip>
          </p>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Scale
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}

      {page == 'Scales' && (
        <div className="p-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              console.log('ascending');
            }}
          >
            ASCENDING
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              console.log('descending');
            }}
          >
            DESCENDING
          </button>
        </div>
      )}

      {page == 'Intervals' && (
        <div className="p-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              console.log('ascending');
            }}
          >
            ASCENDING
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              console.log('descending');
            }}
          >
            DESCENDING
          </button>
        </div>
      )}

      {/*ACTIVE NOTES*/}
      {options && (
        <div className="p-3">
          <p className="lead">
            Active Options <Tooltip>Select the options on which you would like to be tested</Tooltip>
          </p>

          <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
            <div>
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    toggleOption(option);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*ACTIVE INSTRUMENT*/}
      <div className="p-3">
        <p className="lead">
          Instrument <Tooltip>Select the instrument that plays</Tooltip>
        </p>
        <SelectInstrumentButtonGroup />
      </div>
    </>
  );
};
