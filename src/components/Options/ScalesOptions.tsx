import {
  AnswerButtonsSelector,
  DirectionSelector,
  InstrumentSelector,
  OptionsTitle,
} from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  scales: Selectable[];
  handleToggleButtonChange: (scale: Selectable) => void;
  handleDirectionChange: () => void;
  handleToggleAllChange: () => void;
}

export const ScalesOptions = ({
  scales,
  handleToggleButtonChange,
  handleDirectionChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <DirectionSelector handleDirectionChange={handleDirectionChange} />
      <AnswerButtonsSelector
        selectables={scales}
        handleToggleButtonChange={handleToggleButtonChange}
        handleToggleAllChange={handleToggleAllChange}
      />
      <InstrumentSelector />
    </Container>
  );
};
