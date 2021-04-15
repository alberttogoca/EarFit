import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  options: string[];
  optionClassName: string;
  onClick: MouseEventHandler;
  children?: ReactNode;
}

export const Options = ({ options, optionClassName, onClick }: Props): JSX.Element => {
  return (
    <>
      {/*OPCIONES*/}
      <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <div>
          {/* {options.map((option) => (
            <button key={option} type="button" className={optionClassName} onClick={onClick(option)}>
              {option}
            </button>
          ))} */}
        </div>
      </div>
    </>
  );
};
