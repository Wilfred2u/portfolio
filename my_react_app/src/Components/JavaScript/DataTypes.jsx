import { Link } from "react-router-dom";

const DataTypes = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="data%20types">data types</h4>
                <hr className="smallmarginbottom" />
                <p>
                    Er zijn zeven soorten primitieve data types:
                </p>
                <ol className="largemarginbottom">
                    <li><span className="code darkblue">null</span>;</li>
                    <li><span className="code darkblue">undefined</span>;</li>
                    <Link to={"boolean"}><li>boolean;</li></Link>
                    <li>number;</li>
                    <li>string;</li>
                    <li>bigint;</li>
                    <li>symbol;</li>
                </ol>
                <p className="smallmarginbottom">Voorbeelden van elke primitieve data type:</p>
                <div className="codeblock bgdarkgrey roundradii">
                    <p className="code green">&#0047;&#0047; null</p>
                    <p className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">x</span> = <span
                            className="darkblue">null</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; undefined</p>
                    <p className="code noline"><span className="darkblue">let</span> <span className="lightblue">y</span>;</p>
                    <p className="code green">&#0047;&#0047; boolean</p>
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">isOudGenoeg</span> = <span
                            className="darkblue">true</span>;
                    </p>
                    <p className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">heeftTicket</span> = <span
                            className="darkblue">false</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; number</p>
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">lengte</span> = <span
                            className="digit">182</span>;
                    </p>
                    <p className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">kwart</span> = <span
                            className="digit">0.25</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; string</p>
                    <p className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">woonplaats</span> = <span
                            className="orange">"Amsterdam"</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; bigint</p>
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">grootGetal1</span> = <span
                            className="digit">999999999999999</span><span className="darkblue">n</span>;
                    </p>
                    <p className="code noline">
                        <span className="darkblue">let</span> <span className="lightblue">grootGetal2</span> = <span
                            className="lightyellow">BigInt</span><span className="yellow">&#0040;<span
                                className="digit">999999999999999</span>&#0041;</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; symbol</p>
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">symbool1</span> = <span
                            className="lightyellow">Symbol</span><span className="yellow">&#0040;&#0041;</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">symbool2</span> = <span
                            className="lightyellow">Symbol</span><span className="yellow">&#0040;<span
                                className="orange">"string"</span>&#0041;</span>;
                    </p>
                </div>
            </section>
        </>
    );
};

export default DataTypes;