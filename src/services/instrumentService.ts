import { Instrument, Instruments as InstrumentData } from 'data/instruments';
import { getSoundfontInstrument, InstrumentName, NotePlayer } from 'lib/soundfont-wrapper';

export type { InstrumentName };

let instruments: Instrument[] = undefined;

export const getInstruments = async (): Promise<Instrument[]> => {
  if (instruments === undefined) {
    instruments = await Promise.all(
      InstrumentData.map(async (i) => {
        return { ...i, notePlayer: await getNotePlayer(i) };
      })
    );
  }
  return instruments;
};

const getNotePlayer = async (instrument: Instrument): Promise<NotePlayer> => {
  //TODO: Check if exist file and not use isLocal
  const options = { gain: 10, nameToUrl: undefined };
  if (instrument.isLocal) {
    options.nameToUrl = (name: string) => 'instruments/' + name + '-mp3.js';
  }
  const newInstrument = await getSoundfontInstrument(instrument.instrumentName, options);
  return newInstrument;
};
