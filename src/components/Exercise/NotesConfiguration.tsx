import { ConfigSection } from 'components/Configuration/ConfigSection';
import { InstrumentSelector } from 'components/Configuration/InstrumentSelector';
import { ActiveOptionsButtonItem } from 'components/Exercise/ActiveOptionsButtonItem';
import React from 'react';
import { Container, Dropdown, Row } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  options?: Selectable[];
  onOptionIsSelectedChange?: (option: Selectable, newValue: boolean) => void;
}

export const NotesConfiguration = ({ options, onOptionIsSelectedChange }: IProps): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>

      {/*Scale*/}
      <ConfigSection message="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Scale
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Major</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Dorian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Phrygian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Lydian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Mixolydian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Aeolian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Locrian</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ConfigSection>

      {/*Active Notes*/}
      <ConfigSection message="Active Options" tooltipMessage="Select the options on which you would like to be tested">
        <>
          {options.map((option, idx) => (
            <ActiveOptionsButtonItem key={idx} option={option} onIsSelectedChange={onOptionIsSelectedChange} />
          ))}
        </>
      </ConfigSection>

      {/*Instruments*/}
      <InstrumentSelector />
    </Container>
  );
};
