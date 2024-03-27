import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="flex texthorizontalcentered1 textverticalcentered height100percent">
                <div className="widthfitcontent">
                    <h1><Link to="/">theorie en best practices</Link> </h1>
                </div>
            </div>
        </>
    );
};

export default Header;