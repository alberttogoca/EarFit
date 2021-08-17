import React, { useEffect, useState } from 'react';
import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  option: Selectable;
  onIsSelectedChange: (option: Selectable, newValue: boolean) => void;
}

export const ActiveOptionsButtonItem = ({ option, onIsSelectedChange }: Props): JSX.Element => {
  const [checked, setChecked] = useState(option.isSelected);

  useEffect(() => {
    onIsSelectedChange(option, checked);
  }, [checked]);

  return (
    <>
      <ToggleButton
        key={option.displayName}
        value={option.displayName}
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        checked={option.isSelected}
        onChange={() => setChecked(!checked)}
      >
        {' '}
        {option.displayName}
      </ToggleButton>
    </>
  );
};
