import { ConfigSection } from 'components/Options/ConfigSections';
import { useInstrumentContext } from 'context/EarfitContext';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const InstrumentSelector = (): JSX.Element => {
  const { instruments, instrument, selectInstrument } = useInstrumentContext();
  const isLoading = instruments === undefined && instrument === undefined;

  return (
    <ConfigSection title="Instrument" tooltipMessage="Select the instrument that plays">
      {isLoading ? (
        <p>Loading instruments...</p>
      ) : (
        <ButtonGroup>
          {instruments.map((i, idx) => (
            <ToggleButton
              key={idx}
              value={i.displayName}
              type="checkbox"
              variant={'light'} //light or link
              size="sm"
              checked={i.instrumentName == instrument?.instrumentName}
              onChange={() => selectInstrument(i.instrumentName)}
            >
              {' '}
              {i.emoji} {i.displayName}
            </ToggleButton>
          ))}
        </ButtonGroup>
      )}
    </ConfigSection>
  );
};
