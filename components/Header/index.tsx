import { Sidebar } from 'components/Header/Sidebar';
import Link from 'next/link';

export const Header = (): JSX.Element => {
  return (
    <>
      <Sidebar> </Sidebar>
      <Link href="/">
        <div className="d-flex justify-content-center p-3 btn">
          <h1>EARFIT</h1>
        </div>
      </Link>
    </>
  );
};
