import {
  AnswerButtonsSelector,
  InstrumentSelector,
  OptionsTitle,
  ScaleSelector,
} from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  notes: Selectable[];
  scalesNames: string[];
  selectedScale: string;
  handleDropdownScaleSelect: (scaleName: string) => void;
  handleToggleButtonChange: (note: Selectable) => void;
  handleToggleAllChange: () => void;
}

export const NotesOptions = ({
  notes,
  scalesNames,
  selectedScale,
  handleDropdownScaleSelect,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <ScaleSelector
        scalesNames={scalesNames}
        selectedScale={selectedScale}
        handleDropdownScaleSelect={handleDropdownScaleSelect}
      />
      <AnswerButtonsSelector
        selectables={notes}
        handleToggleButtonChange={handleToggleButtonChange}
        handleToggleAllChange={handleToggleAllChange}
      />
      <InstrumentSelector />
    </Container>
  );
};
