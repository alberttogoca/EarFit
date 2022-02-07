import {
  AnswerButtonsSelector,
  DirectionSelector,
  InstrumentSelector,
  OptionsTitle,
} from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  intervals?: Selectable[];
  onIntervalIsSelectedChange?: (interval: Selectable) => void;
  onDirectionChange?: () => void;
  selectAllOptions?: () => void;
}

export const IntervalsOptions = ({
  intervals,
  onIntervalIsSelectedChange,
  onDirectionChange,
  selectAllOptions,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <DirectionSelector onDirectionChange={onDirectionChange} />
      <AnswerButtonsSelector
        selectables={intervals}
        onIsSelectedChange={onIntervalIsSelectedChange}
        toggleAllOptions={selectAllOptions}
      />
      <InstrumentSelector />
    </Container>
  );
};
