import { useState } from "react";

const UseState = () => {

    const [count, setCount] = useState(0)

    const substract = () => setCount(count - 1)
    const add = () => setCount(count + 1)

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="usestate_callback_functie">useState - callback-functie</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    Het is echter beter om een callback-functie te gebruiken bij het bepalen van de staat,
                    in plaats de staat direct te bepalen. Deze callback-functie ontvangt de oude waarde van de staat,
                    en wordt gebruikt om de nieuwe waarde van de staat te bepalen.
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
                            className="blue">count</span><span className="white">,</span> <span
                                className="lightyellow">setCount</span>&#0093;</span> = <span
                                    className="lightyellow">useState</span><span className="purple">&#0040;<span
                                        className="digit">0</span>&#0041;</span>;
                    </p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="lightyellow">substract</span> = <span
                            className="purple">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="lightyellow">setCount</span><span className="purple">&#0040;<span
                                    className="lightblue">prevCount</span> <span className="darkblue">=&gt;</span> <span
                                        className="lightblue">prevCount</span> <span className="white">-</span> <span
                                            className="digit">1</span>&#0041;</span>;
                    </p>
                    <p className="code indention noline">
                        <span className="darkblue">const</span> <span className="lightyellow">add</span> = <span
                            className="purple">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="lightyellow">setCount</span><span className="purple">&#0040;<span
                                    className="lightblue">prevCount</span> <span className="darkblue">=&gt;</span> <span
                                        className="lightblue">prevCount</span> <span className="white">+</span> <span
                                            className="digit">1</span>&#0041;</span>;
                    </p>
                    <p className="code indention">
                        <span className="purple">return &#0040;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"counter"</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;</span><span className="darkblue">button</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">className</span>=<span className="orange">"counter--minus"</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">onClick</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">substract</span>&#125;</span>
                    </p>
                    <p className="code tripleindention grey">&gt;</p>
                    <p className="code quadrupleindention">-</p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">button</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"counter--count"</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">h1</span>&gt;</span><span
                            className="darkblue">&#123;<span className="blue">count</span>&#125;</span><span
                                className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;</span><span className="darkblue">button</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">className</span>=<span className="orange">"counter--plus"</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">onClick</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">add</span>&#125;</span>
                    </p>
                    <p className="code tripleindention grey">&gt;</p>
                    <p className="code quadrupleindention">+</p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">button</span>&gt;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code indention purple">&#0041;</p>
                    <p className="code noline"><span className="yellow">&#125;</span>;</p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">App</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height200 bglightgrey verylargemarginbottom roundradii">
                    <div className="flex texthorizontalcentered1 textverticaldownaligned mediumpaddingtop">
                        <button
                            className="textverticalcentered noborder flex circle pointer height50 width50 bgmediumgrey white fontsize15em marginoffsetleft"
                            onClick={substract}
                        >
                            –
                        </button>
                        <div className="texthorizontalcentered1 textverticalcentered flex circle height100 width100 bgdarkred white">
                            <h1>{count}</h1>
                        </div>
                        <button
                            className="textverticalcentered noborder flex circle pointer height50 width50 bgmediumgrey white fontsize15em marginoffsetright"
                            onClick={add}
                        >
                            +
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UseState;