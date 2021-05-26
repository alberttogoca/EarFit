import MenuItemsInfo from 'utils/MenuItems';

import { ItemMenu } from './ItemMenu';

export const Menu = (): JSX.Element => {
  return (
    <>
      {MenuItemsInfo.map((item) => {
        return <ItemMenu key={item.label} item={item} />;
      })}
    </>
  );
};
