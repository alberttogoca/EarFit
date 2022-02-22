import { useInstrumentContext } from 'context/EarfitContext';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const InstrumentSelector = (): JSX.Element => {
  const { instruments, instrument, selectInstrument } = useInstrumentContext();
  const isLoading = !instrument;

  return (
    <>
      <ButtonGroup>
        {instruments.map((i) => (
          <ToggleButton
            key={i.instrumentName}
            value={i.displayName}
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            checked={i.instrumentName == instrument?.instrumentName}
            onChange={() => selectInstrument(i.instrumentName)}
            disabled={isLoading}
          >
            {' '}
            {i.emoji} {i.displayName}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};
