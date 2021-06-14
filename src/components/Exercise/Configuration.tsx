import { useInstrumentContext } from 'context/SoundfontContext';

interface IProps {
  options?: string[];
}

export const Configuration = ({ options }: IProps): JSX.Element => {
  const { setNewInstrument } = useInstrumentContext();

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
              <button key={option} type="button" className="btn btn-secondary" onClick={() => {}}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3">
        <p className="lead">Instrument</p>
        <button
          type="button"
          className="btn btn-check btn-sm "
          aria-pressed="true"
          onClick={() => setNewInstrument('acoustic_guitar_nylon')}
        >
          Guitar
        </button>
        <button
          type="button"
          className="btn btn-check btn-sm  "
          aria-pressed="true"
          onClick={() => setNewInstrument('acoustic_grand_piano')}
        >
          Grand Piano
        </button>

        <button
          type="button"
          className="btn btn-check btn-sm   "
          aria-pressed="true"
          onClick={() => setNewInstrument('trumpet')}
        >
          Trumpet
        </button>
      </div>
    </>
  );
};
