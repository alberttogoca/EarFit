import Link from 'next/link';

interface IProps {
  home?: boolean;
  href: string;
  children: string;
}

export const ItemMenu = ({ home, href, children }: IProps): JSX.Element => {
  return (
    <>
      {home ? (
        <>
          <div className="d-flex justify-content-center p-3 ">
            <Link href={href} passHref>
              <a className="text-decoration-none text-reset">
                <h1 className="display-4">{children}</h1>
              </a>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center p-3 ">
            <Link href={href} passHref>
              <a className="text-decoration-none text-reset">
                <h2>{children}</h2>
              </a>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
