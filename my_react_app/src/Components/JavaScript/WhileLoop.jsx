const WhileLoop = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="while%20loop">while loop</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    Een while loop doorloopt de code in het block zolang de voorwaarde <span
                        className="code darkblue">true</span> is.
                </p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">i</span> = <span
                            className="digit">1</span>;
                    </p>
                    <p className="code">
                        <span className="purple">while</span> <span className="yellow">&#040;</span><span
                            className="lightblue">i</span> &lt; <span className="digit">5</span><span
                                className="yellow">&#041; &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#040;</span><span className="orange">`Het getal is <span
                                className="darkblue">$&#123;<span className="blue">i</span>&#125;</span>.`</span><span
                                    className="purple">&#041;</span>;
                    </p>
                    <p className="code indention"><span className="lightblue">i</span>++;</p>
                    <p className="code"><span className="yellow">&#125;</span></p>
                </div>
                <div className="codeblock bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">Het getal is 1.</p>
                    <p className="code green">Het getal is 2.</p>
                    <p className="code green">Het getal is 3.</p>
                    <p className="code green">Het getal is 4.</p>
                </div>
            </section>
        </>
    );
};

export default WhileLoop;