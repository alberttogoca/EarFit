import Link from 'next/link';

interface IProps {
  home?: boolean;
  href: string;
  children: string;
}

export default function ItemMenu({ home, href, children }: IProps): JSX.Element {
  return (
    <>
      {home ? (
        <>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href={href}>
              <h1 className="display-4">{children}</h1>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href={href}>
              <h2>{children}</h2>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
