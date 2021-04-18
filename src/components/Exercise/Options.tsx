interface Props {
  options: string[];
  optionClassName: string;
  handleOptionClick: (option: string) => void;
}

export const Options = ({ options, optionClassName, handleOptionClick }: Props): JSX.Element => {
  return (
    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {options.map((option) => (
          <button key={option} type="button" className={optionClassName} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
