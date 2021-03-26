import Menu from 'components/Menu';
import { Options } from 'components/Options';
import PianoBasic from 'components/PianoBasic';
import useInstrument from 'hooks/useInstrument';

export default function Intervals(): JSX.Element {
  const instrument = useInstrument();
  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  function handleClick(): void {
    instrument.play('A3', {});
  }

  return (
    <>
      {/*Container*/}
      <div className="container-fluid bg-light ">
        {/*Fila*/}
        <div className="row p-3">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block  ">
            <Menu></Menu>
          </div>
          {/*Columna 2*/}
          <div className="col-lg-6 border p-3 shadow-lg ">
            <div className="d-flex justify-content-center p-3 ">
              <h1 className="display-4">Intervals</h1>
            </div>
            {/*PLAY SOUND*/}
            <div className="d-flex justify-content-center p-3 ">
              <button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true" onClick={handleClick}>
                Intervalo?
              </button>
            </div>
            {/*OPCIONES*/}
            <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
              <button type="button" className="btn btn-secondary" id="option1">
                {' '}
                M3{' '}
              </button>
              <button type="button" className="btn btn-secondary" id="option2">
                {' '}
                P4{' '}
              </button>
              <button type="button" className="btn btn-secondary" id="option3">
                {' '}
                P5{' '}
              </button>
            </div>
            {/*PIANO*/}
            <div className="d-flex justify-content-center p-3 ">
              <PianoBasic></PianoBasic>
            </div>
          </div>

          {/*Columna 3*/}
          <div className="col-sm border">
            <Options page="Intervals"></Options>
          </div>
        </div>
      </div>
    </>
  );
}