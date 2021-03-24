import Link from 'next/link';

export default function Menu({ home }: { home?: boolean }): JSX.Element {
  return (
    <>
      {home ? (
        <>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/notes">
              <h1 className="display-4">Notes</h1>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/intervals">
              <h1 className="display-4">Intervals</h1>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/scales">
              <h1 className="display-4">Scales</h1>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/piano">
              <h1 className="display-4">Piano</h1>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/about">
              <h1 className="display-4">About</h1>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/notes">
              <h2>Notes</h2>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/intervals">
              <h2>Intervals</h2>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/scales">
              <h2>Scales</h2>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/piano">
              <h2>Piano</h2>
            </Link>
          </div>
          <div className="d-flex justify-content-center p-3 btn">
            <Link href="/about">
              <h2>About</h2>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
