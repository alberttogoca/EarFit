import { ToggleButton } from 'react-bootstrap';
import { SelectableAnswer } from 'utils/Types';

interface Props {
  selectable?: SelectableAnswer;
  selectables?: SelectableAnswer[];
  handleToggleButtonChange?: (option: SelectableAnswer) => void;
  handleToggleAllChange?: () => void;
}

export const AnswerToggle = ({ selectable, handleToggleButtonChange }: Props): JSX.Element => {
  return (
    <ToggleButton
      value={selectable.id}
      type="checkbox"
      variant={'light'} //light or link
      size="sm"
      checked={selectable.isSelected}
      onChange={() => handleToggleButtonChange(selectable)}
    >
      {' '}
      {selectable.id}
    </ToggleButton>
  );
};
