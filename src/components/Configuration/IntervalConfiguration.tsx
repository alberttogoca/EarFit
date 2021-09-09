import { DirectionSelector, InstrumentSelector, OptionsSelector } from 'components/Configuration';
import { Container, Row } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  intervals?: Selectable[];
  onIntervalIsSelectedChange?: (interval: Selectable) => void;
}

export const IntervalConfiguration = ({ intervals, onIntervalIsSelectedChange }: IProps): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>
      <DirectionSelector />
      <OptionsSelector selecables={intervals} onIsSelectedChange={onIntervalIsSelectedChange} />
      <InstrumentSelector />
    </Container>
  );
};
