import { useState } from "react";

const IfElse = () => {

    const [variable, setVariable] = useState(
        {
            ifNumber: 8,
            ifElseNumber: -7,
            elseIfNumber: 0,
        }
    );

    const handleChange = event => {
        const { name, value } = event.target;
        setVariable(prevValues => {
            return {
                ...prevValues, [name]: value
            }
        })
    };

    const outputIfNumber = variable.ifNumber > 0 ? "Het getal is positief." : "";
    const outputIfElseNumber = variable.ifElseNumber > 0 ? "Het getal is positief." : "Het getal is negatief."
    const outputElseIfNumber =
        variable.elseIfNumber > 0
            ? "Het getal is positief."
            : variable.elseIfNumber < 0
                ? "Het getal is negatief."
                : "Het getal is 0."

    const getLengthNumber = number => {
        return number.toString().length + 1
    };

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="if,%20else,%20else%20if">if, else, else if</h4>
                <hr className="smallmarginbottom" />
                <p>
                    Als de input moet voldoen aan een bepaalde voorwaarde, wordt een <span className="code purple">
                        if</span>-instructie gebruikt.<br />Wordt aan de voorwaarde voldaan &#0040;is de voorwaarde <span
                            className="code darkblue">true</span>&#0041;, dan wordt het <span className="code purple">
                        if</span>-block uitgevoerd, anders wordt er geen actie uitgevoerd.
                </p>
                <p className="adjustmentblock">Verander<br /> de waarde!</p>

                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <form className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">getal</span> =
                        <input
                            className="smallinputfield digit"
                            type="text"
                            name="ifNumber"
                            value={variable.ifNumber}
                            onChange={handleChange}
                            autoComplete="off"
                            style={{ width: `${getLengthNumber(variable.ifNumber)}ch` }}
                        />;
                        <span className="green"> &#0047;&#0047; Deze waarde kun je veranderen!</span>
                    </form>
                    <p className="code">
                        <span className="purple">if</span> <span className="yellow">&#0040;</span><span
                            className="lightblue">getal</span> &gt; <span className="digit">0</span><span
                                className="yellow">&#0041; &#123;</span>
                    </p>
                    <p className="code">
                        <span className="lightblue indention">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="orange">"Het getal is positief."</span><span
                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">{outputIfNumber}</p>
                </div>
                <p>
                    Moet er ook een actie worden uitgevoerd wanneer er niet aan de voorwaarde wordt
                    voldaan, dan wordt een <span className="code purple">if</span>-<span
                        className="code purple">else</span>-instructie
                    gebruikt.
                </p>
                <p className="adjustmentblock">Verander<br /> de waarde!</p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <form className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">getal</span> =
                        <input
                            className="smallinputfield digit"
                            type="text"
                            name="ifElseNumber"
                            value={variable.ifElseNumber}
                            onChange={handleChange}
                            autoComplete="off"
                            style={{ width: `${getLengthNumber(variable.ifElseNumber)}ch` }}
                        />;
                        <span className="green"> &#0047;&#0047; Deze waarde kun je veranderen!</span>
                    </form>
                    <p className="code">
                        <span className="purple">if</span> <span className="yellow">&#0040;</span><span
                            className="lightblue">getal</span> &gt; <span className="digit">0</span><span
                                className="yellow">&#0041; &#123;</span>
                    </p>
                    <p className="code">
                        <span className="lightblue indention">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="orange">"Het getal is positief."</span><span
                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="yellow">&#125;</span>
                    </p>
                    <p className="code">
                        <span className="purple">else</span> <span className="yellow">&#123;</span>
                    </p>
                    <p className="code">
                        <span className="lightblue indention">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="orange">"Het getal is negatief."</span><span
                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">{outputIfElseNumber}</p>
                </div>
                <p>
                    Indien er niet aan de eerste voorwaarde wordt voldaan, kan de input worden getoetst aan een andere
                    voorwaarde. In dat geval wordt een <span className="code purple">else if</span>-instructie gebruikt.
                </p>
                <p className="adjustmentblock">Verander<br />de waarde!</p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <form className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">getal</span> =
                        <input
                            className="smallinputfield digit"
                            type="text"
                            name="elseIfNumber"
                            value={variable.elseIfNumber}
                            onChange={handleChange}
                            autoComplete="off"
                            style={{ width: `${getLengthNumber(variable.elseIfNumber)}ch` }}
                        />;
                        <span className="green"> &#0047;&#0047; Deze waarde kun je veranderen!</span>
                    </form>
                    <p className="code">
                        <span className="purple">if</span> <span className="yellow">&#0040;</span><span
                            className="lightblue">getal</span> &gt; <span className="digit">0</span><span
                                className="yellow">&#0041; &#123;</span>
                    </p>
                    <p className="code">
                        <span className="lightblue indention">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;<span className="orange">"Het getal is positief."</span>&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="yellow">&#125;</span>
                    </p>
                    <p className="code">
                        <span className="purple">else if</span> <span className="yellow">&#0040;</span><span
                            className="lightblue">getal</span> &lt; <span className="digit">0</span><span
                                className="yellow">&#0041; </span> <span
                                    className="yellow">&#123;</span>
                    </p>
                    <p className="code">
                        <span className="lightblue indention">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;<span className="orange">"Het getal is negatief."</span>&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="yellow">&#125;</span>
                    </p>
                    <p className="code">
                        <span className="purple">else</span> <span className="yellow">&#123;</span>
                    </p>
                    <p className="code">
                        <span className="lightblue indention">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;<span className="orange">"Het getal is 0."</span>&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <div className="codeblock bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">{outputElseIfNumber}</p>
                </div>
            </section>
        </>
    );
};

export default IfElse;