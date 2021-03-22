import Header from "../Header/Header";

export default function Layout({children}) {
    return (
        <>
            <Header></Header>
            <script src="tonal.min.js"></script>

            {children}
        </>
    )
}
