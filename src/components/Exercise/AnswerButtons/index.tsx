import { AnswerButton } from 'components/Exercise/AnswerButtons/AnswerButton';
import { ButtonGroup } from 'react-bootstrap';
import { SelectableAnswerWithColor } from 'types';

interface Props {
  answerButtons: SelectableAnswerWithColor[];
  handleAnswerButtonClick: (answerButton: SelectableAnswerWithColor) => void;
}

export const AnswerButtons = ({ answerButtons, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {answerButtons
          .filter((s) => s.isSelected)
          .map((answerButton) => (
            <AnswerButton
              key={answerButton.id}
              answerButton={answerButton}
              handleAnswerButtonClick={handleAnswerButtonClick}
            />
          ))}
      </div>
    </ButtonGroup>
  );
};
