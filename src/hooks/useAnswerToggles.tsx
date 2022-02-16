import Selectable, { selectAllOrThreeItems, updateIsSelectedItem } from 'utils/Selectable';

type HookReturnType = {
  updateIsSelected: (selectable: Selectable) => void;
  selectAllOrThree: () => void;
};

export function useAnswerToggles(
  selectables: Selectable[],
  setNewSelectables: (selectables: Selectable[]) => void
): HookReturnType {
  const updateIsSelected = (selectable: Selectable): void => {
    const newAnswerToggles = updateIsSelectedItem(selectables, selectable.id, !selectable.isSelected);
    setNewSelectables(newAnswerToggles);
  };

  const selectAllOrThree = (): void => {
    const newAnswerToggles = selectAllOrThreeItems(selectables);
    setNewSelectables(newAnswerToggles);
  };

  return { updateIsSelected, selectAllOrThree };
}

export default useAnswerToggles;
