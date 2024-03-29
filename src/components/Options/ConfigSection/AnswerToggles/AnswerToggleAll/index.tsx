import { ToggleButton } from 'react-bootstrap';
import { SelectableAnswer } from 'types';

interface Props {
  answerToggles?: SelectableAnswer[];
  handleAnswerToggleAllChange?: () => void;
}

export default function AnswerToggleAll({ answerToggles, handleAnswerToggleAllChange }: Props): JSX.Element {
  return (
    <ToggleButton
      value="Check All"
      type="checkbox"
      variant={'light'} //light or link
      size="sm"
      checked={
        answerToggles.length < 1 ? false : answerToggles.every((answerToggle) => answerToggle.isSelected === true)
      }
      onChange={() => {
        handleAnswerToggleAllChange();
      }}
      disabled={!answerToggles}
    >
      {' '}
      Check All
    </ToggleButton>
  );
}
