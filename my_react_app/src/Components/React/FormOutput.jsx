const OutputToConsole = props => {

    return (
        <div>
            <ul className="noliststyle">
                <li>{props.head}</li>
                <li>{props.name}</li>
                <li>{props.adress}</li>
                <li>{props.postalcode}</li>
                <li>{props.town}</li>
                <li>{props.province}</li>
                <li>{props.email}</li>
                <li>{props.comment}</li>
                <li>{props.checkbox}</li>
            </ul>
        </div>
    )
};

export default OutputToConsole;