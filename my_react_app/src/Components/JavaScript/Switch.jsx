const Switch = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="switch">switch</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    Een <span className="code purple">switch</span>-instructie vergelijkt een
                    expressie met meerdere case-waardes. Is er een overeenkomst, dan wordt de code in het bijbehorende
                    block uitgevoerd, en stopt de <span className="code purple">switch</span> door middel van het <span
                        className="code purple">break</span> <i>keyword</i>.<br />
                    Is er geen overeenkomst, dan wordt de code van het default-block uitgevoerd.
                </p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code noline">
                        <span className="darkblue">const</span> <span className="blue">fruit</span> = <span
                            className="orange">"bananen"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">switch</span> <span className="yellow">&#0040;<span
                            className="blue">fruit</span>&#0041;
                            &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"appels"</span>:
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="blue">fruit</span><span className="darkblue">&#0091;<span
                                className="digit">0</span>&#0093;</span>.<span className="lightyellow">toUpperCase</span><span
                                    className="darkblue">&#0040;&#0041;</span> + <span className="blue">fruit</span>.<span
                                        className="lightyellow">slice</span><span className="darkblue">&#0040;<span
                                            className="digit">1</span>&#0041;</span> + <span className="orange">" kosten €2,98 per kilo."</span><span
                                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code doubleindention"><span className="purple">break</span>;</p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"peren"</span>:
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="blue">fruit</span><span className="darkblue">&#0091;<span
                                className="digit">0</span>&#0093;</span>.<span className="lightyellow">toUpperCase</span><span
                                    className="darkblue">&#0040;&#0041;</span> + <span className="blue">fruit</span>.<span
                                        className="lightyellow">slice</span><span className="darkblue">&#0040;<span
                                            className="digit">1</span>&#0041;</span> + <span className="orange">" kosten €3,49 per kilo."</span><span
                                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code doubleindention"><span className="purple">break</span>;</p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"bananen"</span>:
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="blue">fruit</span><span className="darkblue">&#0091;<span
                                className="digit">0</span>&#0093;</span>.<span className="lightyellow">toUpperCase</span><span
                                    className="darkblue">&#0040;&#0041;</span> + <span className="blue">fruit</span>.<span
                                        className="lightyellow">slice</span><span className="darkblue">&#0040;<span
                                            className="digit">1</span>&#0041;</span> + <span className="orange">" kosten €1,99 per kilo."</span><span
                                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code doubleindention"><span className="purple">break</span>;</p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"kersen"</span>:
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="blue">fruit</span><span className="darkblue">&#0091;<span
                                className="digit">0</span>&#0093;</span>.<span className="lightyellow">toUpperCase</span><span
                                    className="darkblue">&#0040;&#0041;</span> + <span className="blue">fruit</span>.<span
                                        className="lightyellow">slice</span><span className="darkblue">&#0040;<span
                                            className="digit">1</span>&#0041;</span> + <span className="orange">" kosten €4,98 per kilo."</span><span
                                                className="purple">&#0041;</span>;
                    </p>
                    <p className="code doubleindention"><span className="purple">break</span>;</p>
                    <p className="code indention"><span className="purple">default</span>:</p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;</span><span className="orange">"Vandaag hebben we geen "</span> + <span
                                className="blue">fruit</span> + <span className="orange">"."</span><span className="purple">&#0041;</span>;
                    </p>
                    <p className="code"><span className="yellow">&#125;</span></p>
                </div>
                <div className="codeblock largemarginbottom bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">Bananen kosten €1,99 per kilo.</p>
                </div>
                <p className="largemarginbottom">
                    Het is niet verplicht dat elke <span className="code purple">case</span> een <span
                        className="code purple">break</span> heeft. Hier kun je gebruik van maken:
                </p>
                <div className="codeblock bgdarkgrey nobottomborder roundtopradii">
                    <p className="code noline">
                        <span className="darkblue">const</span> <span className="blue">kleur</span> = <span
                            className="orange">"oranje"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">switch</span> <span className="yellow">&#0040;<span
                            className="blue">kleur</span>&#0041;&#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"rood"</span>:
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"blauw"</span>:
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"geel"</span>:
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;<span className="orange">"Dit is een primaire kleur."</span>&#0041;</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="purple">break</span>;
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"oranje"</span>:
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"groen"</span>:
                    </p>
                    <p className="code indention">
                        <span className="purple">case</span> <span className="orange">"paars"</span>:
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;<span className="orange">"Dit is een secundaire kleur."</span>&#0041;</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="purple">break</span>;
                    </p>
                    <p className="code indention"><span className="purple">default</span>:</p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="purple">&#0040;<span className="orange">"Dit is geen primaire of secundaire
                                kleur."</span>&#0041;</span>;
                    </p>
                    <p className="code"><span className="yellow">&#125;</span></p>
                </div>
                <div className="codeblock bgdarkgrey roundbottomradii">
                    <p className="code smallmarginbottom">Output:</p>
                    <p className="code green">Dit is een secundaire kleur.</p>
                </div>
            </section>
        </>
    );
};

export default Switch;