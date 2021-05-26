import { useInstrumentContext } from 'context/SoundfontContext';

interface IProps {
  page: string;
}

export const Configuration = ({ page }: IProps): JSX.Element => {
  const { setNewInstrument } = useInstrumentContext();

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <h1>Options</h1>
      </div>
      <div className="p-3">
        <p className="lead">This must have de config of the exercise {page}</p>
      </div>
      <button
        type="button"
        className="btn btn-check btn-sm  p-3"
        aria-pressed="true"
        onClick={() => setNewInstrument('acoustic_guitar_nylon')}
      >
        Guitar
      </button>
      <button
        type="button"
        className="btn btn-check btn-sm  p-3"
        aria-pressed="true"
        onClick={() => setNewInstrument('acoustic_grand_piano')}
      >
        Grand Piano
      </button>
      <button
        type="button"
        className="btn btn-check btn-sm  p-3"
        aria-pressed="true"
        onClick={() => setNewInstrument('marimba')}
      >
        Marimba
      </button>
      <button
        type="button"
        className="btn btn-check btn-sm  p-3"
        aria-pressed="true"
        onClick={() => setNewInstrument('violin')}
      >
        Violin
      </button>
      <button
        type="button"
        className="btn btn-check btn-sm  p-3"
        aria-pressed="true"
        onClick={() => setNewInstrument('trumpet')}
      >
        Trumpet
      </button>
    </>
  );
};
