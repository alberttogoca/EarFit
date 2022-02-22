import { InstrumentName, NotePlayer } from 'lib/soundfont-wrapper';

export type Instrument = {
  displayName: string;
  emoji: string;
  instrumentName: InstrumentName;
  notePlayer: NotePlayer;
  isLocal: boolean;
};

export type { InstrumentName };

export type VariantExercise = 'notes' | 'intervals' | 'scales';

export type VariantColor = 'success' | 'secondary' | 'danger';

export type Answer = {
  id: string;
  values: string[];
  displayName: string;
};

export type IsSelectable = {
  isSelected: boolean;
};

export type WithColor = {
  color: VariantColor;
};

export type SelectableAnswer = Answer & IsSelectable;

export type SelectableAnswerWithColor = SelectableAnswer & WithColor;
