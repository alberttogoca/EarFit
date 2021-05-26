import { Configuration, Title } from 'components/Exercise';
import ExerciseLayout from 'components/Layout/ExerciseLayout';
import { Menu } from 'components/Menu';
import { Piano as PianoComponent } from 'components/Piano';
import React from 'react';

export default function Piano(): JSX.Element {
  return (
    <>
      <ExerciseLayout col1={<Menu />} col3={<Configuration page="Piano"></Configuration>}>
        <Title>Piano</Title>
        <PianoComponent firstNote="c3" lastNote="b4" />
      </ExerciseLayout>
    </>
  );
}
