import {
  AnswerButtonsSelector,
  DirectionSelector,
  InstrumentSelector,
  OptionsTitle,
} from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  scales?: Selectable[];
  onScaleIsSelectedChange?: (scale: Selectable) => void;
  onDirectionChange?: () => void;
  toggleAllScales?: () => void;
}

export const ScalesOptions = ({
  scales,
  onScaleIsSelectedChange,
  onDirectionChange,
  toggleAllScales,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <DirectionSelector onDirectionChange={onDirectionChange} />
      <AnswerButtonsSelector
        selectables={scales}
        onIsSelectedChange={onScaleIsSelectedChange}
        toggleAllOptions={toggleAllScales}
      />
      <InstrumentSelector />
    </Container>
  );
};
