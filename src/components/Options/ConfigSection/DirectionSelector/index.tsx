import { ToggleButton } from 'react-bootstrap';

interface Props {
  direction: boolean;
  handleDirectionChange: () => void;
}

export const DirectionSelector = ({ direction, handleDirectionChange }: Props): JSX.Element => {
  return (
    <>
      <ToggleButton
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        value={1}
        checked={direction}
        onChange={() => {
          handleDirectionChange();
        }}
        disabled={!direction}
      >
        {' '}
        ASCENDING
      </ToggleButton>
      <ToggleButton
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        value={0}
        checked={!direction}
        onChange={() => {
          handleDirectionChange();
        }}
        disabled={!direction}
      >
        {' '}
        DESCENDING
      </ToggleButton>
    </>
  );
};
