const Intro = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="intro">intro</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    Reacht is een JavaScript library &#0040;een collectie scripts en procedures&#0041; en wordt gebruikt om
                    UI &#0040;user interface&#0041; componenten mee te bouwen.<br />
                    Om de content in de componenten weer te geven, wordt deze gerenderd door de funtie <span
                        className="code"><span className="lightyellow">createRoot</span><span
                            className="yellow">&#0040;&#0041;</span></span>, en zijn methode <span className="code"><span
                                className="lightyellow">render</span><span className="yellow">&#0040;&#0041;</span></span>.
                    De component wordt gerenderd in de <span className="code"><span className="grey">&lt;<span
                        className="darkblue">body</span>&gt;</span></span> van het index.html-bestand. Deze <span
                            className="code"><span className="grey">&lt;<span
                                className="darkblue">body</span>&gt;</span></span> bevat een element, zoals <span
                                    className="code"><span className="grey">&lt;<span
                                        className="darkblue">div</span>&gt;</span>,</span> welke een <span
                                            className="code lightblue">id</span>-attribuut heeft met als waarde bijvoorbeeld <span
                                                className="code orange">"root"</span>.
                </p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="purple">import <span className="lightblue">React</span> from</span> <span
                            className="orange">"react"</span>;
                    </p>
                    <p className="code noline">
                        <span className="purple">import <span className="lightblue">ReactDOM</span> from</span> <span
                            className="orange">"react-dom/client"</span>;
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
                                className="darkblue">h1</span>&gt;</span>Hello, world!<span className="grey">&lt;&#0047;<span
                                    className="darkblue">h1</span>&gt;</span><span className="yellow">&#0041;</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey verylargemarginbottom roundradii">
                    <h1 className="darkgrey">Hello, world!</h1>
                </div>
                <p className="largemarginbottom">
                    React maakt gebruik van JSX - JavaScript XML. Op die manier kan er HTML in React worden geschreven.
                    Aandachtspunten hierbij zijn:
                </p>
                <ul>
                    <li>er is slechts één topniveau-element, bijvoorbeeld een <span className="code"><span
                        className="grey">&lt;<span className="darkblue">div</span>&gt;</span></span>;</li>
                    <li>alle elementen moeten worden gesloten, zoals <span className="code"><span
                        className="grey">&lt;<span className="darkblue">hr </span>&#0047;&gt;</span></span>;</li>
                    <li><span className="code lightblue">class</span> is geen geldige attribuut in JSX, daarom wordt <span
                        className="code lightblue">className</span> gebruikt;</li>
                    <li>expressies, dus ook JavaScript, worden binnen JSX geschreven tussen <span className="code yellow">&#123;&#125;</span>.</li>
                </ul>

            </section >
        </>
    );
};

export default Intro;