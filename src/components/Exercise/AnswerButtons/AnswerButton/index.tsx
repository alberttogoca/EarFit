import { Button } from 'react-bootstrap';
import { SelectableAnswerWithColor } from 'utils/Types';

interface Props {
  answerButton: SelectableAnswerWithColor;
  handleAnswerButtonClick: (answerButton: SelectableAnswerWithColor) => void;
}

export const AnswerButton = ({ answerButton, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <Button variant={answerButton.color} onClick={() => handleAnswerButtonClick(answerButton)} disabled={!answerButton}>
      {answerButton.displayName}
    </Button>
  );
};
