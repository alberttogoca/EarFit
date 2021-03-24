import Menu from 'components/Menu';
import { Options } from 'components/Options';
import PianoBasic from 'components/PianoBasic';

export default function Piano(): JSX.Element {
  return (
    <>
      {/*Container*/}
      <div className="container-fluid">
        {/*Fila*/}
        <div className="row p-3">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block  ">
            <Menu></Menu>
          </div>
          {/*Columna 2*/}
          <div className="col-lg-6 border p-3 shadow-lg ">
            <div className="d-flex justify-content-center p-3 ">
              <h1 className="display-4">Piano</h1>
            </div>
            <div className="d-flex justify-content-center p-3 ">
              <PianoBasic></PianoBasic>
            </div>
          </div>
          {/*Columna 3*/}
          <div className="col-sm border d-none d-md-block">
            <Options page="Piano"></Options>
          </div>
        </div>
      </div>
    </>
  );
}
