import { InstrumentName } from 'context/soundfont-wrapper';
import { useInstrumentContext } from 'context/SoundfontContext';
import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

interface InstrumentItem {
  title: string;
  emoji: string;
  instrumentName: InstrumentName;
  value: string;
}

export const SelectInstrumentButtonGroup = (): JSX.Element => {
  const [radioValue, setRadioValue] = useState('1');
  const { setNewInstrument } = useInstrumentContext();

  const instruments: InstrumentItem[] = [
    { title: 'Guitar', emoji: '🎸', instrumentName: 'acoustic_guitar_nylon', value: '1' },
    { title: 'Grand Piano', emoji: '🎹', instrumentName: 'acoustic_grand_piano', value: '2' },
    { title: 'Trumpet', emoji: '🎺', instrumentName: 'trumpet', value: '3' },
  ];

  return (
    <>
      <ButtonGroup>
        {instruments.map((instrument, idx) => (
          <ToggleButton
            key={idx}
            type="checkbox"
            variant={'light'} //light or link
            size="sm"
            value={instrument.value}
            checked={radioValue === instrument.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
              setNewInstrument(instrument.instrumentName);
            }}
          >
            {' '}
            {instrument.emoji} {instrument.title}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};
