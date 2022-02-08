import { Button } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectable: Selectable;
  handleAnswerButtonClick: (selectable: Selectable) => boolean;
}

export const AnswerButton = ({ selectable, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <Button variant={selectable.color} onClick={() => handleAnswerButtonClick(selectable)}>
      {selectable.displayName}
    </Button>
  );
};
