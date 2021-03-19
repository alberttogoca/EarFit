import React, { useState, useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import 'react-piano/dist/styles.css';
import Soundfont, { Player } from 'soundfont-player';
import utilStyles from 'piano.module.css'

export default function PianoBasic(props) {

  const noteRange = {
    first: MidiNumbers.fromNote("c3"),
    last: MidiNumbers.fromNote("f5"),
  };

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  
  const [instrument, setInstrument] = useState<Player>(undefined);
  
    useEffect(() => {
      const loadInstrument = async () => {
        const piano = await Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano');
        setInstrument(piano);
      }
      loadInstrument();
    }, []);

  return (
    <>
    <div className="container-fluid">
        <Piano 
          noteRange={noteRange}
          width={500}
          playNote={(note)=>{instrument.play(note)}}
          stopNote={(note)=>{instrument.stop(note)}}
          keyboardShortcuts={keyboardShortcuts}
          disabled={!instrument}
          {...props}
        ></Piano>  
        </div>
    </>
  );
}
