import { AnswerToggle } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggle';
import { AnswerToggleAll } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggleAll';
import Selectable from 'utils/Selectable';

interface Props {
  answerToggles: Selectable[];
  handleToggleButtonChange: (option: Selectable) => void;
  handleToggleAllChange: () => void;
}

export const AnswerToggles = ({
  answerToggles,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <>
      {answerToggles.map((selectable) => (
        <AnswerToggle key={selectable.id} selectable={selectable} handleToggleButtonChange={handleToggleButtonChange} />
      ))}
      <AnswerToggleAll answerToggles={answerToggles} handleToggleAllChange={handleToggleAllChange} />
    </>
  );
};
