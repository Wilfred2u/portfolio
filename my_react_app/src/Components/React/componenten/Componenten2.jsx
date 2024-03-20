import { useState } from "react";

const Componenten2 = () => {
    const [string, setString] = useState({ statement: "Goedemorgen!" });

    const handleChange = event => {
        const { name, value } = event.target;
        setString(prevValue => {
            return {
                ...prevValue, [name]: value
            }
        })
    };

    const getLengthString = number => {
        return number.toString().length
    };

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="componenten_eenvoudige_component">componenten - eenvoudige component</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">Wanneer je een component definieert, moet je rekening houden met de volgende zaken:</p>
                <ol className="largemarginbottom">
                    <li>de naam van de component krijgt altijd een hoofdletter.</li>
                    <li>de content staat in een <i>return statement</i>. Past deze niet op &eacute;&eacute;n regel,
                        dan moet de content
                        <ol type="a">
                            <li>tussen <span className="code purple">&#0040;&#0041;</span> worden geplaatst;</li>
                            <li>worden <i>gewrapped</i> in een element. Dit mag ook een leeg element &#0040;<span
                                className="code grey">&lt;&gt;&lt;&#0047;&gt;</span>&#0041; zijn.</li>
                        </ol>
                    </li>
                </ol>
                <p className="largemarginbottom">In dit voorbeeld is het <span className="code grey">&lt;<span
                    className="darkblue">h1</span>&gt;</span>-element de component en wordt deze aangeroepen in de <span
                        className="code lightyellow">render<span className="yellow">&#0040;&#0041;</span></span>-methode.
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
                        <span className="darkblue"> const</span> <span className="lightyellow">Greeting</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <form className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">h1</span>&gt;</span>
                        <input
                            className="smallinputfield white"
                            type="text"
                            name="statement"
                            value={string.statement}
                            onChange={handleChange}
                            autoComplete="off"
                            style={{ width: `${getLengthString(string.statement)}ch` }}
                        />
                        <span className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span> <span
                            className="green">&#0047;&#0047; Deze string kun je veranderen!</span>
                    </form>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
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
                            className="yellow">&#0040;<span className="grey">&lt;<span
                                className="lightgreen">Greeting </span>&#0047;&gt;</span>&#0041;</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent darkgrey bglightgrey fontsize1em largemarginbottom roundradii">
                    <div>{string.statement}</div>
                </div>
            </section>
        </>
    )
};

export default Componenten2;