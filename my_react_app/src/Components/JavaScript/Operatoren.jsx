const Operatoren = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="operatoren">operatoren</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    JavaScript kent verschillende operatoren.
                </p>
                <ol className="smallmarginbottom">
                    <li>
                        Rekenkundige operatoren:
                    </li>
                </ol>
                <div className="codeblock bgdarkgrey largemarginbottom roundradii">
                    <p className="code green">&#0047;&#0047; optellen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">afstand</span> = <span
                            className="digit">10</span> + <span className="blue">a</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; aftrekken</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">temperatuur</span> = <span
                            className="digit">50</span> - <span className="blue">aantalGraden</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; vermenigvuldigen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">z</span> = <span
                            className="blue">x</span> * <span className="blue">y</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; delen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">aantalTaarten</span> = <span
                            className="blue">aantalPersonen</span> / <span className="digit">10</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; machtsverheffen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">hoeveelheid</span> = <span
                            className="digit">4</span> ** <span className="digit">5</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; resteren</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">rest</span> = <span
                            className="digit">100</span> % <span className="blue">y</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; verhogen</p>
                    <p className="code noline"><span className="digit">a</span>++;</p>
                    <p className="code green">&#0047;&#0047; verlagen</p>
                    <p className="code"><span className="digit">a</span>--;</p>
                </div>
                <ol className="smallmarginbottom" start={2}>
                    <li>
                        Toewijzingsoperatoren:
                    </li>
                </ol>
                <div className="codeblock bgdarkgrey largemarginbottom roundradii">
                    <p className="code green">&#0047;&#0047; toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> = <span className="digit">5</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; optellen en toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> += <span
                            className="digit">5</span>; <span className="green">&#0047;&#0047; zelfde als x = x + 5</span>
                    </p>
                    <p className="code green">&#0047;&#0047; aftrekken en toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> -= <span
                            className="digit">5</span>; <span className="green">&#0047;&#0047; zelfde als x = x - 5</span>
                    </p>
                    <p className="code green">&#0047;&#0047; vermenigvuldigen en toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> *= <span
                            className="digit">5</span>; <span className="green">&#0047;&#0047; zelfde als x = x * 5</span>
                    </p>
                    <p className="code green">&#0047;&#0047; delen en toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> /= <span
                            className="digit">5</span>; <span className="green">&#0047;&#0047; zelfde als x = x / 5</span>
                    </p>
                    <p className="code green">&#0047;&#0047; resteren en toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> %= <span
                            className="digit">5</span>; <span className="green">&#0047;&#0047; zelfde als x = x % 5</span>
                    </p>
                    <p className="code green">&#0047;&#0047; machtsverheffen en toewijzen</p>
                    <p className="code noline">
                        <span className="blue">let</span> <span className="lightblue">x</span> **= <span
                            className="digit">5</span>; <span className="green">&#0047;&#0047; zelfde als x = x ** 5</span>
                    </p>
                </div>
                <ol className="smallmarginbottom" start={3}>
                    <li>Vergelijkingsoperatoren:</li>
                </ol>
                <div className="codeblock bgdarkgrey largemarginbottom roundradii">
                    <p className="code green">&#0047;&#0047; gelijk aan</p>
                    <p className="code noline"><span className="blue">a</span> == <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; gelijk aan en gelijke data type</p>
                    <p className="code noline"><span className="blue">a</span> === <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; niet gelijk aan</p>
                    <p className="code noline"><span className="blue">a</span> != <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; niet gelijk aan of niet gelijke data type</p>
                    <p className="code noline"><span className="blue">a</span> !== <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; groter dan</p>
                    <p className="code noline"><span className="blue">a</span> &gt; <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; kleiner dan</p>
                    <p className="code noline"><span className="blue">a</span> &lt; <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; groter dan of gelijk aan</p>
                    <p className="code noline"><span className="blue">a</span> &gt;= <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; kleiner dan of gelijk aan</p>
                    <p className="code noline"><span className="blue">a</span> &lt;= <span className="digit">10</span>;</p>
                    <p className="code green">&#0047;&#0047; voorwaardelijke &#040;ternaire&#041; operator</p>
                    <p className="code green">&#0047;&#0047; Is de vergelijking waar, dan wordt de eerste waarde geretourneerd, anders de tweede</p>
                    <p className="code noline">
                        <span className="blue">a</span> == <span className="digit">10</span> ? <span className="orange">"waar"</span> : <span
                            className="orange">"niet waar"</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; nullish coalescing operator</p>
                    <p className="code green">&#0047;&#0047; Is de eerste waarde niet null of undefined, dan wordt die waarde toegewezen,</p>
                    <p className="code green">&#0047;&#0047; anders de tweede</p>
                    <p className="code">
                        <span className="darkblue">let</span> <span className="lightblue">a</span> = <span
                            className="lightblue">name</span> ?? <span className="lightblue">noName</span>;
                    </p>
                </div>
                <ol className="smallmarginbottom" start={4}>
                    <li>
                        Logische operatoren:
                    </li>
                </ol>
                <div className="codeblock bgdarkgrey roundradii">
                    <p className="code green">&#0047;&#0047; logische EN</p>
                    <p className="code green">
                        &#0047;&#0047; Zijn beide expressies waar, dan wordt true geretourneerd, anders false
                    </p>
                    <p className="code noline">
                        <span className="blue">leeftijd</span> &gt;= <span className="digit">18</span> && <span
                            className="blue">heeftStempas</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; logische OF</p>
                    <p className="code green">
                        &#0047;&#0047; Is één van beide expressies waar, dan wordt true geretourneerd, anders false
                    </p>
                    <p className="code noline">
                        <span className="blue">getalA</span> &gt;= <span className="digit">0</span> || <span
                            className="blue">getalB</span> &gt;= <span className="digit">0</span>;
                    </p>
                    <p className="code green">&#0047;&#0047; logische NIET</p>
                    <p className="code green">
                        &#0047;&#0047; Is de expressies niet waar, dan wordt true geretourneerd, anders false
                    </p>
                    <p className="code"><span className="digit">10</span> != <span className="digit">100</span>;</p>
                </div>
            </section >
        </>
    );
};

export default Operatoren;