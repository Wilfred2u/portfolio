import { useState } from "react";

const UseState5 = () => {

    const [itemsArray, setItemsArray] = useState(["Item 1", "Item 2"]);

    const addItem = () => {

        setItemsArray(prevItemsArray => {
            return [...prevItemsArray, `Item ${prevItemsArray.length + 1}`]
        })
    };

    const itemsElements = itemsArray.map(item => <p key={item}>{item}</p>);

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="usestate_array">useState - array</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    In dit voorbeeld is de staat een <i>array</i>, een lijst met waardes. De beginstaat bevat de waardes
                    'Item 1' en 'Item 2.'<br />
                    De <span className="code lightyellow">addItem</span>-functie voegt steeds een item aan de staat toe.
                    Door middel van de spread-operator worden alle huidige waardes verzameld, daar wordt de nieuwe waarde
                    &#0040;het nieuwe item&#0041; aan toegevoegd en de hele array wordt geretourneerd, tussen <span
                        className="code blue">&#0091;&#0093;</span>.<br />
                    Daarna worden alle items uit de staat <i>gemapped</i>, zodat er een lijst ontstaat.
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
                            className="blue">itemsArray</span><span className="white">,</span> <span
                                className="lightyellow">setItemsArray</span>&#0093;</span> = <span
                                    className="lightyellow">useState</span><span className="purple">&#0040;<span
                                        className="blue">&#0091;<span className="orange">"Item 1"<span
                                            className="white">,</span> "Item 2"</span>&#0093;</span>&#0041;</span>;
                    </p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="lightyellow">addItem</span> = <span
                            className="purple">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="purple">&#123;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="lightyellow">setItemsArray</span><span className="blue">&#0040;</span><span
                            className="lightblue">prevItemsArray</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="purple">return &#0091;</span>...<span className="lightblue">prevItemsArray</span>, <span
                            className="orange">`Item</span> <span className="blue">$&#123;</span><span
                                className="lightblue">prevItemsArray<span className="white">.</span>length</span> + 1<span
                                    className="blue">&#125;</span><span className="orange">`</span><span className="purple">&#0093;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="yellow">&#125;</span><span className="blue">&#0041;</span>
                    </p>
                    <p className="code indention noline">
                        <span className="purple">&#125;</span>;
                    </p>
                    <p className="code indention noline">
                        <span className="darkblue">const</span> <span className="blue">itemsElements <span
                            className="white">=</span> itemsArray</span>.<span className="lightyellow">map</span><span
                                className="purple">&#0040;<span className="lightblue">item</span> <span
                                    className="darkblue">=&gt;</span> <span className="grey">&lt;<span
                                        className="darkblue">p</span> <span className="lightblue">key</span><span
                                            className="white">=</span><span className="blue">&#123;<span
                                                className="lightblue">item</span>&#125;</span>&gt;</span><span
                                                    className="blue">&#123;<span className="lightblue">item</span>&#125;</span><span
                                                        className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>&#0041;</span>;
                    </p>
                    <p className="code indention purple">return &#0040;</p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">button</span> <span
                            className="lightblue">onClick</span><span className="white">=</span><span
                                className="blue">&#123;<span className="lightyellow">additem</span>&#125;</span>&gt;</span>Add item<span
                                    className="grey">&lt;&#0047;<span className="darkblue">button</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="blue">&#123;<span className="lightblue">itemsElements</span>&#125;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code indention purple">&#0041;</p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">App</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent  bglightgrey darkgrey verylargemarginbottom roundradii">
                    <button className="roundradii mediummarginbottom" onClick={addItem}>Add Item</button>
                    {itemsElements}
                </div>
            </section>
        </>
    );
};

export default UseState5;