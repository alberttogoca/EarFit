type VariantColor = 'success' | 'secondary' | 'danger';

export default interface AnswerButton {
  id: string;
  displayName: string;
  color: VariantColor;
}
