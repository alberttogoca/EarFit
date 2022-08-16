import Link from 'next/link';

export default function Logo(): JSX.Element {
  return (
    <h1>
      <Link href="/">
        <a className="link-unstyled">EARFIT</a>
      </Link>
    </h1>
  );
}
