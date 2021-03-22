import React, { useState, useEffect } from "react";
import PianoBasic from "../../components/PianoBasic";
import { getInstrument, NotePlayer } from "music-instrument-js";
import { Options } from "../../components/Options/Options";
import Menu from "../../components/Menu/Menu";
import { Scale } from "@tonaljs/tonal";
import { getRandomItem } from "../../utils/arrayUtils";

export default function Notas() {
  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const [instrument, setInstrument] = useState<NotePlayer>(undefined);
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    const loadInstrument = async () => {
      setInstrument(await getInstrument("acoustic_grand_piano"));
    };
    const notes = Scale.get("C major").notes;
    setNotes(notes);
    loadInstrument();
  }, []);

  async function handleClick() {
    const note = getRandomItem(notes);
    instrument.play(`${note}3` , {});
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
              <button
                type="button"
                className="btn btn-primary btn-lg  p-3"
                aria-pressed="true"
                onClick={handleClick}
              >
                Nota?
              </button>
            </div>
            {/*OPCIONES*/}
            <div
              className="btn-group btn-group-toggle d-flex justify-content-center"
              data-toggle="buttons"
            >
              <button type="button" className="btn btn-secondary" id="option1">
                {" "}
                DO{" "}
              </button>
              <button type="button" className="btn btn-secondary" id="option2">
                {" "}
                RE{" "}
              </button>
              <button type="button" className="btn btn-secondary" id="option3">
                {" "}
                MI{" "}
              </button>
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
