import { ConfigSection } from 'components/Configuration';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selecables?: Selectable[];
  onIsSelectedChange: (option: Selectable) => void;
}

export const OptionsSelector = ({ selecables, onIsSelectedChange }: Props): JSX.Element => {
  return (
    <>
      <ConfigSection message="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <ButtonGroup>
          {selecables.map((option) => (
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
          ))}
        </ButtonGroup>
      </ConfigSection>
    </>
  );
};
