import MENU_INFO from 'services/menuService';

import MenuItem from './MenuItem';

export default function Menu(): JSX.Element {
  return (
    <>
      {MENU_INFO.map((item) => {
        return <MenuItem key={item.label} item={item} />;
      })}
    </>
  );
}
