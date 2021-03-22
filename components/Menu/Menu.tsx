import Link from "next/link";

export default function Menu({ home }: {
  home?: boolean
}){
     return (
     <>
      {home ? (<>
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
      </>) : (<>
        <div className="d-flex justify-content-center p-3 ">
                <Link href="/notas"><h2>Notas</h2></Link></div>
              <div className="d-flex justify-content-center p-3 ">
                <Link href="/intervalos"><h2>Intervalos</h2></Link></div>
              <div className="d-flex justify-content-center p-3 ">
                <Link href="/escalas"><h2>Escalas</h2></Link></div>
              <div className="d-flex justify-content-center p-3 ">
                <Link href="/piano"><h2>Piano</h2></Link></div>
              <div className="d-flex justify-content-center p-3 ">
                <Link href="/about"><h2>About</h2></Link></div>
      </>)}
      </>
     )
         
}
              
   
