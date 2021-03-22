import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
    return (
        <>
            <Link href="/">
                <div className="d-flex justify-content-center p-3 btn"><h1 className="display-6">EARFIT</h1></div>               
            </Link>
            <Sidebar> </Sidebar>
        </>
    )
}
