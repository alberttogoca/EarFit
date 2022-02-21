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
