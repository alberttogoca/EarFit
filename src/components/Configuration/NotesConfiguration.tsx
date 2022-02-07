import { ConfigSection, InstrumentSelector, OptionsSelector, OptionsTitle } from 'components/Configuration';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  notes?: Selectable[];
  scalesNames: string[];
  selectedScale: string;
  onNoteIsSelectedChange?: (note: Selectable) => void;
  onSelectedScaleChange?: (scale: string) => void;
  selectAllOptions: () => void;
}

export const NotesConfiguration = ({
  notes,
  scalesNames,
  selectedScale,
  onNoteIsSelectedChange,
  onSelectedScaleChange,
  selectAllOptions,
}: IProps): JSX.Element => {
  const title = selectedScale !== undefined ? selectedScale : 'Select scale';
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>

      {/*Scale Selector*/}
      <ConfigSection message="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <DropdownButton id="dropdown-basic-button" title={title} variant="secondary">
          {scalesNames.map((scale, idx) => (
            <Dropdown.Item onSelect={() => onSelectedScaleChange(scale)} key={idx} href="#/action-1">
              {scale}
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
