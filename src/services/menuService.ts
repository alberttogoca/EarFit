import { MenuItemInfo } from 'types';

const MENU_INFO: MenuItemInfo[] = [
  { label: 'Notes', path: '/notes', description: 'Test notes.' },
  { label: 'Intervals', path: '/intervals', description: 'Test Intervals.' },
  { label: 'Scales', path: '/scales', description: 'Test Scales.' },
  { label: 'Piano', path: '/piano', description: 'Play the piano.' },
  { label: 'About', path: '/about', description: 'Information.' },
];

export const getMenuInfo = (): MenuItemInfo[] => {
  return MENU_INFO;
};

export default MENU_INFO;
