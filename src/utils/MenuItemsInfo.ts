export interface MenuItemsInfo {
  label: string;
  path: string;
  description?: string;
}

const menuItemsInfo: MenuItemsInfo[] = [
  { label: 'Notes', path: '/notes', description: 'Aquí tocamos notas muy bonitas' },
  { label: 'Intervals', path: '/intervals', description: 'Para enredar con intervalos.' },
  { label: 'Scales', path: '/scales', description: 'Sección para tocar escalas' },
  { label: 'Piano', path: '/piano', description: 'Un piano to guapo pa que toques Vivaldi o Bad Bunny' },
  { label: 'About', path: '/about', description: 'En esta sección salgo yo :)' },
];

export default menuItemsInfo;
