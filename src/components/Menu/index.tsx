import menuItemsInfo from 'utils/MenuItemsInfo';

import { ItemMenu } from './ItemMenu';

export const Menu = (): JSX.Element => {
  return (
    <>
      {menuItemsInfo.map((item) => {
        return <ItemMenu key={item.label} item={item} />;
      })}
    </>
  );
};
