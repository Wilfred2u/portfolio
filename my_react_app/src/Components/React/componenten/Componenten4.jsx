import { useState } from "react";

const Componenten2 = () => {
    const [string, setString] = useState({ propsName: "Wilfred" });

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
                <h4 className="smallmarginbottom" id="componenten_met_props">componenten - met props</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    Wil je eigenschappen doorgeven aan componenten, dan gebruik je props.
                    In het volgende hoofdstuk wordt hier wat dieper op ingegaan.
                </p>

                <p className="smallmarginbottom">De JSX-bestanden:</p>
                <p className="smallmarginbottom">Greeting.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue"> const</span> <span className="lightyellow">Greeting</span> = <span
                            className="lightblue">props</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">h1</span>&gt;</span>Goedemorgen, <span className="purple">&#123;<span
                                className="lightblue">props<span className="white">.</span>name</span>&#125;</span>!
                        <span className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span>
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Greeting</span>;
                    </p>
                </div>

                <p className="adjustmentblock">Verander<br />de waarde!</p>
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
                    <form className="code">
                        <span className="lightblue">root</span>.<span className="lightyellow">render</span><span
                            className="yellow">&#0040;<span className="grey">&lt;<span
                                className="lightgreen">Greeting <span className="lightblue">name</span><span
                                    className="white">=</span><span className="orange">"</span>
                                <input
                                    className="smallinputfield orange"
                                    type="text"
                                    name="propsName"
                                    value={string.propsName}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    style={{ width: `${getLengthString(string.propsName)}ch` }}
                                />
                                <span className="orange">"</span></span>&#0047;&gt;</span>&#0041;</span>; <span
                                    className="green">&#0047;&#0047; deze prop kun je veranderen!</span>
                    </form>
                </div>

                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent darkgrey bglightgrey fontsize1em largemarginbottom roundradii">
                    <div>Goedemorgen, {string.propsName}!</div>
                </div>
            </section>
        </>
    )
};

export default Componenten2;