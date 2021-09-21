import { Button, ButtonGroup } from 'react-bootstrap';

type VariantColor = 'success' | 'secondary' | 'danger';

export interface IOption {
  displayName: string;
  color: VariantColor;
  value?: string;
}

interface Props {
  options: IOption[];
  handleOptionClick: (option: IOption) => boolean;
}

export const Options = ({ options, handleOptionClick }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {options.map((option, idx) => (
          <Button key={idx} variant={option.color} onClick={() => handleOptionClick(option)}>
            {option.displayName}
          </Button>
        ))}
      </div>
    </ButtonGroup>
  );
};
