import { getSoundfontInstrument, InstrumentName, NotePlayer } from 'lib/soundfont-wrapper';

export interface Instrument {
  displayName: string;
  emoji: string;
  instrumentName: InstrumentName;
  notePlayer: NotePlayer;
}

export type { InstrumentName };

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
        notePlayer: await getNotePlayer('acoustic_guitar_nylon', true),
      },
      {
        displayName: 'Trumpet',
        emoji: '🎺',
        instrumentName: 'trumpet',
        notePlayer: await getNotePlayer('trumpet', true),
      },
    ];
  }
  return earfitInstrument;
};

const getNotePlayer = async (name: InstrumentName, isLocal = false): Promise<NotePlayer> => {
  //TODO: Check if exist file and not use isLocal
  const options = { gain: 10, nameToUrl: undefined };
  if (isLocal) {
    options.nameToUrl = (name: string) => 'instruments/' + name + '-mp3.js';
  }
  const newInstrument = await getSoundfontInstrument(name, options);
  return newInstrument;
};
