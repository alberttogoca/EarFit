import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectables?: Selectable[];
  handleToggleAllChange?: () => void;
}

export const AnswerToggleAll = ({ selectables, handleToggleAllChange }: Props): JSX.Element => {
  return (
    <ToggleButton
      value="Check All"
      type="checkbox"
      variant={'light'} //light or link
      size="sm"
      checked={selectables.every((selectable) => selectable.isSelected === true)}
      onChange={() => {
        handleToggleAllChange();
      }}
    >
      {' '}
      Check All
    </ToggleButton>
  );
};
