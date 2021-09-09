import { ConfigSection } from 'components/Configuration';
import { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

interface Props {
  onDirectionChange?: () => void;
}

export const DirectionSelector = ({ onDirectionChange }: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <ConfigSection message="Scale" tooltipMessage="Select the scale from which the notes are taken">
      <>
        <ToggleButton
          type="checkbox"
          variant={'light'} //light or link
          size="sm"
          value={0}
          checked={checked}
          onChange={() => {
            onDirectionChange();
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
            onDirectionChange();
            setChecked(!checked);
          }}
        >
          {' '}
          DESCENDING
        </ToggleButton>
      </>
    </ConfigSection>
  );
};
