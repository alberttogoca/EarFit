import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import "bootswatch/dist/pulse/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>EarFit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
    
      {/*Container*/}
      <div className="container-fluid bg-light ">
        {/*Fila*/}
        <div className="row ">
          {/*Columna 1*/}
          <div className="col-sm border d-none d-md-block  ">
          <div className="d-flex justify-content-center p-3"><h1>Menu</h1></div>
          <div className="p-3"><p className="lead">This has to be hidden while on Smartphone</p></div>
        </div>
          {/*Columna 2*/}
          <div className="col-lg-6 border p-3  ">
            <div className="d-flex justify-content-center p-3 ">
              <Link href="/notas"><h1 className="display-4">Notas</h1></Link></div>
            <div className="d-flex justify-content-center p-3 ">
              <Link href="/intervalos"><h1 className="display-4">Intervalos</h1></Link></div>
            <div className="d-flex justify-content-center p-3 ">
              <Link href="/escalas"><h1 className="display-4">Escalas</h1></Link></div>
            <div className="d-flex justify-content-center p-3 ">
              <Link href="/piano"><h1 className="display-4">Piano</h1></Link></div>
            <div className="d-flex justify-content-center p-3 ">
              <Link href="/about"><h1 className="display-4">About</h1></Link></div>
          </div>

          {/*Columna 3*/}
          <div className="col-sm border d-none d-md-block">
            <div className="d-flex justify-content-center p-3"><h1>Opciones</h1></div>
            <div className="p-3"><p className="lead">This has to be hidden while on /Home</p></div>
          </div>
        </div>
      </div>
    </>
  );
}
