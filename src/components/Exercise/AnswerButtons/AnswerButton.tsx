import { Button } from 'react-bootstrap';
import AnswerButton from 'utils/AnswerButton';

interface Props {
  answerButton: AnswerButton;
  handleAnswerButtonClick: (answerButton: AnswerButton) => boolean;
}

export const AnswerButton = ({ answerButton, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <Button variant={answerButton.color} onClick={() => handleAnswerButtonClick(answerButton)}>
      {answerButton.displayName}
    </Button>
  );
};
