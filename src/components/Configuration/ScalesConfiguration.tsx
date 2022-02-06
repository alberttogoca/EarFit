import { DirectionSelector, InstrumentSelector, OptionsSelector, OptionsTitle } from 'components/Configuration';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  scales?: Selectable[];
  onScaleIsSelectedChange?: (scale: Selectable) => void;
  onDirectionChange?: () => void;
  toggleAllScales?: () => void;
}

export const ScalesConfiguration = ({
  scales,
  onScaleIsSelectedChange,
  onDirectionChange,
  toggleAllScales,
}: IProps): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <DirectionSelector onDirectionChange={onDirectionChange} />
      <OptionsSelector
        selectables={scales}
        onIsSelectedChange={onScaleIsSelectedChange}
        toggleAllOptions={toggleAllScales}
      />
      <InstrumentSelector />
    </Container>
  );
};
