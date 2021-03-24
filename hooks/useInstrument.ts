import { getInstrument, NotePlayer } from 'music-instrument-js';
import { useEffect, useState } from 'react';

const useInstrument = (): NotePlayer => {
  const [instrument, setInstrument] = useState<NotePlayer>(undefined);
  useEffect(() => {
    const loadInstrument = async (): Promise<void> => {
      console.log('Se crea el instrumento');
      setInstrument(await getInstrument('acoustic_grand_piano'));
    };
    loadInstrument();
  }, []);

  return instrument;
};

export default useInstrument;
