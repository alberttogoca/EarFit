import { AnswerButton as AnswerButtonComponent } from 'components/Exercise/AnswerButtons/AnswerButton';
import { ButtonGroup } from 'react-bootstrap';
import { SelectableAnswerColor } from 'utils/Types';

interface Props {
  answerButtons: SelectableAnswerColor[];
  handleAnswerButtonClick: (selectable: SelectableAnswerColor) => void;
}

export const AnswerButtons = ({ answerButtons, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {answerButtons
          .filter((s) => s.isSelected)
          .map((selectable) => (
            <AnswerButtonComponent
              key={selectable.id}
              selectable={selectable}
              handleAnswerButtonClick={handleAnswerButtonClick}
            />
          ))}
      </div>
    </ButtonGroup>
  );
};
