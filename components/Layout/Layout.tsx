import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({children}) {
    return (
        <div>
            <Header>
            <div className="d-flex justify-content-center p-3 "><h1 className="display-6">EARFIT</h1></div>               
                <Sidebar> </Sidebar>
            <Navbar></Navbar>
            </Header>
            {children}
        </div>
    )
}
