import { IOption } from 'components/Exercise/Options';
import { useEffect, useState } from 'react';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  options: IOption[];
  updateOption(optionToUpdate: IOption, isAnswer: boolean): void;
  clearOptions(): void;
};

export function useOptions(selectables: Selectable[]): HookReturnType {
  const [options, setOptions] = useState<IOption[]>([]);

  useEffect(() => {
    const newOptions = selectables
      .filter((n) => n.isSelected)
      .map<IOption>((item) => {
        return {
          ...item,
          color: 'secondary',
        };
      });

    setOptions(newOptions);
  }, [selectables]);

  function updateOption(optionToUpdate: IOption, isAnswer: boolean): void {
    const newOptions = options.map<IOption>((option) => {
      if (optionToUpdate.displayName === option.displayName) {
        return {
          ...option,
          color: isAnswer ? 'success' : 'danger',
        };
      }
      return { ...option };
    });

    setOptions(newOptions);
  }

  function clearOptions(): void {
    setOptions((options) => {
      return options.map<IOption>((option) => {
        return {
          ...option,
          color: 'secondary',
        };
      });
    });
  }

  return { options, updateOption, clearOptions };
}

export default useOptions;
