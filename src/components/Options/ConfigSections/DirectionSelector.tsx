import { ConfigSection } from 'components/Options/ConfigSections';
import { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

interface Props {
  onDirectionChange?: () => void;
}

export const DirectionSelector = ({ onDirectionChange }: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <ConfigSection title="Direction" tooltipMessage="Select the direction of the notes">
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
