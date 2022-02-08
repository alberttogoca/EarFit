import { AnswerButton as AnswerButtonComponent } from 'components/Exercise/AnswerButton';
import { ButtonGroup } from 'react-bootstrap';
import AnswerButton from 'utils/AnswerButton';

interface Props {
  answerButtons: AnswerButton[];
  handleAnswerButtonClick: (answerButton: AnswerButton) => boolean;
}

export const AnswerButtons = ({ answerButtons, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {answerButtons.map((answerButton) => (
          <AnswerButtonComponent
            key={answerButton.id}
            answerButton={answerButton}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
        ))}
      </div>
    </ButtonGroup>
  );
};
