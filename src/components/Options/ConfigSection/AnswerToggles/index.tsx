import { AnswerToggle } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggle';
import { AnswerToggleAll } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggleAll';
import Selectable from 'utils/Selectable';

interface Props {
  selectables: Selectable[];
  handleToggleButtonChange: (option: Selectable) => void;
  handleToggleAllChange: () => void;
}

export const AnswerToggles = ({ selectables, handleToggleButtonChange, handleToggleAllChange }: Props): JSX.Element => {
  return (
    <>
      {selectables.map((selectable) => (
        <AnswerToggle key={selectable.id} selectable={selectable} handleToggleButtonChange={handleToggleButtonChange} />
      ))}
      <AnswerToggleAll selectables={selectables} handleToggleAllChange={handleToggleAllChange} />
    </>
  );
};
