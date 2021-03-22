import Header from "../Header/Header";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({children}) {
    return (
        <>
            <Header>
            <Link href="/">
                <div className="d-flex justify-content-center p-3 "><h1 className="display-6">EARFIT</h1></div>               
            </Link>
                <Sidebar> </Sidebar>
            </Header>
            {children}
        </>
    )
}
