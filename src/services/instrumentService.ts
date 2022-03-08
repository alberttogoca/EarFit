import { getSoundfontInstrument, NotePlayer } from 'lib/soundfont-wrapper';
import { Instrument } from 'types';

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

export const getInstruments = async (): Promise<Instrument[]> => {
  const instruments = await Promise.all(
    InstrumentData.map(async (i) => {
      return { ...i, notePlayer: await getNotePlayer(i) };
    })
  );
  return instruments;
};

const getNotePlayer = async (instrument: Instrument): Promise<NotePlayer> => {
  const toUrl = (name: string): string => 'soundfonts/' + name + '-mp3.js';
  const options = { gain: 10, nameToUrl: instrument.isLocal ? toUrl : undefined };
  const newInstrument = await getSoundfontInstrument(instrument.instrumentName, options);
  return newInstrument;
};
