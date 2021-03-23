
export default function About() {
    return (
      <>
      {/*Fila*/}
      <div className="row ">
          {/*Columna 1*/}
          <div className="col-sm border ">
          <img src="/images/profile.png" className="rounded mx-auto d-block p-3" alt="Yo"></img>
        </div>
        {/*Columna 2*/}
        <div className="col-sm border">
          <div className="d-flex justify-content-center p-3 "><h1 className="display-4">Alberto Gómez Cano</h1></div>
          <div className="p-3"><p className="lead ">TFG Prototype</p></div>
        </div>
     </div>
      </>
    );
  }