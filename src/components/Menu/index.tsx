import menuItemsInfo from 'utils/MenuItemsInfo';

import { MenuItem } from './ItemMenu';

export const Menu = (): JSX.Element => {
  return (
    <>
      {menuItemsInfo.map((item) => {
        return <MenuItem key={item.label} item={item} />;
      })}
    </>
  );
};
