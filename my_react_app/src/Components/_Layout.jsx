import { Outlet } from "react-router-dom";
import Header from "./_Header";
import Chapter from "./_ChapterList"
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
    return (
        <div className="parentgrid">
            <ScrollToTop />
            <header className="bgdarkgrey">
                <Header />
            </header>
            <nav className="bgmediumgrey mediumpaddingtop height100percent">
                <Chapter />
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;