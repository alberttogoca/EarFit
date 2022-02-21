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
  reverse: boolean;
  handleDirectionChange?: () => void;
  handleAnswerTogglesChange?: (answerToggle: SelectableAnswer) => void;
  handleAnswerToggleAllChange?: () => void;
}

export const Options = ({
  answerToggles,
  scalesNames,
  selectedScale,
  handleScaleDropdownChange,
  reverse,
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
          tooltipMessage="Select the scale you want to test."
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
          tooltipMessage="Select the direction of the notes."
          config={<DirectionSelector reverse={reverse} handleDirectionChange={handleDirectionChange} />}
        />
      )}

      {answerToggles && (
        <ConfigSection
          title="Answers"
          tooltipMessage="Select the possible answers. More answer, more difficult."
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
        tooltipMessage="Select the instrument that plays."
        config={<InstrumentSelector />}
      />
    </Container>
  );
};
