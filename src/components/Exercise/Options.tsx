import { ButtonGroup } from 'react-bootstrap';
import Selectable from 'utils/Selectable';

import { OptionItem } from './OptionItem';

interface Props {
  options: Selectable[];
  handleOptionClick: (string) => boolean;
  streak: number;
}

export const Options = ({ options, handleOptionClick, streak }: Props): JSX.Element => {
  return (
    <ButtonGroup className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
      <div>
        {options.map((option) => (
          <OptionItem key={option.displayName} option={option} handleOptionClick={handleOptionClick} streak={streak} />
        ))}
      </div>
    </ButtonGroup>
  );
};
