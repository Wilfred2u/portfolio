import star from "../Images/star.png";

const Card = props => {
    return (
        <div className="props_card">
            <img src={props.item.coverImg} className="props_card_photo" alt="card" />
            <div className="props_card_stats poppins">
                <img src={star} className="props_card_star" alt="card_star" />
                <span className="darkgrey spacer">{props.item.stats.rating}</span>
                <span className="darkgrey">&#0040;{props.item.stats.reviewCount}&#0041;<span className="spacer">&#8226;</span></span>
                <span className="darkgrey">{props.item.location}</span>
            </div>
            <p className="props_card_title darkgrey poppins">{props.item.title}</p>
            <p className="props_card_price darkgrey poppins"><span
                className="props_bold">From ${props.item.price}</span> / person</p>
        </div>
    )
};

export default Card;