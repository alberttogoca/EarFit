import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

interface Props {
  option: Selectable;
  handleOptionClick: (option: Selectable) => boolean;
  streak: number;
}

export const OptionItem = ({ option, handleOptionClick, streak }: Props): JSX.Element => {
  const [enable, setEnable] = useState<boolean>(true);
  const variant = enable ? 'secondary' : 'danger';

  useEffect(() => {
    if (streak > 0) {
      setEnable(true);
    }
  }, [streak]);

  return (
    <>
      <Button
        variant={variant}
        onClick={() => {
          setEnable(handleOptionClick(option));
        }}
      >
        {option.displayName}
      </Button>
    </>
  );
};
