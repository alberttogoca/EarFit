import { InstrumentButton } from 'components/Exercise';
import { NotePlayer } from 'context/soundfont-wrapper';
import { useInstrumentContext } from 'context/SoundfontContext';

interface IProps {
  page?: string;
  options?: string[];
  instrument?: NotePlayer;
}

export const Configuration = ({ page, options }: IProps): JSX.Element => {
  const { setNewInstrument } = useInstrumentContext();

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

      <div className="p-3">
        <p className="lead">Scale</p>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Major
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-3">
        <p className="lead">Active Options</p>

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

      <div className="p-3">
        <p className="lead">Instrument</p>
        <InstrumentButton title="Guitar" emoji="🎸" instrumentName="acoustic_guitar_nylon" />
        <InstrumentButton title="Grand Piano" emoji="🎹" instrumentName="acoustic_grand_piano" />
        <InstrumentButton title="Trumpet" emoji="🎺" instrumentName="trumpet" />
      </div>
    </>
  );
};
