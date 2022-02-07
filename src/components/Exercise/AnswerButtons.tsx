import { AnswerButton } from 'hooks/useAnswerButtons';
import { Button, ButtonGroup } from 'react-bootstrap';

interface Props {
  answerButtons: AnswerButton[];
  handleOptionClick: (option: AnswerButton) => boolean;
}

export const AnswerButtons = ({ answerButtons, handleOptionClick }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {answerButtons.map((answerButton, idx) => (
          <Button key={idx} variant={answerButton.color} onClick={() => handleOptionClick(answerButton)}>
            {answerButton.displayName}
          </Button>
        ))}
      </div>
    </ButtonGroup>
  );
};
