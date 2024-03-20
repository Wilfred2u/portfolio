import lego from '../../Images/lego.png'
import { ReactComponent as Butterfly } from '../../Images/butterfly.svg';

const Afbeelding = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="afbeelding">afbeelding</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    Het toevoegen van afbeeldingen in React is niet moeilijk, het gaat op een iets andere manier dan in gewoon HTML.
                </p>
                <p className="largemarginbottom">
                    E&#233;n van de manieren is met gebruik van het <span className="code purple">import</span> <i>keyword</i>.
                </p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code noline">
                        <span className="purple">import <span className="lightblue">lego</span> from</span> <span
                            className="orange">'./Images/lego.jpg'</span>
                    </p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Image</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;</span><span
                            className="darkblue">img</span> <span className="lightblue">alt</span>=<span
                                className="orange">"lego"</span> <span className="lightblue">src</span>=<span
                                    className="darkblue">&#123;<span className="blue">lego</span>&#125;</span> <span
                                        className="grey">&#0047;&gt;</span>
                    </p>
                    <p className="code noline"><span className="yellow">&#125;</span>;</p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Image</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent texthorizontalcentered2 bglightgrey largemarginbottom roundradii">
                    <img className="mediumpaddingtop largemarginbottom" alt="lego" src={lego} width={400} />
                </div>
                <p className="largemarginbottom">
                    Afbeeldingen van het type .svg kunnen naast bovenstaande manier ook rechtstreeks als component worden ge&#239;mporteerd.
                </p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code noline">
                        <span className="purple">import <span className="yellow">&#123; <span
                            className="lightblue">ReactComponent</span> <span className="purple">as</span> <span
                                className="lightblue">Butterfly</span> &#125;</span> from</span> <span
                                    className="orange">'./Images/butterfly.svg'</span>
                    </p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Image</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;</span><span
                            className="lightgreen">Butterfly </span><span className="grey">&#0047;&gt;</span>
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Image</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent texthorizontalcentered2 bglightgrey largemarginbottom roundradii">
                    <Butterfly width={200} height={200} className="mediumpaddingtop mediummarginbottom" />
                </div>
                <p className="largemarginbottom">
                    Het is echter ook mogelijk om afbeeldingen ouderwets toe te voegen met een <span
                        className="code lightblue">src</span>-attribuut. De map met afbeeldingen zit in de public folder, en
                    het path is relatief aan deze folder. Dit is met name handig wanneer het path een prop van de component is.
                </p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Image</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;</span><span
                            className="darkblue">img</span> <span className="lightblue">alt</span>=<span
                                className="orange">"ferrari"</span> <span className="lightblue">src</span>=<span
                                    className="orange">".&#0047;Images&#0047;ferrari.jpg"</span> <span
                                        className="grey">&#0047;&gt;</span>
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Image</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent texthorizontalcentered2 bglightgrey largemarginbottom roundradii">
                    <img className="mediumpaddingtop largemarginbottom" alt="ferrari" src="./Images/ferrari.jpg" width={400} />
                </div>
            </section >
        </>
    );
};

export default Afbeelding;