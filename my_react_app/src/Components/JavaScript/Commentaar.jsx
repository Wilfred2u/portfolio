const Commentaar = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="commentaar">commentaar</h4>
                <hr className="smallmarginbottom" />
                <p>
                    Regels met commentaar worden niet uitgevoerd. Commentaar kan worden toegevoegd op verschillende
                    manieren en kan verschillende toepassingen hebben.
                </p>
                <ol className="largemarginbottom">
                    <li>Enkelregelig commentaar <span className="code green">&#0047;&#0047;</span><br />Wordt gebruikt om:
                        <ol>
                            <li>code te verduidelijken en beter leesbaar te maken;</li>
                        </ol>
                    </li>
                </ol>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code green">&#0047;&#0047; Zoek naar de positie van de eerste hoofdletter in een string.</p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="blue">groet</span> = <span
                            className="orange">"goedemorgen Jan"</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="blue">regex</span> = <span
                            className="red">&#0047;<span className="orange">&#0091;<span
                                className="red">A-Z</span>&#0093;</span>&#0047;</span>; <span className="green">&#0047;&#0047;
                                    alleen hoofdletters zoeken</span>
                    </p>
                    <p className="code">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="yellow">&#0040;<span className="blue">groet</span>.<span
                                className="lightyellow">search</span><span className="purple">&#0040;<span
                                    className="blue">regex</span>&#0041;</span>&#0041;</span>;
                    </p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">"12"</p>
                </div>
                <ol className="largemarginbottom" style={{ listStyleType: "none" }}>
                    <li>
                        <ol start={2}>
                            <li>te voorkomen dat sommige code wordt uitgevoerd en andere versies van code te testen;
                            </li>
                        </ol>
                    </li>
                </ol>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code green">&#0047;&#0047; const datum = new Date&#0040;&#0041;;</p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="blue">datum</span> = <span
                            className="darkblue">new</span> <span className="lightgreen">Date</span><span
                                className="yellow">&#0040;<span className="orange">"2023-08-25"</span>&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="yellow">&#0040;<span className="blue">datum</span>&#0041;</span>;
                    </p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">"Fri Aug 25 2023 02:00:00 GMT+0200 &#0040;Midden-Europese zomertijd&#0041;"</p>
                </div>
                <ol className="largemarginbottom" start={2}>
                    <li>Meerregelig commentaar <span className="code green">&#0047;&#0042; &#0042;&#0047;</span><br />
                        Ook commentaar-block genoemd. Wordt vaak gebruikt om formele tekst weer te geven, maar ook om te
                        voorkomen dat meerdere regels code worden uitgevoerd.</li>
                </ol>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code green">&#0047;&#0042;</p>
                    <p className="code green">De find&#0040;&#0041; methode retourneert </p>
                    <p className="code green">het eerste element in een array</p>
                    <p className="code green">dat een test doorstaat.</p>
                    <p className="code green">&#0042;&#0047;</p>
                    <p className="code"><span className="darkblue">const</span> <span className="blue">getallenrij</span> = <span
                        className="yellow">&#0091;</span><span className="digit">3</span>, <span className="digit">28</span>, <span
                            className="digit">8</span>, <span className="digit">130</span>, <span className="digit">47</span><span
                                className="yellow">&#0093;</span>;
                    </p>
                    <p className="code"><span className="darkblue">const</span> <span className="blue">resultaat</span> =
                        <span className="lightblue">getallenrij</span>.<span className="lightyellow">find</span><span
                            className="yellow">&#0040;</span><span className="purple">&#0040;<span
                                className="lightblue">element</span>&#0041;</span> <span className="darkblue"> =&gt;</span> <span
                                    className="lightblue">element</span> &gt; <span className="digit">10</span><span
                                        className="yellow">&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="yellow">&#0040;<span className="blue">resultaat</span>&#0041;</span>;
                    </p>
                </div>
                <div className="codeblock bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">"28"</p>
                </div>
            </section>
        </>
    );
};

export default Commentaar;