import { DirectionSelector, InstrumentSelector, OptionsSelector, OptionsTitle } from 'components/Configuration';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  scales?: Selectable[];
  onScaleIsSelectedChange?: (scale: Selectable) => void;
  onDirectionChange?: () => void;
  selectAllOptions?: () => void;
}

export const ScalesConfiguration = ({
  scales,
  onScaleIsSelectedChange,
  onDirectionChange,
  selectAllOptions,
}: IProps): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
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
