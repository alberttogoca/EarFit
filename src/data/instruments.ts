import { InstrumentName, NotePlayer } from 'lib/soundfont-wrapper';

export interface Instrument {
  displayName: string;
  emoji: string;
  instrumentName: InstrumentName;
  notePlayer: NotePlayer;
  isLocal: boolean;
}

export type { InstrumentName };

export const Instruments: Instrument[] = [
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
