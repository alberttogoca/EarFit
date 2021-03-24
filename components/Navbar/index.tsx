import Link from 'next/link';

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link href="/notas">
                <a>Notes</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/intervalos">
                <a>Intervals</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/escalas">
                <a>Scales</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/piano">
                <a>Piano</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
