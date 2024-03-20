import { useState } from "react";

const Functies = () => {

    const [variabele, setVariable] = useState(
        {
            argument1: 64,
            argument2: 72,
        }
    )

    const handleChange = event => {
        const { name, value } = event.target;
        setVariable(prevValues => {
            return {
                ...prevValues, [name]: value
            }
        })
    };

    const outputArgument1 = Math.round(5 / 9 * (variabele.argument1 - 32))
    const outputArgument2 = Math.round(5 / 9 * (variabele.argument2 - 32))

    const getLengthArgument = number => {
        return number.toString().length
    }

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="functies">functies</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    Een functie is een block met code dat een bepaalde taak kan uitvoeren. De code wordt uitgevoerd
                    wanneer de functie wordt aangeroepen.<br />
                    Een functie wordt gedefinieerd met het <span className="code darkblue">function</span> <i>keyword</i>,
                    gevolgd door een naam. Daarachter komt <span className="code yellow">&#0040;&#0041;</span>,
                    waartussen geen, één of meerdere parameters kunnen worden geschreven. Daarachter komt <span
                        className="code yellow">&#123;&#125;</span>, waartussen de code wordt geschreven die de functie
                    moet uitvoeren.
                </p>
                <div className="codeblock bgdarkgrey largemarginbottom roundradii">
                    <p className="code"><span className="darkblue">function</span> <span
                        className="lightyellow">optellen</span><span className="yellow">&#0040;</span><span
                            className="lightblue">getal1</span>, <span className="lightblue">getal2</span><span
                                className="yellow">&#0041; &#123;</span>
                    </p>
                    <p className="code indention"><span className="purple">return</span> <span
                        className="lightblue">getal1</span> + <span className="lightblue">getal2</span>
                    </p>
                    <p className="code yellow">&#125;</p>
                </div>
                <p className="noline">
                    De code in het block wordt alleen uitgevoerd wanneer de functie wordt aangeroepen. Dit kan gebeuren
                    door middel van een muisklik of wordt aangeroepen vanuit de code. De <span
                        className="code purple">&#0040;&#0041;</span>-operator roept de functie aan.
                </p>
                <p className="largemarginbottom">
                    De waarde van het argument kan worden veranderd.
                    Klik erop, voer een andere waarde in en kijk hoe de output zich aanpast.
                </p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code"><span className="darkblue">function</span> <span
                        className="lightyellow">naarCelsius</span><span className="yellow">&#0040;</span><span
                            className="lightblue">fahrenheit</span><span className="yellow">&#0041; &#123;
                        </span>
                    </p>
                    <p className="code indention"><span className="purple">return</span> <span
                        className="lightblue">Math</span>.<span className="lightyellow">round</span><span
                            className="purple">&#0040;</span><span className="digit">5</span>/<span
                                className="digit">9</span> * <span className="darkblue">&#0040;</span><span
                                    className="lightblue">fahrenheit</span> - <span className="digit">32</span><span
                                        className="darkblue">&#0041;</span><span className="purple">&#0041;</span>
                    </p>
                    <p className="code noline yellow">&#125;</p>
                    <form className="code">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="yellow">&#0040;</span><span className="lightyellow">naarCelsius</span><span
                                className="purple">&#0040;</span>
                        <input
                            className="smallinputfield digit"
                            type="text"
                            name="argument1"
                            value={variabele.argument1}
                            onChange={handleChange}
                            autoComplete="off"
                            style={{ width: `${getLengthArgument(variabele.argument1)}ch` }}
                        /><span className="purple">&#0041;</span><span className="yellow">&#0041;</span>; <span
                            className="green">&#0047;&#0047; Dit argument kun je veranderen!</span>
                    </form>
                </div>

                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">{outputArgument1}</p>
                </div>
                <p className="largemarginbottom">
                    Een <i>parameter</i> staat in de functiedefinitie en wordt gebruikt om een variabele waarde mee aan te duiden.
                    Een <i>argument</i> staat in de functie-aanroeping en heeft de waarde van de variabele.
                </p>
                <p className="largemarginbottom">
                    De uitkomst van een functie kan als variabele worden gebruikt in allerlei toewijzingen en berekeningen.
                </p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <form className="code">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="yellow">&#0040;</span><span className="orange">"Het is "</span> + <span
                                className="lightyellow">naarCelsius</span><span className="purple">&#0040;</span>
                        <input
                            className="smallinputfield digit"
                            type="text"
                            name="argument2"
                            value={variabele.argument2}
                            onChange={handleChange}
                            autoComplete="off"
                            style={{ width: `${getLengthArgument(variabele.argument2)}ch` }}
                        />
                        <span className="purple">&#0041;</span> + <span
                            className="orange">" graden Celsius."</span><span
                                className="yellow">&#0041;</span>; <span
                                    className="green">&#0047;&#0047; Dit argument kun je veranderen!</span>
                    </form>
                </div>
                <div className="codeblock bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">Het is {outputArgument2} graden Celsius.</p>
                </div>
            </section >
        </>
    );
};

export default Functies;