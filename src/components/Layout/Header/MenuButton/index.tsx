import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function MenuButton(): JSX.Element {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <>
      {!isHome && (
        <Link href="/">
          <a>
            <Button variant={'link'} size="sm">
              <h3>=</h3>
            </Button>
          </a>
        </Link>
      )}
    </>
  );
}
