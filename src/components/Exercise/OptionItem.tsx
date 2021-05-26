import React, { useEffect, useState } from 'react';

interface Props {
  option: string;
  optionClassName?: string;
  handleOptionClick: (string) => boolean;
  streak: number;
}

export const OptionItem = ({ option, handleOptionClick, streak }: Props): JSX.Element => {
  const [enable, setEnable] = useState<boolean>(true);
  const optionClassName = enable ? 'btn btn-secondary' : 'btn btn-danger';

  useEffect(() => {
    if (streak > 0) {
      setEnable(true);
    }
  }, [streak]);

  return (
    <>
      <button
        type="button"
        className={optionClassName}
        onClick={() => {
          setEnable(handleOptionClick(option));
        }}
      >
        {option}
      </button>
    </>
  );
};
