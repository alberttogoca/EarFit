import {
  AnswerToggles,
  ConfigSection,
  DirectionSelector,
  InstrumentSelector,
  ScaleDropdown,
} from 'components/Options/ConfigSection';
import { Title } from 'components/Options/Title';
import { Container } from 'react-bootstrap';
import { SelectableAnswer } from 'utils/Types';

interface Props {
  answerToggles?: SelectableAnswer[];
  scalesNames?: string[];
  selectedScale?: string;
  handleScaleDropdownChange?: (scaleName: string) => void;
  handleDirectionChange?: () => void;
  handleAnswerTogglesChange?: (answerToggle: SelectableAnswer) => void;
  handleAnswerToggleAllChange?: () => void;
}

export const Options = ({
  answerToggles,
  scalesNames,
  selectedScale,
  handleScaleDropdownChange,
  handleDirectionChange,
  handleAnswerTogglesChange,
  handleAnswerToggleAllChange,
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
              handleScaleDropdownChange={handleScaleDropdownChange}
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
              handleAnswerTogglesChange={handleAnswerTogglesChange}
              handleAnswerToggleAllChange={handleAnswerToggleAllChange}
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
