import { AnswerToggle } from 'components/Options/AnswerToggleSelector/AnswerToggle';
import { ConfigSection } from 'components/Options/ConfigSection';
import Selectable from 'utils/Selectable';

interface Props {
  selectables: Selectable[];
  handleToggleButtonChange: (option: Selectable) => void;
  handleToggleAllChange: () => void;
}

export const AnswerToggleSelector = ({
  selectables,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <>
      <ConfigSection title="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <>
          {selectables.map((selectable) => (
            <AnswerToggle
              key={selectable.id}
              selectable={selectable}
              handleToggleButtonChange={handleToggleButtonChange}
            />
          ))}
          <AnswerToggle selectables={selectables} handleToggleAllChange={handleToggleAllChange} />
        </>
      </ConfigSection>
    </>
  );
};
