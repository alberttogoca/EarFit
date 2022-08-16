import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {
  scalesNames: string[];
  selectedScale: string;
  handleScaleDropdownChange: (scale: string) => void;
}

export default function ScaleDropdown({ scalesNames, selectedScale, handleScaleDropdownChange }: Props): JSX.Element {
  const scaleName = selectedScale !== undefined ? selectedScale : 'Select scale';
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title={scaleName} variant="secondary" disabled={!scalesNames}>
        {scalesNames.map((scale) => (
          <Dropdown.Item onSelect={() => handleScaleDropdownChange(scale)} key={scale}>
            {scale}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}
