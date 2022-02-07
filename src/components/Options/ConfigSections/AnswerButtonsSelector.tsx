import { ConfigSection } from 'components/Options/ConfigSections';
import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectables: Selectable[];
  handleToggleButtonChange: (option: Selectable) => void;
  handleToggleAllChange: () => void;
}

export const AnswerButtonsSelector = ({
  selectables,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <>
      <ConfigSection title="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <>
          {selectables.map((selectable, idx) => (
            <ToggleButton
              key={idx}
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
          ))}
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
        </>
      </ConfigSection>
    </>
  );
};
