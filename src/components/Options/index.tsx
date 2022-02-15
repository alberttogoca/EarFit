import {
  AnswerToggles,
  ConfigSection,
  DirectionSelector,
  InstrumentSelector,
  ScaleDropdown,
} from 'components/Options/ConfigSection';
import { Title } from 'components/Options/Title';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  answerToggles?: Selectable[];
  scalesNames?: string[];
  selectedScale?: string;
  handleDropdownScaleSelect?: (scaleName: string) => void;
  handleDirectionChange?: () => void;
  handleToggleButtonChange?: (note: Selectable) => void;
  handleToggleAllChange?: () => void;
}

export const Options = ({
  answerToggles,
  scalesNames,
  selectedScale,
  handleDropdownScaleSelect,
  handleDirectionChange,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <Container>
      <Title>Options</Title>
      {scalesNames && (
        <ConfigSection
          title="Scale"
          tooltipMessage="Select the scale from which the notes are taken"
          config={
            <ScaleDropdown
              scalesNames={scalesNames}
              selectedScale={selectedScale}
              handleDropdownScaleSelect={handleDropdownScaleSelect}
            />
          }
        />
      )}
      {handleDirectionChange && (
        <ConfigSection
          title="Direction"
          tooltipMessage="Select the direction of the notes"
          config={<DirectionSelector handleDirectionChange={handleDirectionChange} />}
        />
      )}
      {answerToggles && (
        <ConfigSection
          title="Active Options"
          tooltipMessage="Select the options on which you would like to be tested"
          config={
            <AnswerToggles
              answerToggles={answerToggles}
              handleToggleButtonChange={handleToggleButtonChange}
              handleToggleAllChange={handleToggleAllChange}
            />
          }
        />
      )}
      <ConfigSection
        title="Instrument"
        tooltipMessage="Select the instrument that plays"
        config={<InstrumentSelector />}
      />
    </Container>
  );
};
