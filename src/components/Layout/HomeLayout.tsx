import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

export default function HomeLayout({ children }: IProps): JSX.Element {
  return (
    <>
      {/*Container*/}
      <div className="container-fluid bg-light">
        {/*Fila*/}
        <div className="row">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block"></div>
          {/*Columna 2*/}
          <div className="col-lg-6 border p-3 shadow-lg">{children}</div>
          {/*Columna 3*/}
          <div className="col-sm border d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
}
