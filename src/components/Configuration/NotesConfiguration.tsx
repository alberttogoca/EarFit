import { ConfigSection, InstrumentSelector, OptionsSelector } from 'components/Configuration';
import { Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { Scale } from 'services/noteService';
import Selectable from 'utils/Selectable';

interface IProps {
  notes?: Selectable[];
  scales: Scale[];
  selectedScale: Scale;
  onNoteIsSelectedChange?: (note: Selectable) => void;
  onSelectedScaleChange?: (scale: Scale) => void;
  selectAllOptions: () => void;
}

export const NotesConfiguration = ({
  notes,
  scales,
  selectedScale,
  onNoteIsSelectedChange,
  onSelectedScaleChange,
  selectAllOptions,
}: IProps): JSX.Element => {
  const title = selectedScale !== undefined ? selectedScale.name : 'Select scale';
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>

      {/*Scale Selector*/}
      <ConfigSection message="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <DropdownButton id="dropdown-basic-button" title={title} variant="secondary">
          {scales.map((scale, idx) => (
            <Dropdown.Item onSelect={() => onSelectedScaleChange(scale)} key={idx} href="#/action-1">
              {scale.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ConfigSection>

      <OptionsSelector
        selecables={notes}
        onIsSelectedChange={onNoteIsSelectedChange}
        selectAllOptions={selectAllOptions}
      />
      <InstrumentSelector />
    </Container>
  );
};
