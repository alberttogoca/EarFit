import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import PianoBasic from "../../components/PianoBasic";
import Navbar from '../../components/Navbar/navbar'
import 'bootswatch/dist/pulse/bootstrap.min.css'


export default function Me() {
  return (
    <>
    <Navbar></Navbar>
    <Layout>
      <PianoBasic></PianoBasic>
    </Layout>
    </>
  );
}
