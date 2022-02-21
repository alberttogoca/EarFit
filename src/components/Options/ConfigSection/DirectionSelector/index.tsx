import { ToggleButton } from 'react-bootstrap';

interface Props {
  reverse: boolean;
  handleDirectionChange: () => void;
}

export const DirectionSelector = ({ reverse, handleDirectionChange }: Props): JSX.Element => {
  return (
    <>
      <ToggleButton
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        value={1}
        checked={reverse}
        onChange={() => {
          handleDirectionChange();
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
        checked={!reverse}
        onChange={() => {
          handleDirectionChange();
        }}
      >
        {' '}
        DESCENDING
      </ToggleButton>
    </>
  );
};
