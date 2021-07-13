import React, { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

interface Props {
  options: string[];
  option: string;
  idx: number;
}

export const ActiveOptionsButtonItem = ({ options, option, idx }: Props): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  function toggleOption(selectedOption: string): void {
    if (options.includes(selectedOption)) {
      console.log(`${selectedOption} removed`);
    } else {
      console.log(`${selectedOption} added`);
    }
  }

  return (
    <>
      <ToggleButton
        key={option}
        type="checkbox"
        variant={'light'} //light or link
        size="sm"
        value={idx}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          toggleOption(option);
        }}
      >
        {' '}
        {option}
      </ToggleButton>
    </>
  );
};
