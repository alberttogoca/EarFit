import { getInstrument as GetSoundfontInstrument, InstrumentName, NotePlayer } from 'context/soundfont-wrapper';

export interface Instrument {
  displayName: string;
  emoji: string;
  instrumentName: InstrumentName;
  notePlayer: NotePlayer;
}

let earfitInstrument: Instrument[] = undefined;

export const getInstruments = async (): Promise<Instrument[]> => {
  if (earfitInstrument === undefined) {
    earfitInstrument = [
      {
        displayName: 'Grand Piano',
        emoji: '🎹',
        instrumentName: 'acoustic_grand_piano',
        notePlayer: await getNotePlayer('acoustic_grand_piano', true),
      },
      {
        displayName: 'Guitar',
        emoji: '🎸',
        instrumentName: 'acoustic_guitar_nylon',
        notePlayer: await getNotePlayer('acoustic_guitar_nylon'),
      },
      {
        displayName: 'Trumpet',
        emoji: '🎺',
        instrumentName: 'trumpet',
        notePlayer: await getNotePlayer('trumpet'),
      },
    ];
  }
  return earfitInstrument;
};

export const getInstrument = async (name: InstrumentName): Promise<Instrument> => {
  return (await getInstruments()).find((i) => i.instrumentName === name);
};

const getNotePlayer = async (name: InstrumentName, isLocal = false): Promise<NotePlayer> => {
  //TODO: Check if exist file and no use isLocal
  const options = { gain: 10, nameToUrl: undefined };
  if (isLocal) {
    options.nameToUrl = (name: string) => 'instruments/' + name + '-mp3.js';
  }
  const newInstrument = await GetSoundfontInstrument(name, options);
  return newInstrument;
};
