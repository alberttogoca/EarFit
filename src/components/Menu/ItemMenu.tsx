import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface IProps {
  href: string;
  name: string;
}

export const ItemMenu = ({ href, name }: IProps): JSX.Element => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  return (
    <div className="d-flex justify-content-center p-3 ">
      <Link href={href} passHref>
        <a className="text-decoration-none text-reset">
          {isHome && <h1 className="display-4">{name}</h1>}
          {!isHome && <h2>{name}</h2>}
        </a>
      </Link>
    </div>
  );
};
