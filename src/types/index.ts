import { InstrumentName, NotePlayer } from 'lib/soundfont-wrapper';

export type { InstrumentName, NotePlayer };

export type Instrument = {
  displayName: string;
  emoji: string;
  instrumentName: InstrumentName;
  notePlayer: NotePlayer;
  isLocal: boolean;
};

export type VariantExercise = 'notes' | 'intervals' | 'scales';

export type VariantColor = 'success' | 'secondary' | 'danger';

export type Answer = {
  id: string;
  notes: string[];
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

export interface MenuItemInfo {
  label: string;
  path: string;
  description?: string;
}
