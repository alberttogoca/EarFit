import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import { Options } from 'components/Options';
import PianoBasic from 'components/PianoBasic';

export default function Piano(): JSX.Element {
  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Options page="Piano"></Options>}>
        {/*TITLE*/}
        <div className="d-flex justify-content-center p-3 ">
          <h1 className="display-4">Piano</h1>
        </div>

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic firstNote="c3" lastNote="b4"></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
