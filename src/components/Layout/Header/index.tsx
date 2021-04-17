import Link from 'next/link';

export const Header = (): JSX.Element => {
  return (
    <>
      <Link href="/">
        <div className="d-flex justify-content-center p-3 btn">
          <h1>EARFIT</h1>
        </div>
      </Link>
    </>
  );
};
