import { ToggleButton } from 'react-bootstrap';
import { SelectableAnswer } from 'utils/Types';

interface Props {
  answerToggle?: SelectableAnswer;
  handleAnswerTogglesChange?: (answerToggle: SelectableAnswer) => void;
}

export const AnswerToggle = ({ answerToggle, handleAnswerTogglesChange }: Props): JSX.Element => {
  return (
    <ToggleButton
      value={answerToggle.id}
      type="checkbox"
      variant={'light'} //light or link
      size="sm"
      checked={answerToggle.isSelected}
      onChange={() => handleAnswerTogglesChange(answerToggle)}
      disabled={!answerToggle}
    >
      {' '}
      {answerToggle.id}
    </ToggleButton>
  );
};
