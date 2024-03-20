import katie from "../Images/katie-zaferes.png";
import star from "../Images/star.png";

const Card = () => {
    return (
        <div className="props_card">
            <img src={katie} className="props_card_photo" alt="card" />
            <div className="props_card_stats poppins">
                <img src={star} className="props_card_star" alt="card_star" />
                <span className="darkgrey spacer">5.0</span>
                <span className="darkgrey">&#0040;6&#0041;<span className="spacer">&#8226;</span></span>
                <span className="darkgrey">USA</span>
            </div>
            <p className="darkgrey poppins">Life lessons with Katie Zaferes</p>
            <p className="darkgrey poppins"><span className="props_bold">From $136</span> / person</p>
        </div>
    )
};

export default Card;