import starFilled from "../../Images/star-filled.png";
import starEmpty from "../../Images/star-empty.png";

const Star = (isFilled, handleClick) => {
    const starIcon = isFilled ? starFilled : starEmpty
    return (
        <img alt="favorite" src={starIcon} height={100} width={100} onClick={handleClick} />
    )
};

export default Star;