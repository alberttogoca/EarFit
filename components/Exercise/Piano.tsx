import PianoBasic from 'components/PianoBasic';
import React from 'react';

export const Piano = (): JSX.Element => {
  return (
    <>
      {/*PIANO*/}
      <div className="d-flex justify-content-center p-3 ">
        <PianoBasic></PianoBasic>
      </div>
    </>
  );
};
