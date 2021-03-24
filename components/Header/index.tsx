import Sidebar from 'components/Sidebar';
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <>
      <Link href="/">
        <div className="d-flex justify-content-center p-3 btn">
          <h1 className="display-6">EARFIT</h1>
        </div>
      </Link>
      <Sidebar> </Sidebar>
    </>
  );
}
