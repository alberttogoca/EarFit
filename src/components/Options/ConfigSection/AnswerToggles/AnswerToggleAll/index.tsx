import { ToggleButton } from 'react-bootstrap';
import { SelectableAnswer } from 'utils/Types';

interface Props {
  answerToggles?: SelectableAnswer[];
  handleAnswerToggleAllChange?: () => void;
}

export const AnswerToggleAll = ({ answerToggles, handleAnswerToggleAllChange }: Props): JSX.Element => {
  return (
    <ToggleButton
      value="Check All"
      type="checkbox"
      variant={'light'} //light or link
      size="sm"
      checked={answerToggles.every((answerToggle) => answerToggle.isSelected === true)}
      onChange={() => {
        handleAnswerToggleAllChange();
      }}
    >
      {' '}
      Check All
    </ToggleButton>
  );
};
