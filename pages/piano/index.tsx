import { Configuration, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import Menu from 'components/Menu';
import PianoBasic from 'components/PianoBasic';
import React from 'react';

export default function Piano(): JSX.Element {
  return (
    <>
      <ExerciseLayout col1={<Menu></Menu>} col3={<Configuration page="Piano"></Configuration>}>
        <Title>Piano</Title>

        {/*PIANO*/}
        <div className="d-flex justify-content-center p-3 ">
          <PianoBasic firstNote="c3" lastNote="b4"></PianoBasic>
        </div>
      </ExerciseLayout>
    </>
  );
}
