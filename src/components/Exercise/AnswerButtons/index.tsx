import { AnswerButton as AnswerButtonComponent } from 'components/Exercise/AnswerButtons/AnswerButton';
import { ButtonGroup } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectables: Selectable[];
  handleAnswerButtonClick: (selectable: Selectable) => boolean;
}

export const AnswerButtons = ({ selectables, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {selectables.map((selectable) => (
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
