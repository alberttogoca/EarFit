import { ConfigSection } from 'components/Options/ConfigSections';
import { useInstrumentContext } from 'context/EarfitContext';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const InstrumentSelector = (): JSX.Element => {
  const { instruments, selectedInstrument, setNewSelectedInstrument } = useInstrumentContext();
  const isLoading = instruments === undefined && selectedInstrument === undefined;

  return (
    <ConfigSection title="Instrument" tooltipMessage="Select the instrument that plays">
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
              checked={instrument.instrumentName == selectedInstrument?.instrumentName}
              onChange={() => setNewSelectedInstrument(instrument.instrumentName)}
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
