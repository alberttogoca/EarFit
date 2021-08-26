import { ConfigSection } from 'components/Configuration/ConfigSection';
import useInstruments from 'hooks/useInstruments';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const InstrumentSelector = (): JSX.Element => {
  const { instruments, setNewInstrument } = useInstruments();
  const isLoading = instruments && instruments.every((i) => i.isSelected === false);

  return (
    <ConfigSection message="Instrument" tooltipMessage="Select the instrument that plays">
      {isLoading ? (
        <p>Loading instruments...</p>
      ) : (
        <ButtonGroup>
          {instruments.map((instrument, idx) => (
            <ToggleButton
              key={idx}
              value={instrument.displayName}
              type="checkbox"
              variant={'light'} //light or link
              size="sm"
              checked={instrument.isSelected}
              onChange={() => setNewInstrument(instrument.instrumentName)}
            >
              {' '}
              {instrument.emoji} {instrument.displayName}
            </ToggleButton>
          ))}
        </ButtonGroup>
      )}
    </ConfigSection>
  );
};
