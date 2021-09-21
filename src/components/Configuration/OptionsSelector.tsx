import { ConfigSection } from 'components/Configuration';
import { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selecables?: Selectable[];
  onIsSelectedChange: (option: Selectable) => void;
  selectAllOptions: (checked: boolean) => void;
}

export const OptionsSelector = ({ selecables, onIsSelectedChange, selectAllOptions }: Props): JSX.Element => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ConfigSection message="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <>
          {selecables.map((option, idx) => (
            <ToggleButton
              key={idx}
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
          ))}
          <ToggleButton
            value="Check All"
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            checked={checked}
            onChange={() => {
              selectAllOptions(checked);
              setChecked(!checked);
            }}
          >
            {' '}
            Check All
          </ToggleButton>
        </>
      </ConfigSection>
    </>
  );
};
