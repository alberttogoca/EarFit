import { instrument, InstrumentName, Player } from 'soundfont-player';

export type { InstrumentName, NotePlayer };
export { getSoundfontInstrument, startNote, stopNote };

type NotePlayer = {
  play: (
    noteName: string,
    when?: number,
    opts?: {
      duration?: number;
      gain?: number;
      attack?: number;
      decay?: number;
      sustain?: number;
      release?: number;
      adsr?: [number, number, number, number];
      loop?: boolean;
    }
  ) => Player;
  stop: (noteName?: string) => void;
  // eslint-disable-next-line
  schedule: (when?: number, events?: any[]) => Player;
  instrumentName: InstrumentName;
};

const instruments = new Map<InstrumentName, NotePlayer>();
const playingNotes = new Map<string, Player>();

const getAudioContext = (): AudioContext => {
  const AudioContext = window.AudioContext || window['webkitAudioContext'];

  if (!AudioContext) {
    console.warn('Sorry but the WebAudio API is not supported on this browser.');
    throw new Error('PLATFORM_NOT_SUPPORTED');
  }
  return new AudioContext();
};

const getSoundfontInstrument = async (instrumentName: InstrumentName, options = {}): Promise<NotePlayer> => {
  if (instruments.has(instrumentName)) {
    return instruments.get(instrumentName) as NotePlayer;
  }
  const ac = getAudioContext();
  const player = await instrument(ac, instrumentName, options);
  const play: NotePlayer['play'] = (noteName: string, when = 0, options = {}): Player => {
    const audioNode = player.play(noteName, when, options);
    playingNotes.set(`${instrumentName}_${noteName}`, audioNode);
    return audioNode;
  };
  const stop: NotePlayer['stop'] = (noteName?: string): AudioNode[] => {
    if (noteName && playingNotes.has(`${instrumentName}_${noteName}`)) {
      const toReturn = playingNotes.get(`${instrumentName}_${noteName}`).stop();
      playingNotes.delete(`${instrumentName}_${noteName}`);
      return toReturn;
    } else {
      return player.stop();
    }
  };
  // eslint-disable-next-line
  const schedule: NotePlayer['schedule'] = (when: number, events: any[]): Player => {
    const audioNodes = player.schedule(when, events);
    events.map((note, i) => {
      playingNotes.set(`${instrumentName}_${note.note}`, audioNodes[i]);
    });
    return audioNodes;
  };

  instruments.set(instrumentName, { play, stop, schedule, instrumentName });
  return { play, stop, schedule, instrumentName } as NotePlayer;
};

async function startNote(instrumentName: InstrumentName, noteName: string, noteOptions = {}): Promise<void> {
  const instrument = await getSoundfontInstrument(instrumentName);
  await instrument.play(noteName, 0, noteOptions);
}

async function stopNote(instrumentName: InstrumentName, noteName: string): Promise<void> {
  const instrument = await getSoundfontInstrument(instrumentName);
  instrument.stop(noteName);
}
