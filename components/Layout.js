import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout(props) {
    return (
        <>
            {/*<NavBar />*/}
            {props.children}
            {/*<Footer />*/}
        </>
    )
}

export default Layout;
