import { ItemMenu } from './ItemMenu';

export const Menu = (): JSX.Element => {
  return (
    <>
      <ItemMenu href="/notes" name="Notes" />
      <ItemMenu href="/intervals" name="Intervals" />
      <ItemMenu href="/scales" name="Scales" />
      <ItemMenu href="/piano" name="Piano" />
      <ItemMenu href="/about" name="About" />
    </>
  );
};
