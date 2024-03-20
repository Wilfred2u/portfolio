const Componenten = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="componenten">componenten</h4>
                <hr className="width100percent smallmarginbottom" />

                <p className="largemarginbottom">
                    Een component is een hapklare en herbruikbare brok met JSX-code, welke HTML retourneert.
                    Componenten zijn er in twee smaken:
                </p>
                <ol className="largemarginbottom">
                    <li>Class componenten</li>
                    <li>Functionele componenten</li>
                </ol>
                <p className="largemarginbottom">
                    React raadt aan om functionele componenten te gebruiken, omdat ze een eenvoudigere en beknoptere manier zijn
                    om code te schrijven. Daarom behandel ik alleen functionele componenten.
                </p>
            </section >

        </>
    );
};

export default Componenten;