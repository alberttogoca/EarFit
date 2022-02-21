import menuItemsInfo from 'utils/menuItemsInfo';

import { MenuItem } from './MenuItem';

export const Menu = (): JSX.Element => {
  return (
    <>
      {menuItemsInfo.map((item) => {
        return <MenuItem key={item.label} item={item} />;
      })}
    </>
  );
};
