import { ConfigSection } from 'components/Configuration/ConfigSection';
import { InstrumentSelector } from 'components/Configuration/InstrumentSelector';
import { ActiveOptionsButtonItem } from 'components/Exercise/ActiveOptionsButtonItem';
import React from 'react';
import { Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { Scale } from 'services/noteService';
import Selectable from 'utils/Selectable';

interface IProps {
  notes?: Selectable[];
  scales: Scale[];
  selectedScale: Scale;
  onNoteIsSelectedChange?: (note: Selectable) => void;
  onSelectedScaleChange?: (scale: Scale) => void;
}

export const NotesConfiguration = ({
  notes,
  scales,
  selectedScale,
  onNoteIsSelectedChange,
  onSelectedScaleChange,
}: IProps): JSX.Element => {
  const title = selectedScale !== undefined ? selectedScale.name : 'Select scale';
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>

      {/*Scale*/}
      <ConfigSection message="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <DropdownButton id="dropdown-basic-button" title={title} variant="secondary">
          {scales.map((scale, idx) => (
            <Dropdown.Item onSelect={() => onSelectedScaleChange(scale)} key={idx} href="#/action-1">
              {scale.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ConfigSection>

      <ConfigSection message="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <>
          {notes.map((option, idx) => (
            <ActiveOptionsButtonItem key={idx} option={option} onIsSelectedChange={onNoteIsSelectedChange} />
          ))}
        </>
      </ConfigSection>
      <InstrumentSelector />
    </Container>
  );
};
