const Centering = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="centering">centreren</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">Hieronder worden voorbeelden gegeven hoe je het beste content kunt centreren.</p>
                <h4>Horizontaal centreren</h4>
                <p className="largemarginbottom">Als eerste een <span className="code"><span className="grey">&lt;<span
                    className="darkblue">div</span>&gt;</span></span>-element:
                </p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="grey">&lt;</span><span className="darkblue">div</span> <span
                            className="lightblue">className</span>=<span className="orange">"box"</span><span
                                className="grey">&gt;</span><span className="grey">&lt;&#0047;<span
                                    className="darkblue">div</span>&gt;</span><br />
                    </p>
                </div>
                <p className="smallmarginbottom">Het CSS-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="lightorange">.box</span> <span className="yellow">&#123;</span><br />
                        <span className="indention lightblue">margin</span>: <span className="digit">0</span> <span className="orange">auto</span>;<br />
                        <span className="indention lightblue">border</span>: <span className="digit">4px</span> <span
                            className="orange">solid <div className="colorsquare bgdarkred"></div>darkred</span>;<br />
                        <span className="indention lightblue">background-color</span>: <div
                            className="colorsquare bgred"></div><span className="orange">red</span>;<br />
                        <span className="indention lightblue">width</span>: <span className="digit">200px</span>;<br />
                        <span className="indention lightblue">height</span>: <span className="digit">80px</span>;<br />
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey verylargemarginbottom roundradii">
                    <div className="box1 divhorizontalcentered bgred"></div>
                </div>
                <p className="largemarginbottom">Block-elementen met tekst-content worden op een andere manier gecentreerd,<br />
                    zoals een <span className="code"><span className="grey">&lt;<span
                        className="darkblue">h2</span>&gt;</span></span>-element:
                </p>

                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="grey">&lt;</span><span className="darkblue">h2</span> <span
                            className="lightblue">className</span>=<span className="orange">"heading"</span><span
                                className="grey">&gt;</span>Gecentreerde titel<span className="grey">&lt;&#0047;</span><span
                                    className="darkblue">h2</span><span className="grey">&gt;</span><br />
                    </p>
                </div>
                <p className="smallmarginbottom">Het CSS-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="lightorange">.heading</span> <span className="yellow">&#123;</span><br />
                        <span className="indention lightblue">text-align</span>: <span className="orange">center</span>;<br />
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey verylargemarginbottom roundradii">
                    <h2 className="darkgrey texthorizontalcentered2">Gecentreerde titel</h2>
                </div>
                <h4>Horizontaal en verticaal centreren</h4>
                <p className="largemarginbottom">Eerst weer een <span className="code"><span className="grey">&lt;<span
                    className="darkblue">div</span>&gt;</span></span>-element:</p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="grey">&lt;</span><span className="darkblue">div</span> <span
                            className="lightblue">className</span>=<span className="orange">"box"</span><span
                                className="grey">&gt;</span><span className="grey">&lt;&#0047;<span
                                    className="darkblue">div</span>&gt;</span><br />
                    </p>
                </div>
                <p className="smallmarginbottom">Het CSS-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="lightorange">.box</span> <span className="yellow">&#123;</span><br />
                        <span className="indention lightblue">position</span>: <span className="orange">absolute</span>;<br />
                        <span className="indention lightblue">top</span>: <span className="digit">50%</span>;<br />
                        <span className="indention lightblue">left</span>: <span className="digit">50%</span>;<br />
                        <span className="indention lightblue">border</span>: <span className="digit">4px</span> <span
                            className="orange">solid <div className="colorsquare bgdarkred"></div>darkred</span>;<br />
                        <span className="indention lightblue">background-color</span>: <div
                            className="colorsquare bgred"></div><span className="orange">red</span>;<br />
                        <span className="indention lightblue">width</span>: <span className="digit">200px</span>;<br />
                        <span className="indention lightblue">height</span>: <span className="digit">80px</span>;<br />
                        <span className="indention lightblue">transform</span>: <span className="digit">translate</span><span
                            className="purple">&#0040;</span><span className="digit">-50%</span>, <span
                                className="digit">-50%</span><span className="purple">&#0041;</span>;<br />
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 flex texthorizontalcentered1 textverticalcentered bglightgrey verylargemarginbottom roundradii">
                    <div className="box2 bgred"></div>
                </div>
                <p className="largemarginbottom">Bovenstaande voorbeelden gaan allemaal uit van een situatie waarin de parent van
                    het gecentreerde element de <span className="code" ><span className="grey">&lt;</span><span className="darkblue">body</span><span
                        className="grey">&gt;</span></span> is. Om tekst horizontaal en verticaal te centreren, nemen we een <span
                            className="code" ><span className="grey">&lt;</span><span className="darkblue">p</span><span
                                className="grey">&gt;</span></span>-element, en plaatsen die in een <span className="code" ><span
                                    className="grey">&lt;</span><span className="darkblue">div</span><span
                                        className="grey">&gt;</span></span>-element:</p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="grey">&lt;</span><span className="darkblue">div</span> <span
                            className="lightblue">className</span>=<span className="orange">"parent"</span><span
                                className="grey">&gt;</span><br />
                        <span className="indention grey">&lt;</span><span className="darkblue">p</span><span
                            className="grey">&gt;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span
                                className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span><br />
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span><br />
                    </p>
                </div>
                <p className="smallmarginbottom">Het CSS-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="lightorange">.parent</span> <span className="yellow">&#123;</span><br />
                        <span className="indention lightblue">border</span>: <span className="digit">4px</span> <span
                            className="orange">solid <div className="colorsquare bgdarkred"></div>darkred</span>;<br />
                        <span className="indention lightblue">display</span>: <span className="orange">flex</span>;<br />
                        <span className="indention lightblue">justify-content</span>: <span className="orange">center</span>;<br />
                        <span className="indention lightblue">align-items</span>: <span className="orange">center</span>;<br />
                        <span className="indention lightblue">width</span>: <span className="digit">80%</span>;<br />
                        <span className="indention lightblue">height</span>: <span className="digit">160px</span>;<br />
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey largemarginbottom roundradii">
                    <div className="parent flex width80percent darkgrey texthorizontalcentered1 textverticalcentered">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <p className="verylargemarginbottom">Als het om meerdere tekstregels gaat, vervangen we de <span
                    className="code lightblue">justify-content</span>-eigenschap in een <span
                        className="code lightblue">text-align</span>-eigenschap.</p>
                <p className="largemarginbottom">Op eenzelfde manier wordt een <span className="code" ><span
                    className="grey">&lt;</span><span className="darkblue">div</span><span
                        className="grey">&gt;</span></span>-element met als parent een ander <span
                            className="code" ><span className="grey">&lt;</span><span className="darkblue">div</span><span
                                className="grey">&gt;</span></span>-element horizontaal en verticaal gecentreerd:</p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="grey">&lt;</span><span className="darkblue">div</span> <span
                            className="lightblue">className</span>=<span className="orange">"parent"</span><span
                                className="grey">&gt;</span><br />
                        <span className="indention grey">&lt;</span><span className="darkblue">div</span> <span
                            className="lightblue">className</span>=<span className="orange">"box"</span><span
                                className="grey">&gt;&lt;&#0047;<span className="darkblue">div</span>&gt;</span><br />
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span><br />
                    </p>
                </div>
                <p className="smallmarginbottom">Het CSS-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="lightorange">.parent</span> <span className="yellow">&#123;</span><br />
                        <span className="indention lightblue">border</span>: <span className="digit">4px</span> <span
                            className="orange">solid <div className="colorsquare bgdarkred"></div>darkred</span>;<br />
                        <span className="indention lightblue">display</span>: <span className="orange">flex</span>;<br />
                        <span className="indention lightblue">justify-content</span>: <span className="orange">center</span>;<br />
                        <span className="indention lightblue">align-items</span>: <span className="orange">center</span>;<br />
                        <span className="indention lightblue">width</span>: <span className="digit">80%</span>;<br />
                        <span className="indention lightblue">height</span>: <span className="digit">160px</span>;<br />
                        <span className="yellow">&#125;</span><br />
                        <span className="lightorange">.box</span> <span className="yellow">&#123;</span><br />
                        <span className="indention lightblue">border</span>: <span className="digit">4px</span> <span
                            className="orange">solid <div className="colorsquare bgdarkred"></div>darkred</span>;<br />
                        <span className="indention lightblue">background-color</span>: <div
                            className="colorsquare bgred"></div><span className="orange">red</span>;<br />
                        <span className="indention lightblue">width</span>: <span className="digit">200px</span>;<br />
                        <span className="indention lightblue">height</span>: <span className="digit">80px</span>;<br />
                        <span className="yellow">&#125;</span>
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey largemarginbottom roundradii">
                    <div className="parent flex width80percent darkgrey texthorizontalcentered1 textverticalcentered">
                        <div className="box2 bgred"></div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Centering;