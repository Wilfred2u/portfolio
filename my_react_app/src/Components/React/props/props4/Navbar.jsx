import airbnb_logo from "../Images/Airbnb-logo.png";

const Navbar = () => {
    return (
        <div className="props_nav">
            <img className="props_navbar_logo" src={airbnb_logo} alt="airbnb_logo" />
        </div>
    )
};

export default Navbar;