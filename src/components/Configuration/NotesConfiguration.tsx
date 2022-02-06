import { ConfigSection, InstrumentSelector, OptionsSelector, OptionsTitle } from 'components/Configuration';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
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
      <OptionsTitle>Options</OptionsTitle>

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
        selectables={notes}
        onIsSelectedChange={onNoteIsSelectedChange}
        toggleAllOptions={selectAllOptions}
      />
      <InstrumentSelector />
    </Container>
  );
};
