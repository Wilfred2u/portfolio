const Home = () => {

    // Calculate my age
    const berekenLeeftijd = (geboortedatum) => {
        const vandaag = new Date();
        const geboorteDatum = new Date(geboortedatum);
        let leeftijd = vandaag.getFullYear() - geboorteDatum.getFullYear();
        const maand = vandaag.getMonth() - geboorteDatum.getMonth();
        if (maand < 0 || (maand === 0 && vandaag.getDate() < geboorteDatum.getDate())) {
            leeftijd--;
        }
        return leeftijd;
    }

    return (
        <>
            <section>
                <h1 className="largemarginbottom">Welkom</h1>
                <p className="largemarginbottom">
                    Welkom. Mijn naam is Wilfred Grootoonk, {berekenLeeftijd("1980-03-16")} jaar
                    en ik heb kortgeleden de opleiding Full Stack Developer succesvol afgemaakt.
                    Mede om mijn kennis en kunde up-to-date te houden,
                    heb ik het idee opgevat om een website, gemaakt in React, op te zetten.<br />
                    Is de website af? Nee, het is werk in uitvoering...
                </p>
                <p className="largemarginbottom">
                    Op deze manier gebruik ik HTML, CSS, JavaScript en React en hoop op deze manier het Front-end gedeelte
                    van wat ik heb geleerd een beetje levendig te houden.
                </p>
                <p className="largemarginbottom">
                    De site heet theorie en best practices, maar de uiteindelijke opzet is uiteindelijk om
                    elke techniek die voor deze site is gebruikt, of het nu gaat om centreren, formulieren of routing,
                    in verkorte vorm te behandelen en uit te leggen.
                </p>
                <p className="largemarginbottom">
                    Wat ik vaak mis bij het zoeken naar best practices, is dat de code het resultaat niet laat zien.
                    Het voordeel van deze site is dat input &eacute;n output te zien zijn op
                    &eacute;&eacute;n en dezelfde pagina.<br />
                    In sommige gevallen kan de input worden aangepast, om zo te zien hoe daarna de output verandert.
                    Dit heb ik aangegeven bij de uitleg en in de code.
                    Klik erop, voer een andere waarde in en kijk hoe de output zich aanpast.
                </p>
                <p>
                    En, o ja, ik meen deze website in het Nederlands te moeten maken,
                    aangezien het aantal Nederlandstalige <i>tutorials</i> nog niet heel uitgebreid is.
                </p>
            </section>
        </>)

};
export default Home;

