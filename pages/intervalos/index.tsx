
import PianoBasic from "../../components/PianoBasic";
import Navbar from '../../components/Navbar/navbar'
import 'bootswatch/dist/pulse/bootstrap.min.css'


export default function Intervalos() {
  return (
    <>
        <Navbar></Navbar>
        {/*Container*/}
        <div className="container-fluid bg-light ">
            {/*Fila*/}
            <div className="row p-3">
                {/*Columna 1*/}
                <div className="col-sm border d-none d-md-block  ">
                </div>
                {/*Columna 2*/}
                <div className="col-lg-6 border p-3  "> 
                <div className="d-flex justify-content-center p-3 "><h1 className="display-4">Piano</h1></div>               
                <div className="d-flex justify-content-center p-3 "><PianoBasic></PianoBasic></div>
                </div>
                {/*Columna 3*/}
                <div className="col-sm border d-none d-md-block">
                </div>
            </div>
        </div>

    </>
  );
}
