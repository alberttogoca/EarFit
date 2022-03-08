import menuItemsInfo from 'services/menuService';

import { MenuItem } from './MenuItem';

export default function Menu(): JSX.Element {
  return (
    <>
      {menuItemsInfo.map((item) => {
        return <MenuItem key={item.label} item={item} />;
      })}
    </>
  );
}
