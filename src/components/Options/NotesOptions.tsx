import {
  AnswerButtonsSelector,
  InstrumentSelector,
  OptionsTitle,
  ScaleSelector,
} from 'components/Options/ConfigSections';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  notes?: Selectable[];
  scalesNames: string[];
  selectedScale: string;
  onNoteIsSelectedChange?: (note: Selectable) => void;
  onSelectedScaleChange?: (scale: string) => void;
  selectAllOptions: () => void;
}

export const NotesOptions = ({
  notes,
  scalesNames,
  selectedScale,
  onNoteIsSelectedChange,
  onSelectedScaleChange,
  selectAllOptions,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      <ScaleSelector
        scalesNames={scalesNames}
        selectedScale={selectedScale}
        onSelectedScaleChange={onSelectedScaleChange}
      />
      <AnswerButtonsSelector
        selectables={notes}
        onIsSelectedChange={onNoteIsSelectedChange}
        toggleAllOptions={selectAllOptions}
      />
      <InstrumentSelector />
    </Container>
  );
};
