import React, { useState, useEffect } from 'react';
import { getInstrument, startNote, stopNote, NotePlayer } from "music-instrument-js";
import PianoBasic from "components/PianoBasic";
import { Options } from 'components/Options';
import Menu from "components/Menu";

export default function Escalas() {

 // const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const [instrument, setInstrument] = useState<NotePlayer>(undefined);

   useEffect(() => {
        const loadInstrument = async () => {
        const piano = await getInstrument('acoustic_grand_piano');
        setInstrument(piano);
      }
      loadInstrument();
    }, []);

  async function handleClick() {
    instrument.play('A3', {})
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
                <div className="d-flex justify-content-center p-3 "><h1 className="display-4">Escalas</h1></div>               
                {/*PLAY SOUND*/}
                <div className="d-flex justify-content-center p-3 "><button type="button" className="btn btn-primary btn-lg  p-3" aria-pressed="true"onClick={handleClick}>Escala?</button></div>
                {/*OPCIONES*/}
                <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
                    <button type="button" className="btn btn-secondary" id="option1" > DO </button>
                    <button type="button" className="btn btn-secondary" id="option2"> RE </button>
                    <button type="button" className="btn btn-secondary" id="option3" > MI </button>
                </div>
                {/*PIANO*/}
                <div className="d-flex justify-content-center p-3 "><PianoBasic></PianoBasic></div>
                </div>

                {/*Columna 3*/}
                <div className="col-sm border">
                <Options page="Escalas"></Options>
                </div>
            </div>
        </div>

    </>
  );
}
