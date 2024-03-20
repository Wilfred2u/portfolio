const Componenten3 = () => {

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="componenten_importeren">componenten - importeren</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    Het is beter om elke component een eigen bestand te geven, waarin de component wordt gedefinieerd.
                    Vervolgens  wordt de component ge&euml;xporteerd, door middel van <span
                        className="code purple">export default</span> + naam van de component.<br />
                    De component kan ook aan het begin worden ge&euml;xporteerd.
                    Hieronder staan beide mogelijkheden uitgeschreven. Welke je gebruikt is een kwestie van persoonlijke voorkeur.<br />
                    Daarna wordt de component ge&iuml;mporteerd in zijn parent, in dit geval App.jsx.
                </p>

                <p className="smallmarginbottom">De JSX-bestanden:</p>
                <p className="smallmarginbottom">Greeting.jsx &#0040;met import statement aan het eind&#0041;:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Greeting</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#0123;</span>
                    </p>
                    <p className="code">
                        <span className="indention purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">div</span>&gt;</span>Goedemorgen!<span className="grey">&lt;&#0047;<span
                                className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#0125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Greeting</span>;
                    </p>
                </div >

                <p className="smallmarginbottom">Greeting.jsx &#0040;met import statement aan het begin&#0041;:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Greeting</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#0123;</span>
                    </p>
                    <p className="code">
                        <span className="indention purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">div</span>&gt;</span>Goedemorgen!<span className="grey">&lt;&#0047;<span
                                className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code">
                        <span className="yellow">&#0125;</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">App.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="purple">import <span className="lightblue">React</span> from</span> <span
                            className="orange">"react"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">ReactDOM</span> from</span> <span
                            className="orange">"react-dom/client"</span>;
                    </p>
                    <p className="code noline">
                        <span className="purple">import <span className="lightblue">Greeting</span> from</span> <span
                            className="orange">".&#0047;Greeting"</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">const root</span> = <span className="lightblue">ReactDOM</span>.<span
                            className="lightblue">createRoot</span><span className="yellow">&#0040;</span><span
                                className="lightblue">document</span>.<span className="lightyellow">getElementById</span><span
                                    className="purple">&#0040;<span className="orange">'root'</span>&#0041;</span><span
                                        className="yellow">&#0041;</span>;
                    </p >
                    <p className="code">
                        <span className="lightblue">root</span>.<span className="lightyellow">render</span><span
                            className="yellow">&#0040;</span><span className="grey">&lt;<span
                                className="lightgreen">Greeting</span> &#0047;&gt;</span><span className="yellow">&#0041;</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent darkgrey bglightgrey fontsize1em largemarginbottom roundradii">
                    <div>Goedemorgen!</div>
                </div>
            </section>
        </>
    )
};

export default Componenten3;