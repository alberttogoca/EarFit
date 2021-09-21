import { DirectionSelector, InstrumentSelector, OptionsSelector } from 'components/Configuration';
import { Container, Row } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  intervals?: Selectable[];
  onIntervalIsSelectedChange?: (interval: Selectable) => void;
  onDirectionChange?: () => void;
  selectAllOptions?: (checked: boolean) => void;
}

export const IntervalsConfiguration = ({
  intervals,
  onIntervalIsSelectedChange,
  onDirectionChange,
  selectAllOptions,
}: IProps): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>
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
