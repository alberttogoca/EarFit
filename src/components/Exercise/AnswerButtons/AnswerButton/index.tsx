import { Button } from 'react-bootstrap';
import { SelectableAnswerColor } from 'utils/Types';

interface Props {
  selectable: SelectableAnswerColor;
  handleAnswerButtonClick: (selectable: SelectableAnswerColor) => void;
}

export const AnswerButton = ({ selectable, handleAnswerButtonClick }: Props): JSX.Element => {
  return (
    <Button variant={selectable.color} onClick={() => handleAnswerButtonClick(selectable)}>
      {selectable.displayName}
    </Button>
  );
};
