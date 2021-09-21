import { DirectionSelector, InstrumentSelector, OptionsSelector } from 'components/Configuration';
import { Container, Row } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  scales?: Selectable[];
  onScaleIsSelectedChange?: (scale: Selectable) => void;
  onDirectionChange?: () => void;
  selectAllOptions?: (checked: boolean) => void;
}

export const ScalesConfiguration = ({
  scales,
  onScaleIsSelectedChange,
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
        selecables={scales}
        onIsSelectedChange={onScaleIsSelectedChange}
        selectAllOptions={selectAllOptions}
      />
      <InstrumentSelector />
    </Container>
  );
};
