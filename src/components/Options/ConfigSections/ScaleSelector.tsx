import { ConfigSection } from 'components/Options/ConfigSections';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {
  scalesNames: string[];
  selectedScale: string;
  handleDropdownScaleSelect: (scale: string) => void;
}

export const ScaleSelector = ({ scalesNames, selectedScale, handleDropdownScaleSelect }: Props): JSX.Element => {
  const scaleName = selectedScale !== undefined ? selectedScale : 'Select scale';
  return (
    <>
      <ConfigSection title="Scale" tooltipMessage="Select the scale from which the notes are taken">
        <DropdownButton id="dropdown-basic-button" title={scaleName} variant="secondary">
          {scalesNames.map((scale, idx) => (
            <Dropdown.Item onSelect={() => handleDropdownScaleSelect(scale)} key={idx} href="#/action-1">
              {scale}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ConfigSection>
    </>
  );
};
