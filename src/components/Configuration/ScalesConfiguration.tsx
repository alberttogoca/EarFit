import { ConfigSection, InstrumentSelector, OptionsSelector } from 'components/Configuration';
import { useState } from 'react';
import { Container, Row, ToggleButton } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface IProps {
  scales?: Selectable[];
  onScaleIsSelectedChange?: (note: Selectable) => void;
}

export const ScalesConfiguration = ({ scales, onScaleIsSelectedChange }: IProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <Container>
      <Row className="justify-content-center p-3">
        <h1>Options</h1>
      </Row>

      {/*Direction Selector*/}
      <ConfigSection message="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <div className="p-3">
          <ToggleButton
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            value={0}
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          >
            {' '}
            ASCENDING
          </ToggleButton>
          <ToggleButton
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            value={0}
            checked={!checked}
            onChange={() => {
              setChecked(!checked);
            }}
          >
            {' '}
            DESCENDING
          </ToggleButton>
        </div>
      </ConfigSection>

      <OptionsSelector selecables={scales} onIsSelectedChange={onScaleIsSelectedChange} />
      <InstrumentSelector />
    </Container>
  );
};
