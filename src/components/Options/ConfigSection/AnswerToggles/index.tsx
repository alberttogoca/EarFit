import { AnswerToggle } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggle';
import { AnswerToggleAll } from 'components/Options/ConfigSection/AnswerToggles/AnswerToggleAll';
import { SelectableAnswer } from 'types';

interface Props {
  answerToggles: SelectableAnswer[];
  handleAnswerTogglesChange: (answerToggle: SelectableAnswer) => void;
  handleAnswerToggleAllChange: () => void;
}

export const AnswerToggles = ({
  answerToggles,
  handleAnswerTogglesChange,
  handleAnswerToggleAllChange,
}: Props): JSX.Element => {
  return (
    <>
      {answerToggles.map((answerToggle) => (
        <AnswerToggle
          key={answerToggle.id}
          answerToggle={answerToggle}
          handleAnswerTogglesChange={handleAnswerTogglesChange}
        />
      ))}
      <AnswerToggleAll answerToggles={answerToggles} handleAnswerToggleAllChange={handleAnswerToggleAllChange} />
    </>
  );
};
