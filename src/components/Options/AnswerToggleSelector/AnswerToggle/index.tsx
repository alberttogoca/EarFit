import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectable?: Selectable;
  selectables?: Selectable[];
  handleToggleButtonChange?: (option: Selectable) => void;
  handleToggleAllChange?: () => void;
}

export const AnswerToggle = ({
  selectable,
  selectables,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <>
      {handleToggleButtonChange && (
        <ToggleButton
          value={selectable.id}
          type="checkbox"
          variant={'light'} //light or link
          size="sm"
          checked={selectable.isSelected}
          onChange={() => handleToggleButtonChange({ ...selectable, isSelected: !selectable.isSelected })}
        >
          {' '}
          {selectable.id}
        </ToggleButton>
      )}
      {handleToggleAllChange && (
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
      )}
    </>
  );
};
