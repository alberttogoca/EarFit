import { AnswerToggle } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggle';
import { AnswerToggleAll } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggleAll';
import { SelectableAnswer } from 'utils/Selectable';

interface Props {
  answerToggles: SelectableAnswer[];
  handleToggleButtonChange: (option: SelectableAnswer) => void;
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
