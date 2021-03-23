import React, { useState, useEffect } from "react";
import { getRandomItem } from "utils/arrayUtils";
import { Options } from "components/Options";
import { Scale } from "@tonaljs/tonal";
import Menu from "components/Menu";
import PianoBasic from "components/PianoBasic";
import useInstrument from "hooks/useInstrument";

export default function Notas() {
  const instrument = useInstrument();
  const [notes, setNotes] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>();

  useEffect(() => {
    const notes = Scale.get("C major").notes;
    const note = getRandomItem(notes);
    setNotes(notes);
    setAnswer(note);
    console.log(note);

  }, []);

  function handlePlay() {
    instrument.play(`${answer}3` , {});
    console.log(`Now playing: ${answer}`);

  }

  function handleOption(option: string) {
    console.log(option === answer);
    if (option === answer){
      const note = getRandomItem(notes);
      setAnswer(note);
      instrument.play(`${note}3` , {});
    }
  }

  
  return (
    <>
      {/*Container*/}
      <div className="container-fluid bg-light">
        {/*Fila*/}
        <div className="row p-3 ">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block ">
            <Menu></Menu>
          </div>
          {/*Columna 2*/}
          <div className="col-lg-6 border p-3  shadow-lg">
            <div className="d-flex justify-content-center p-3 ">
              <h1 className="display-4 ">Notas</h1>
            </div>

            {/*EJERCICIO NOTAS*/}
            {/*PLAY SOUND*/}
            <div className="d-flex justify-content-center p-3 ">
              <button type="button" className="btn btn-primary btn-lg  p-3"  aria-pressed="true" onClick={handlePlay}>
                Nota?
              </button>
            </div>
            {/*OPCIONES*/}
            <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
              {notes.map(note => 
                <button key={note} type="button" className="btn btn-secondary" onClick={() => handleOption(note)}>
                  {note}
                </button> )}
            </div>
            {/*FIN EJERCICIO NOTAS*/}

            {/*PIANO*/}
            <div className="d-flex justify-content-center p-3 ">
              <PianoBasic></PianoBasic>
            </div>
          </div>

          {/*Columna 3*/}
          <div className="col-sm border">
            <Options page="Notas"></Options>
          </div>
        </div>
      </div>
    </>
  );
}

/*<button type="button" className="btn btn-secondary" id="option1">
                C
              </button>
              <button type="button" className="btn btn-secondary" id="option2">
                D
              </button>
              <button type="button" className="btn btn-secondary" id="option3">
                E
              </button>
              <button type="button" className="btn btn-secondary" id="option4">
                F
              </button>
              <button type="button" className="btn btn-secondary" id="option5">
                G
              </button>
              <button type="button" className="btn btn-secondary" id="option6">
                A
              </button>
              <button type="button" className="btn btn-secondary" id="option7">
                B
              </button> */