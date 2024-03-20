const ForLoop = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="for%20loop">for loop</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">Een loop doorloopt een actie een bepaald aantal malen. Dit werkt als volgt:
                </p>
                <ol>
                    <li>
                        De <i>initialExpression</i> &#040;<span className="code"><span className="lightblue">i</span> = <span
                            className="digit">0</span></span>&#041; wordt gedefinieerd en slechts &eacute;&eacute;n keer uitgevoerd.
                    </li>
                    <li>
                        De voorwaarde &#040;<span className="code"><span className="lightblue">i</span> &lt; <span
                            className="blue">kleuren</span>.<span className="lightblue">length</span></span>&#041; wordt
                        ge&euml;valueerd:
                        <ul>
                            <li>
                                Is de voorwaarde <span className="code darkblue">false</span>, dan wordt de for loop afgebroken;
                            </li>
                            <li>
                                Is de voorwaarde <span className="code darkblue">true</span>, dan wordt:
                                <ol>
                                    <li> de code in het block uitgevoerd;</li>
                                    <li> de <i>initialExpression</i> bijgewerkt door de <i>updateExpression</i> &#040;<span
                                        className="code"><span className="lightblue">i</span>++</span>&#041;.
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </li>
                    <li className="largemarginbottom">
                        De voorwaarde &#040;<span className="code"><span className="lightblue">i</span> &lt; <span
                            className="blue">kleuren</span>.<span className="lightblue">length</span></span>&#041; wordt weer
                        ge&euml;valueerd. Dit proces wordt steeds herhaald, net zolang totdat de voorwaarde <span
                            className="code darkblue">false</span> is.
                    </li>
                </ol>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code noline">
                        <span className="darkblue">const</span> <span className="blue">kleuren</span> = <span
                            className="yellow">&#091;<span className="orange">"rood", "blauw", "geel", "groen"</span>&#093;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">for</span> <span className="yellow">&#040;</span><span
                            className="lightblue">i</span> = <span className="digit">0</span>; <span className="lightblue">i</span> &lt; <span
                                className="blue">kleuren</span>.<span className="lightblue">length</span>; <span
                                    className="lightblue">i</span>++<span className="yellow">&#041; &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#040;<span className="blue">kleuren</span><span className="darkblue">&#091;<span
                                className="lightblue">i</span>&#093;</span>&#041;</span>;
                    </p>
                    <p className="code"><span className="yellow">&#125;</span></p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">"rood"</p>
                    <p className="code green">"blauw"</p>
                    <p className="code green">"geel"</p>
                    <p className="code green">"groen"</p>
                </div>
                <p>Er zijn twee variaties op de 'gewone' for loop, namelijk:</p>
                <ol className="largemarginbottom">
                    <li>de for...in loop;</li>
                    <li>de for...of loop.</li>
                </ol>
                <p className="largemarginbottom">
                    De for...in loop doorloopt de eigenschappen van een object en geeft per regel de naam en waarde van
                    de eigenschap weer.
                </p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code noline">
                        <span className="darkblue">const</span> <span className="blue">object</span> = <span
                            className="yellow">&#123;</span><span className="lightblue">voornaam:</span> <span
                                className="orange">"Jan"</span>, <span className="lightblue">achternaam:</span> <span
                                    className="orange">"De Vries"</span>, <span className="lightblue">leeftijd:</span> <span
                                        className="digit">28</span><span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">for</span> <span className="yellow">&#040;<span className="darkblue">const</span> <span
                            className="blue">eigenschap</span> <span className="darkblue">in</span> <span
                                className="blue">object</span>&#041; &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#040;<span className="orange">`<span className="darkblue">$&#123;<span
                                className="blue">eigenschap</span>&#125;</span> <span className="white">=</span> <span className="darkblue">$&#123;< span
                                    className="lightblue">object</span><span className="yellow">&#091;<span
                                        className="blue">eigenschap</span>&#093;</span>&#125;</span>`</span>&#041;</span>;
                    </p>
                    <p className="code"><span className="yellow">&#125;</span></p>
                </div >
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">"voornaam = Jan"</p>
                    <p className="code green">"achternaam = De Vries"</p>
                    <p className="code green">"leeftijd = 28"</p>
                </div>
                <p className="largemarginbottom">De for...of loop doorloopt de waarden van een 'doorloopbaar' object, zoals
                    een array, string, map of nodelist.</p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code noline">
                        <span className="darkblue">const</span> <span className="blue">woord</span> = <span className="orange">
                            "hallo"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">for</span> <span className="yellow">&#040;<span className="darkblue">const</span> <span
                            className="blue">waarde</span> <span className="darkblue">of</span> <span
                                className="blue">woord</span>&#041;
                            &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#040;<span className="blue">waarde</span>&#041;</span>;
                    </p>
                    <p>
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <div className="codeblock bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">"h"</p>
                    <p className="code green">"a"</p>
                    <p className="code green">"l"</p>
                    <p className="code green">"l"</p>
                    <p className="code green">"o"</p>
                </div>
            </section >
        </>
    );
};

export default ForLoop;