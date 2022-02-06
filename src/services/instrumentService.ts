import { getSoundfontInstrument, InstrumentName, NotePlayer } from 'lib/soundfont-wrapper';

export interface Instrument {
  displayName: string;
  emoji: string;
  instrumentName: InstrumentName;
  notePlayer: NotePlayer;
  isLocal: boolean;
}

export type { InstrumentName };

export const InstrumentData: Instrument[] = [
  {
    displayName: 'Grand Piano',
    emoji: '🎹',
    instrumentName: 'acoustic_grand_piano',
    notePlayer: undefined,
    isLocal: true,
  },
  {
    displayName: 'Guitar',
    emoji: '🎸',
    instrumentName: 'acoustic_guitar_nylon',
    notePlayer: undefined,
    isLocal: true,
  },
  {
    displayName: 'Trumpet',
    emoji: '🎺',
    instrumentName: 'trumpet',
    notePlayer: undefined,
    isLocal: true,
  },
];

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
