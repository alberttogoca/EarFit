import { OptionItem } from './OptionItem';

interface Props {
  options: string[];
  optionClassName: string;
  handleOptionClick: (string) => void;
}

export const Options = ({ options, optionClassName, handleOptionClick }: Props): JSX.Element => {
  return (
    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {options.map((option) => (
          <OptionItem
            key={option}
            option={option}
            optionClassName={optionClassName}
            handleOptionClick={handleOptionClick}
          />
        ))}
      </div>
    </div>
  );
};
