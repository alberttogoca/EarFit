import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { MenuItemInfo } from 'utils/menuItemsInfo';

interface Props {
  item: MenuItemInfo;
}

export const MenuItem = ({ item }: Props): JSX.Element => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <div className="d-flex justify-content-center p-3 ">
      <Link href={item.path} passHref>
        <a className="text-decoration-none text-reset">
          {isHome && (
            <Button
              key={item.label}
              variant={'light'} //light or link
              size="lg"
            >
              <h1 className="display-4">{item.label}</h1>{' '}
            </Button>
          )}
          {!isHome && (
            <Button
              key={item.label}
              variant={'light'} //light or link
              size="lg"
              active={pathname == '/' + item.label.toLocaleLowerCase()}
            >
              <h2>{item.label}</h2>
            </Button>
          )}
        </a>
      </Link>
    </div>
  );
};

/*
{isHome && <h1 className="display-4">{item.label}</h1>}
          {!isHome && <h2>{item.label}</h2>}
          */
