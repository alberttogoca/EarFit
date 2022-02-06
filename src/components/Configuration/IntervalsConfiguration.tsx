import { DirectionSelector, InstrumentSelector, OptionsSelector, OptionsTitle } from 'components/Configuration';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  intervals?: Selectable[];
  onIntervalIsSelectedChange?: (interval: Selectable) => void;
  onDirectionChange?: () => void;
  selectAllOptions?: () => void;
}

export const IntervalsConfiguration = ({
  intervals,
  onIntervalIsSelectedChange,
  onDirectionChange,
  selectAllOptions,
}: IProps): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <DirectionSelector onDirectionChange={onDirectionChange} />
      <OptionsSelector
        selecables={intervals}
        onIsSelectedChange={onIntervalIsSelectedChange}
        selectAllOptions={selectAllOptions}
      />
      <InstrumentSelector />
    </Container>
  );
};
