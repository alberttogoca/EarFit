import { ConfigSection } from 'components/Configuration';
import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selecables?: Selectable[];
  onIsSelectedChange: (option: Selectable) => void;
  selectAllOptions: () => void;
}

export const OptionsSelector = ({ selecables, onIsSelectedChange, selectAllOptions }: Props): JSX.Element => {
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
            checked={selecables.every((option) => option.isSelected === true)}
            onChange={() => {
              selectAllOptions();
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
