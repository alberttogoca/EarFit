import { getRandomItem } from 'utils/arrayUtils';
import Selectable from 'utils/Selectable';

type HookReturnType = {
  updateIsSelected: (selectable: Selectable) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(
  selectables: Selectable[],
  setNewSelectables: (selectables: Selectable[]) => void
): HookReturnType {
  const selectAllOrThree = (): void => {
    const allSelected = selectables.every((option) => option.isSelected === true);
    const newNotes = selectables.map<Selectable>((note) => {
      return {
        ...note,
        isSelected: !allSelected,
      };
    });
    if (allSelected) {
      selectThreeOptions(newNotes);
    }
    setNewSelectables(newNotes);
  };

  const selectThreeOptions = (notes: Selectable[]): void => {
    let item = getRandomItem(notes);
    for (let i = 0; i < 3; i++) {
      while (item.isSelected === true) {
        item = getRandomItem(notes);
      }
      item.isSelected = true;
    }
  };

  const updateIsSelected = (selectable: Selectable): void => {
    const newValue = !selectable.isSelected;
    const hasManySelectedNotes = selectables.filter((n) => n.isSelected).length > 1;
    if (newValue === true || hasManySelectedNotes) {
      const newNotes = selectables.map((note) => {
        return {
          ...note,
          isSelected: note.displayName === selectable.displayName ? newValue : note.isSelected,
        };
      });
      setNewSelectables(newNotes);
    }
  };

  return { updateIsSelected, selectAllOrThree };
}

export default useAnswerToggles;
