interface Props {
  option: string;
  optionClassName: string;
  handleOptionClick: (string) => void;
}

export const OptionItem = ({ option, optionClassName, handleOptionClick }: Props): JSX.Element => {
  return (
    <>
      <button
        type="button"
        className={optionClassName}
        onClick={() => {
          handleOptionClick(option);
        }}
      >
        {option}
      </button>
    </>
  );
};
