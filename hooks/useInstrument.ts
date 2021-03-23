import { useState, useEffect } from "react";
import { getInstrument, NotePlayer } from "music-instrument-js";

const useInstrument = () => {
  const [instrument, setInstrument] = useState<NotePlayer>(undefined);
  useEffect(() => {
    const loadInstrument = async () => {
      console.log("Se crea el instrumento");      
      setInstrument(await getInstrument("acoustic_grand_piano"));
    };
    loadInstrument();
  }, []);

  return instrument;
}

export default useInstrument;