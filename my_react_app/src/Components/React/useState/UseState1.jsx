import { useState } from "react";

const UseState1 = () => {

    const [isElvisAlive, setIsElvisAlive] = useState("Yes")

    const handleClick = () => {
        setIsElvisAlive("No");
    };

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="usestate_eenmalige_update">useState - &eacute;&eacute;nmalige update</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    Om <span className="code lightyellow">useState</span> te verduidelijken, beginnen we met een simpel voorbeeld.
                    Hierin is de huidige staat &#0040;het antwoord&#0041; "Yes". Een muisklik op dit antwoord activeert de functie <span
                        className="code lightyellow">setIsElvisAlive</span> en verandert de staat  in "No".<br />Omdat de staat enkel
                    veranderd kan worden in "No", kan de staat niet terug naar "Yes".
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
                            className="blue">isElvisAlive</span><span className="white">,</span> <span
                                className="lightyellow">setIsElvisAlive</span>&#0093;</span> = <span
                                    className="lightyellow">useState</span><span className="purple">&#0040;<span
                                        className="orange">"Yes"</span>&#0041;</span>;
                    </p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="lightyellow">handleClick</span> = <span
                            className="purple">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="purple">&#123;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="lightyellow">setIsElvisAlive</span><span className="darkblue">&#0040;<span
                            className="orange">"No"</span>&#0041;</span>;
                    </p>
                    <p className="code indention noline"><span className="purple">&#125;</span></p>
                    <p className="code indention">
                        <span className="purple">return &#0040;</span>
                    </p>
                    <p className="code doubleindention grey">&lt;&gt;</p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">h1</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"state--question"</span>&gt;</span>Leeft Elvis Presley nog?<span
                                    className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span> <span
                            className="lightblue">onClick</span><span className="white">=</span><span
                                className="darkblue">&#123;<span className="lightyellow">handleClick</span>&#125;</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">h1</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"state--answer"</span>&gt;</span><span className="darkblue">&#123;<span
                                    className="blue">isElvisAlive</span>&#125;</span><span className="grey">&lt;&#0047;<span
                                        className="darkblue">h1</span>&gt;</span>
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
                    <h1 className="darkgrey texthorizontalcentered2 mediummarginbottom">Leeft Elvis Presley nog?</h1>
                    <div onClick={handleClick}>
                        <h1 className="bgdarkgrey flex circle width100 height100 divhorizontalcentered textverticalcentered pointer">{isElvisAlive}</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UseState1;