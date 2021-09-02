import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  option: Selectable;
  onIsSelectedChange: (option: Selectable) => void;
}

export const ActiveOptionsButtonItem = ({ option, onIsSelectedChange }: Props): JSX.Element => {
  return (
    <>
      <ToggleButton
        key={option.displayName}
        value={option.displayName}
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        checked={option.isSelected}
        onChange={() => onIsSelectedChange({ ...option, isSelected: !option.isSelected })}
      >
        {' '}
        {option.displayName}
      </ToggleButton>
    </>
  );
};
