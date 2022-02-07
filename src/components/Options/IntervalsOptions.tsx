import {
  AnswerButtonsSelector,
  DirectionSelector,
  InstrumentSelector,
  OptionsTitle,
} from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  intervals: Selectable[];
  handleToggleButtonChange: (interval: Selectable) => void;
  handleDirectionChange: () => void;
  handleToggleAllChange: () => void;
}

export const IntervalsOptions = ({
  intervals,
  handleToggleButtonChange,
  handleDirectionChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <DirectionSelector handleDirectionChange={handleDirectionChange} />
      <AnswerButtonsSelector
        selectables={intervals}
        handleToggleButtonChange={handleToggleButtonChange}
        handleToggleAllChange={handleToggleAllChange}
      />
      <InstrumentSelector />
    </Container>
  );
};
