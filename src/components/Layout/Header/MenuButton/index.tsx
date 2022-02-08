import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export const MenuButton = (): JSX.Element => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <Link href="/">
      <a>
        {!isHome && (
          <Button variant={'link'} size="sm">
            <h3>=</h3>
          </Button>
        )}
      </a>
    </Link>
  );
};
