import Link from 'next/link';

export const Logo = (): JSX.Element => {
  return (
    <h1>
      <Link href="/">
        <a className="link-unstyled">EARFIT</a>
      </Link>
    </h1>
  );
};
