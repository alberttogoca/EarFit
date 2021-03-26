import Menu from 'components/Menu';

export default function Home(): JSX.Element {
  return (
    <>
      {/*Container*/}
      <div className="container-fluid bg-light ">
        {/*Fila*/}
        <div className="row ">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block  "></div>

          {/*Columna 2*/}
          <div className="col-lg-6 border p-3 shadow-lg ">
            <Menu home></Menu>
          </div>

          {/*Columna 3*/}
          <div className="col-sm border d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
}
