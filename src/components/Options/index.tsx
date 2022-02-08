import { AnswerToggleSelector } from 'components/Options/AnswerToggleSelector';
import { DirectionSelector } from 'components/Options/DirectionSelector';
import { InstrumentSelector } from 'components/Options/InstrumentSelector';
import { OptionsTitle } from 'components/Options/OptionsTitle';
import { ScaleSelector } from 'components/Options/ScaleSelector';
import { Container } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  selectables?: Selectable[];
  scalesNames?: string[];
  selectedScale?: string;
  handleDropdownScaleSelect?: (scaleName: string) => void;
  handleDirectionChange?: () => void;
  handleToggleButtonChange?: (note: Selectable) => void;
  handleToggleAllChange?: () => void;
}

export const Options = ({
  selectables,
  scalesNames,
  selectedScale,
  handleDropdownScaleSelect,
  handleDirectionChange,
  handleToggleButtonChange,
  handleToggleAllChange,
}: Props): JSX.Element => {
  return (
    <Container>
      <OptionsTitle>Options</OptionsTitle>
      {scalesNames && (
        <ScaleSelector
          scalesNames={scalesNames}
          selectedScale={selectedScale}
          handleDropdownScaleSelect={handleDropdownScaleSelect}
        />
      )}
      {handleDirectionChange && <DirectionSelector handleDirectionChange={handleDirectionChange} />}
      {selectables && (
        <AnswerToggleSelector
          selectables={selectables}
          handleToggleButtonChange={handleToggleButtonChange}
          handleToggleAllChange={handleToggleAllChange}
        />
      )}
      <InstrumentSelector />
    </Container>
  );
};
