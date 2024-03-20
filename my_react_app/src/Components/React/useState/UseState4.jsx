import { useState } from "react";

const UseState4 = () => {

    const [isWeatherGood, setIsWeatherGood] = useState(true);

    const handleState = () => setIsWeatherGood(prevState => !prevState);

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="usestate_boolean">useState - boolean</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    In het volgende voorbeeld is de staat een <i>boolean</i>. De waarde hiervan kan schakelen tussen <span
                        className="code darkblue">true</span> en <span className="code darkblue">false</span>. Dit gebeurt
                    door het klikken op een <i>event handler</i>. De event handler keert de waarde van de staat om: <span
                        className="code darkblue">true</span> wordt <span className="code darkblue">false</span> en <span
                            className="code darkblue">false</span> wordt <span className="code darkblue">true</span>.
                    De ternaire operator bepaalt vervolgens de inhoud van het <span className="code grey">&lt;<span
                        className="code darkblue">h1</span>&gt;</span>-element.
                </p>

                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code noline">
                        <span className="purple">import <span className="yellow">&#123; <span
                            className="lightblue">useState</span> &#125;</span> from</span> <span className="orange">"react"</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">App</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p>
                    <p className="code indention noline">
                        <span className="darkblue">const</span> <span className="purple">&#0091;<span
                            className="blue">isWeatherGood</span><span className="white">,</span> <span
                                className="lightyellow">setIsWeatherGood</span>&#0093;</span> = <span
                                    className="lightyellow">useState</span><span className="purple">&#0040;<span
                                        className="darkblue">true</span>&#0041;</span>;
                    </p>
                    <p className="code indention noline">
                        <span className="darkblue">const</span> <span className="lightyellow">handleState</span> = <span
                            className="purple">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="lightyellow">setIsWeatherGood</span><span className="purple">&#0040;<span
                                    className="lightblue">prevState</span> <span className="darkblue">=&gt;</span> <span
                                        className="white">!</span><span className="lightblue">prevState</span>&#0041;</span>;
                    </p>
                    <p className="code indention purple">return &#0040;</p>
                    <p className="code doubleindention grey">&lt;&gt;</p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">h1</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"state--question"</span>&gt;</span>Wordt het morgen mooi weer?<span
                                    className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span> <span
                            className="lightblue">onClick</span><span className="white">=</span><span
                                className="darkblue">&#123;<span className="lightyellow">handleState</span>&#125;</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">h1</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"state--answer"</span>&gt;</span><span className="darkblue">&#123;<span
                                    className="blue">isWeatherGood <span className="white">?</span> <span
                                        className="orange">"Ja"</span> <span className="white">:</span> <span
                                            className="orange">"Nee"</span></span>&#125;</span><span
                                                className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span
                            className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code doubleindention grey">&lt;&#0047;&gt;</p>
                    <p className="code indention purple">&#0041;</p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">App</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey verylargemarginbottom roundradii">
                    <h1 className="darkgrey texthorizontalcentered2 mediummarginbottom">Wordt het morgen mooi weer?</h1>
                    <div className="state--value" onClick={handleState}>
                        <h1 className="bgdarkgrey flex circle width100 height100 divhorizontalcentered textverticalcentered pointer">{isWeatherGood ? "Ja" : "Nee"}</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UseState4;