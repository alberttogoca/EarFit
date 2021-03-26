import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import Options from 'components/Options';
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
      <ExerciseLayout col1={<Menu></Menu>} col3={<Options page="Intervals"></Options>}>
        {/*TITLE*/}
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
            M3
          </button>
          <button type="button" className="btn btn-secondary" id="option2">
            P4
          </button>
          <button type="button" className="btn btn-secondary" id="option3">
            P5
          </button>
        </div>

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
