import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {
  scalesNames: string[];
  selectedScale: string;
  handleDropdownScaleSelect: (scale: string) => void;
}

export const ScaleDropdown = ({ scalesNames, selectedScale, handleDropdownScaleSelect }: Props): JSX.Element => {
  const scaleName = selectedScale !== undefined ? selectedScale : 'Select scale';
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title={scaleName} variant="secondary">
        {scalesNames.map((scale) => (
          <Dropdown.Item onSelect={() => handleDropdownScaleSelect(scale)} key={scale}>
            {scale}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};
