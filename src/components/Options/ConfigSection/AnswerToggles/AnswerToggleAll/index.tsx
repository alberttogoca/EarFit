import { ToggleButton } from 'react-bootstrap';
import { SelectableAnswer } from 'utils/Types';

interface Props {
  answerToggles?: SelectableAnswer[];
  handleToggleAllChange?: () => void;
}

export const AnswerToggleAll = ({ answerToggles, handleToggleAllChange }: Props): JSX.Element => {
  return (
    <ToggleButton
      value="Check All"
      type="checkbox"
      variant={'light'} //light or link
      size="sm"
      checked={answerToggles.every((selectable) => selectable.isSelected === true)}
      onChange={() => {
        handleToggleAllChange();
      }}
    >
      {' '}
      Check All
    </ToggleButton>
  );
};
