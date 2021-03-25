import Menu from 'components/Menu';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>EarFit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta
          name="description"
          content="EARFIT: Aplicación para entrenamiento auditivo musical basada en Next.js y Typescript"
        ></meta>
      </Head>

      {/*Container*/}
      <div className="container-fluid bg-light ">
        {/*Fila*/}
        <div className="row ">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block  "></div>

          {/*Columna 2*/}
          <div className="col-lg-6 border p-3 shadow-lg ">
            <Menu home={true}></Menu>
          </div>

          {/*Columna 3*/}
          <div className="col-sm border d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
}
