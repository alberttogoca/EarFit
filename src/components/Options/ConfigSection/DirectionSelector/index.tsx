import { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

interface Props {
  handleDirectionChange: () => void;
}

export const DirectionSelector = ({ handleDirectionChange }: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <>
      <ToggleButton
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        value={0}
        checked={checked}
        onChange={() => {
          handleDirectionChange();
          setChecked(!checked);
        }}
      >
        {' '}
        ASCENDING
      </ToggleButton>
      <ToggleButton
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        value={0}
        checked={!checked}
        onChange={() => {
          handleDirectionChange();
          setChecked(!checked);
        }}
      >
        {' '}
        DESCENDING
      </ToggleButton>
    </>
  );
};
