import star from "../Images/star.png";

const Card = props => {
    return (
        <div className="props_card">
            <img src={props.img} className="props_card_photo" alt="card" />
            <div className="props_card_stats poppins">
                <img src={star} className="props_card_star" alt="card_star" />
                <span className="darkgrey spacer">{props.rating}</span>
                <span className="darkgrey">&#0040;{props.reviewCount}&#0041;<span className="spacer">&#8226;</span></span>
                <span className="darkgrey">{props.country}</span>
            </div>
            <p className="props_card_title darkgrey poppins">{props.title}</p>
            <p className="props_card_price darkgrey poppins"><span className="props_bold">From ${props.price}</span> / person</p>
        </div>
    )
};

export default Card;