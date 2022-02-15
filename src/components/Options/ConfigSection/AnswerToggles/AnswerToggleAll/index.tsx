import { ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  answerToggles?: Selectable[];
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
