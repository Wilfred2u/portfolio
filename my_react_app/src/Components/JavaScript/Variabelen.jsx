const Variabelen = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="variabelen">variabelen</h4>
                <hr className="smallmarginbottom" />
                <p>
                    Variabelen zijn er in twee smaken: <span className="code darkblue">const</span> en <span
                        className="code darkblue">let</span>.<br />
                    Een <span className="code darkblue">let</span>-variabele:
                </p>
                <ul className="largemarginbottom">
                    <li>is alleen geldig binnen een block, een stuk door <span className="code yellow">&#123;&#125;</span> afgebakende
                        code;
                    </li>
                    <li>hoeft bij het declareren geen waarde mee te krijgen;</li>
                    <li>kan wel worden geherdefineerd &#0040;een andere waarde krijgen&#0041;</li>
                    <li>kan niet worden geherdeclareerd.</li>
                </ul>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code"><span className="darkblue">let</span> <span className="lightblue">huisdier</span>;</p>
                    <p className="code"><span className="lightblue">huisdier</span> = <span className="orange">"hond"</span>;</p>
                    <p className="code"><span className="lightblue">huisdier</span> = <span className="orange">"kat"</span>;</p>
                    <p className="code"><span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                        className="yellow">&#0040;</span><span className="lightblue">huisdier</span><span className="yellow">&#0041;</span>;
                    </p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">kat</p>
                </div>
                <p>Een <span className="code darkblue">const</span>-variabele:</p>
                <ul className="largemarginbottom">
                    <li>
                        is alleen geldig binnen een block, een stuk door <span
                            className="code yellow">&#123;&#125;</span> afgebakende code;
                    </li>
                    <li>moet bij het declareren een waarde mee krijgen;</li>
                    <li>kan niet worden geherdefineerd &#0040;een andere waarde krijgen&#0041;;</li>
                    <li>kan niet worden geherdeclareerd.</li>
                </ul>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="blue">huisdier</span> = <span
                            className="orange">"hond"</span>;
                    </p>
                    <p className="code">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="yellow">&#0040;<span className="lightblue">huisdier</span>&#0041;</span>;
                    </p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">hond</p>
                </div>
                <p>
                    Declareer altijd een variabele met <span className="code darkblue">const</span>, tenzij de variabele
                    geherdefineerd wordt.
                </p>
            </section>
        </>
    );
};

export default Variabelen;