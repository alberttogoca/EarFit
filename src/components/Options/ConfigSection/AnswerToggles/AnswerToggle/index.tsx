import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectable?: Selectable;
  selectables?: Selectable[];
  handleToggleButtonChange?: (option: Selectable) => void;
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
