import { ConfigSection } from 'components/Configuration';
import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectables?: Selectable[];
  onIsSelectedChange: (option: Selectable) => void;
  toggleAllOptions: () => void;
}

export const OptionsSelector = ({ selectables, onIsSelectedChange, toggleAllOptions }: Props): JSX.Element => {
  return (
    <>
      <ConfigSection message="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <>
          {selectables.map((option, idx) => (
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
            checked={selectables.every((option) => option.isSelected === true)}
            onChange={() => {
              toggleAllOptions();
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
