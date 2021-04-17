import { ReactNode } from 'react';

interface IProps {
  col1?: ReactNode;
  children?: ReactNode;
  col3?: ReactNode;
}

export default function ExerciseLayout({ col1, children, col3 }: IProps): JSX.Element {
  return (
    <>
      {/*Container*/}
      <div className="container-fluid bg-light">
        {/*Fila*/}
        <div className="row p-3">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-lg-block">{col1}</div>
          {/*Columna 2*/}
          <div className="col-lg-6 border p-3 shadow-lg">{children}</div>
          {/*Columna 3*/}
          <div className="col-sm border">{col3}</div>
        </div>
      </div>
    </>
  );
}
