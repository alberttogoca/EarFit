import { ConfigSection } from 'components/Options/ConfigSections';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {
  scalesNames: string[];
  selectedScale: string;
  onSelectedScaleChange?: (scale: string) => void;
}

export const ScaleSelector = ({ scalesNames, selectedScale, onSelectedScaleChange }: Props): JSX.Element => {
  const scale = selectedScale !== undefined ? selectedScale : 'Select scale';
  return (
    <>
      <ConfigSection title="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <DropdownButton id="dropdown-basic-button" title={scale} variant="secondary">
          {scalesNames.map((scale, idx) => (
            <Dropdown.Item onSelect={() => onSelectedScaleChange(scale)} key={idx} href="#/action-1">
              {scale}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ConfigSection>
    </>
  );
};
