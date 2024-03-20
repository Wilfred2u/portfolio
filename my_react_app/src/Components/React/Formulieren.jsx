import { useState } from 'react';

import OutputToConsole from './FormOutput';

const FormInput = () => {

    const [formData, setFormData] = useState(
        {
            aanhef: "",
            voorletters: "",
            achternaam: "",
            straat: "",
            huisnummer: "",
            toevoeging: "",
            postcode: "",
            woonplaats: "",
            email1: "",
            email2: "",
            provincie: "",
            commentaar: "",
            wilNieuwsbrief: false,
        }
    );

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        setFormData(data => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    const antwoordWilNieuwsbrief = formData.wilNieuwsbrief ? "ja" : "nee";

    const dataOutput = {
        head: "Mijn verzonden gegevens zijn:",
        name: `naam: ${formData.aanhef} ${formData.voorletters} ${formData.achternaam}`,
        adress: `adres: ${formData.straat} ${formData.huisnummer}${formData.toevoeging}`,
        postalCode: `postcode: ${formData.postcode}`,
        town: `woonplaats: ${formData.woonplaats}`,
        province: `provincie: ${formData.provincie}`,
        email: `email-adres: ${formData.email1}`,
        comment: `commentaar: ${formData.commentaar}`,
        checkbox: `wil de nieuwsbrief ontvangen: ${antwoordWilNieuwsbrief}`,
    }

    const consoleOutput =
        <OutputToConsole
            head={dataOutput.head}
            name={dataOutput.name}
            adress={dataOutput.adress}
            postalcode={dataOutput.postalCode}
            town={dataOutput.town}
            province={dataOutput.province}
            email={dataOutput.email}
            comment={dataOutput.comment}
            checkbox={dataOutput.checkbox}
        />

    const handleSubmit = event => {
        event.preventDefault();
        if (formData.email1 !== formData.email2) {
            window.alert("De e-mailadressen zijn niet gelijk aan elkaar.")
        }
        else {
            for (const line in consoleOutput) {
                console.log(consoleOutput[line])
            }
        }
    };

    return (
        <>
            <div className="codeblock width100percent bglightgrey darkgrey mediummarginbottom roundradii">
                <form onSubmit={handleSubmit} className="mediumpaddingtop">
                    <div className="flex textspacedbetween">
                        <fieldset className="mediummarginbottom width25percent height80 roundradii">
                            <legend>Aanhef &#0042;</legend>
                            <input className="mediummarginright"
                                type="radio"
                                id="Dhr."
                                name="aanhef"
                                value="Dhr."
                                checked={formData.aanhef === "Dhr."}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="Dhr." className="largemarginright">Dhr.</label>
                            <input className="mediummarginright"
                                type="radio"
                                id="Mevr."
                                name="aanhef"
                                value="Mevr."
                                checked={formData.aanhef === "Mevr."}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="Mevr." className="largemarginright">Mevr.</label>
                        </fieldset>
                        <fieldset className="flex textspacedbetween mediummarginbottom width75percent height80 roundradii">
                            <legend>Naam &#0042;</legend>
                            <input className="width35percent roundradii"
                                type="text"
                                name="voorletters"
                                value={formData.voorletters}
                                onChange={handleChange}
                                placeholder="Voorletter&#0040;s&#0041;"
                                required
                            />
                            <input className="width65percent roundradii"
                                type="text"
                                name="achternaam"
                                value={formData.achternaam}
                                onChange={handleChange}
                                placeholder="Achternaam"
                                required
                            />
                        </fieldset>
                    </div>
                    <fieldset className="flex textspacedbetween mediummarginbottom width100percent height80 roundradii">
                        <legend>Adres &#0042;</legend>
                        <input className="width50percent roundradii"
                            type="text"
                            name="straat"
                            value={formData.straat}
                            onChange={handleChange}
                            placeholder="Straat"
                            required
                        />
                        <input className="width25percent roundradii"
                            type="text"
                            name="huisnummer"
                            value={formData.huisnummer}
                            onChange={handleChange}
                            placeholder="Huisnummer"
                            required
                        />
                        <input className="width25percent roundradii"
                            type="text"
                            name="toevoeging"
                            value={formData.toevoeging}
                            onChange={handleChange}
                            placeholder="Toevoeging"
                        />
                    </fieldset>
                    <fieldset className="flex textspacedbetween mediummarginbottom width100percent height80 roundradii">
                        <legend>Postocde + woonplaats + provincie &#0042;</legend>
                        <input className="width25percent roundradii"
                            type="text"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleChange}
                            placeholder="Postcode"
                            required
                        />
                        <input className="width30percent roundradii"
                            type="text"
                            name="woonplaats"
                            value={formData.woonplaats}
                            onChange={handleChange}
                            placeholder="Woonplaats"
                            required
                        />
                        <select className="mediummarginbottom width45percent height100percent roundradii"
                            id="provincie"
                            value={formData.provincie}
                            onChange={handleChange}
                            name="provincie"
                            required
                        >
                            <option value="">-- Selecteer --</option>
                            <option value="Drenthe">Drenthe</option>
                            <option value="Flevoland">Flevoland</option>
                            <option value="Friesland">Friesland</option>
                            <option value="Gelderland">Gelderland</option>
                            <option value="Groningen">Groningen</option>
                            <option value="Limburg">Limburg</option>
                            <option value="Noord-Brabant">Noord-Brabant</option>
                            <option value="Noord-Holland">Noord-Holland</option>
                            <option value="Overijssel">Overijssel</option>
                            <option value="Utrecht">Utrecht</option>
                            <option value="Zeeland">Zeeland</option>
                            <option value="Zuid-Holland">Zuid-Holland</option>
                        </select>
                    </fieldset>
                    <fieldset className="mediummarginbottom width100percent roundradii">
                        <legend>E-mail &#0042;</legend>
                        <input className="width100percent roundradii"
                            type="email"
                            name="email1"
                            value={formData.email1}
                            onChange={handleChange}
                            placeholder="E-mailadres"
                            required
                        />
                        <input className="width100percent mediummargintop roundradii"
                            type="email"
                            name="email2"
                            value={formData.email2}
                            onChange={handleChange}
                            placeholder="Herhaal e-mailadres"
                            required
                        />
                    </fieldset>
                    <textarea className="mediummarginbottom mediummargintop width100percent height100 roundradii"
                        placeholder="Opmerkingen"
                        onChange={handleChange}
                        name="commentaar"
                        value={formData.commentaar}
                    />
                    <input className="mediummarginright"
                        type="checkbox"
                        id="wilNieuwsbrief"
                        onChange={handleChange}
                        name="wilNieuwsbrief"
                        checked={formData.wilNieuwsbrief}
                    />
                    <label htmlFor="wilNieuwsbrief">Ja, ik wil de nieuwsbrief ontvangen.</label>
                    <input type="submit" value={"Verzenden"} className="mediummargintop largemarginright roundradii" />
                    <p className="mediummargintop">&#0042; verplicht veld</p>
                </form>
            </div >
            <div className="codeblock width100percent bgdarkgrey verylargemarginbottom roundradii">
                <p className="code green">
                    {consoleOutput}
                </p>
            </div>
        </>
    )
}

const MyForm = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="formulieren">formulieren</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    <p className="largemarginbottom">
                        In React worden formuliergegevens afgehandeld door de componenten, en de gegevens worden opgeslagen in de staat van de componenten.
                        Veranderingen worden beheerd door het toevoegen van <i>event handlers</i> in het <span
                            className="code lightyellow">onChange</span>-attribuut.<br />
                        Om alle inputwaarden bij te houden, wordt een <span className="code lightyellow">useState</span> <i>hook</i> gebruikt. Ook zorgt deze ervoor
                        dat de app een zgn. <i>single source of truth</i> heeft.
                    </p>
                </p>
                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code noline">
                        <span className="purple">import</span> <span className="yellow">&#123; <span
                            className="lightblue">useState</span> &#125;</span> <span className="purple">from</span> <span
                                className="orange">'react'</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">const </span> <span className="lightyellow">MijnFormulier</span> = <span
                            className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                                className="yellow">&#123;</span>
                    </p >
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="purple">&#0091;</span><span
                            className="blue">formData</span>, <span className="lightyellow">setFormData</span><span
                                className="purple">&#0093;</span> = <span className="lightyellow">useState</span><span
                                    className="purple">&#0040;</span>
                    </p>
                    <p className="code doubleindention darkblue">&#123;</p>
                    <p className="code tripleindention">
                        <span className="lightblue">aanhef:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">voorletters:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">achternaam:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">straat:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">huisnummer:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">toevoeging:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">postcode:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">woonplaats:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">email1:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">email2:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">provincie:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">commentaar:</span> <span className="orange">""</span>,
                    </p>
                    <p className="code tripleindention">
                        <span className="lightblue">wilNieuwsbrief:</span> <span className="darkblue">false</span>,
                    </p>
                    <p className="code doubleindention darkblue">&#125;</p>
                    <p className="code indention noline">
                        <span className="purple">&#0041;</span>;
                    </p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="lightyellow">handleChange</span> = <span
                            className="lightblue">event</span> <span className="darkblue">=&gt;</span> <span
                                className="purple">&#123;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="darkblue">const &#123;</span> <span className="blue">name<span
                            className="white">,</span> value<span className="white">,</span> type<span
                                className="white">,</span> checked</span><span className="darkblue">&#125;</span> = <span
                                    className="lightblue">event<span className="white">.</span>target</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightyellow">setFormData</span><span className="blue">&#0040;<span
                            className="lightblue">prevFormData</span> =&gt; <span
                                className="yellow">&#123;</span>
                        </span>
                    </p>
                    <p className="code tripleindention purple">return &#123;</p>
                    <p className="code quadrupleindention">
                        ...<span className="lightblue">prevFormData</span>,
                    </p>
                    <p className="code quadrupleindention">
                        <span className="darkblue">&#0091;<span className="blue">name</span>&#0093;</span><span
                            className="lightblue">:</span> <span className="blue">type</span> === <span
                                className="orange">"checkbox"</span> ? <span className="blue">checked</span> : <span
                                    className="blue">value</span>
                    </p>
                    <p className="code tripleindention purple">&#125;</p>
                    <p className="code doubleindention">
                        <span className="yellow">&#125;</span><span className="blue">&#0041;</span>
                    </p>
                    <p className="code indention noline"><span className="purple">&#125;</span>;</p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="lightyellow">handleSubmit</span> = <span
                            className="lightblue">event</span> <span className="darkblue">=&gt;</span> <span
                                className="purple">&#123;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">event</span>.<span className="lightyellow">preventDefault</span><span
                            className="darkblue">&#0040;&#0041;</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">"Mijn verzonden gegevens zijn:"</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`naam: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">aanhef</span>&#125; $&#123;<span
                                        className="blue">formData</span><span className="white">.</span><span
                                            className="lightblue">voorletters</span>&#125; $&#123;<span
                                                className="blue">formData</span><span className="white">.</span><span
                                                    className="lightblue">achternaam</span>&#125;</span><span
                                                        className="orange">`</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`adres: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">straat</span>&#125; $&#123;<span
                                        className="blue">formData</span><span className="white">.</span><span
                                            className="lightblue">huisnummer</span>&#125;$&#123;<span
                                                className="blue">formData</span><span className="white">.</span><span
                                                    className="lightblue">toevoeging</span>&#125;</span><span
                                                        className="orange">`</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`postcode: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">postcode</span>&#125;<span
                                        className="orange">`</span></span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`woonplaats: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">woonplaats</span>&#125;<span
                                        className="orange">`</span></span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`provincie: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">provincie</span>&#125;<span
                                        className="orange">`</span></span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`email-adres: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">email1</span>&#125;<span
                                        className="orange">`</span></span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`commentaar: </span><span
                                className="yellow">$&#123;<span className="blue">formData</span><span
                                    className="white">.</span><span className="lightblue">commentaar</span>&#125;<span
                                        className="orange">`</span></span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="darkblue">const</span> <span className="blue">antwoordWilNieuwsbrief</span> = <span
                            className="blue">formData</span>.<span className="lightblue">wilNieuwsbrief</span> ? <span
                                className="orange">"ja"</span> : <span className="orange">"nee"</span>;
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="darkblue">&#0040;</span><span className="orange">`wil de nieuwsbrief ontvangen: </span><span
                                className="yellow">$&#123;<span className="blue">antwoordWilNieuwsbrief</span>&#125;<span
                                    className="orange">`</span></span>;
                    </p>
                    <p className="code indention noline"><span className="purple">&#125;</span>;</p>
                    <p className="code indention"><span className="purple">return &#0040;</span></p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;</span><span className="darkblue">form</span> <span
                            className="lightblue">onSubmit</span>=<span className="darkblue">&#123;<span
                                className="lightyellow">handleSubmit</span>&#125;</span><span className="grey">&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">legend</span>&gt;</span>Aanhef <span
                            className="darkblue">&#38;#0042;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">legend</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"radio"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">id</span>=<span className="orange">"Dhr."</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"aanhef"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">value</span>=<span className="orange">"Dhr."</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">checked</span>=<span className="blue">&#123;formData<span
                            className="white">.</span><span className="lightblue">aanhef</span> <span
                                className="white">===</span> <span className="orange">"Dhr."</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">onChange</span>=<span className="blue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention lightblue">required</p>
                    <p className="code quintupleindention grey">&#0047;&gt;</p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">label</span> <span className="lightblue">htmlFor</span>=<span
                            className="orange">"Dhr."</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">label</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"radio"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">id</span>=<span className="orange">"Mevr."</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"aanhef"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">value</span>=<span className="orange">"Mevr."</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">checked</span>=<span className="blue">&#123;formData<span
                            className="white">.</span><span className="lightblue">aanhef</span> <span
                                className="white">===</span> <span className="orange">"Mevr."</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">onChange</span>=<span className="blue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention lightblue">required</p>
                    <p className="code quintupleindention grey">&#0047;&gt;</p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">label</span> <span className="lightblue">htmlFor</span>=<span
                            className="orange">"Mevr."</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">label</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">legend</span>&gt;</span>Naam <span
                            className="darkblue">&#38;#0042;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">legend</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"voorletters"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">voorletters</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">placeholder</span>=<span
                            className="orange">"Voorletter<span className="darkblue">&#38;#0040;</span>s<span
                                className="darkblue">&#38;#0041;</span>"</span>
                    </p>
                    <p className="code sextupleindention lightblue">required</p>
                    <p className="code quintupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"achternaam"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">achternaam</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">placeholder</span>=<span className="orange">"Achternaam"</span>
                    </p>
                    <p className="code sextupleindention lightblue">required</p>
                    <p className="code quintupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">legend</span>&gt;</span>Adres <span
                            className="darkblue">&#38;#0042;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">legend</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"straat"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">straat</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span
                            className="orange">"Straat"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"huisnummer"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">huisnummer</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span
                            className="orange">"Huisnummer"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"toevoeging"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">toevoeging</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span
                            className="orange">"Toevoeging"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">legend</span>&gt;</span>Postcode + woonplaats + provincie <span
                            className="darkblue">&#38;#0042;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">legend</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"postcode"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">postcode</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span
                            className="orange">"Postcode"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"text"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"woonplaats"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">woonplaats</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span
                            className="orange">"Woonplaats"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">select</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">id</span>=<span className="orange">"provincie"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"provincie"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">provincie</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&gt;</span></p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">""</span>&gt;</span>-- Selecteer --<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Drenthe"</span>&gt;</span>Drenthe<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Flevoland"</span>&gt;</span>Flevoland<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Friesland"</span>&gt;</span>Friesland<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Gelderland"</span>&gt;</span>Gelderland<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Groningen"</span>&gt;</span>Groningen<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Limburg"</span>&gt;</span>Limburg<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Noord-Brabant"</span>&gt;</span>Noord-Brabant<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Noord-Holland"</span>&gt;</span>Noord-Holland<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Overijssel"</span>&gt;</span>Overijssel<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Utrecht"</span>&gt;</span>Utrecht<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Zeeland"</span>&gt;</span>Zeeland<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">option</span> <span
                            className="lightblue">value</span><span className="white">=</span><span
                                className="orange">"Zuid-Holland"</span>&gt;</span>Zuid-Holland<span className="grey">&lt;&#0047;<span
                                    className="darkblue">option</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">select</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">legend</span>&gt;</span>E-mail <span
                            className="darkblue">&#38;#0042;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">legend</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"email"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"email1"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">email1</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span className="orange">"E-mailadres"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"email"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"email2"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">email2</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">placeholder</span>=<span className="orange">"Herhaal e-mailadres"</span>
                    </p>
                    <p className="code quintupleindention lightblue">required</p>
                    <p className="code quadrupleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">fieldset</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;</span><span className="darkblue">textarea</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"commentaar"</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">value</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">commentaar</span>&#125;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">placeholder</span>=<span className="orange">"Opmerkingen"</span>
                    </p>
                    <p className="code tripleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">type</span>=<span className="orange">"checkbox"</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">name</span>=<span className="orange">"wilNieuwsbrief"</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">id</span>=<span className="orange">"wilNieuwsbrief"</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">checked</span>=<span className="darkblue">&#123;<span
                            className="blue">formData</span><span className="white">.</span><span
                                className="lightblue">wilNieuwsbrief</span>&#125;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="lightblue">onChange</span>=<span className="darkblue">&#123;<span
                            className="lightyellow">handleChange</span>&#125;</span>
                    </p>
                    <p className="code tripleindention"><span className="grey">&#0047;&gt;</span></p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;</span><span className="darkblue">label</span> <span
                            className="lightblue">htmlFor</span>=<span className="orange">"wilNieuwsbrief"</span><span
                                className="grey">&gt;</span>Ja, ik wil de nieuwsbrief ontvangen.<span
                                    className="grey">&lt;&#0047;<span className="darkblue">label</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;</span><span className="darkblue">input</span> <span
                            className="lightblue">type</span>=<span className="orange">"submit"</span> <span
                                className="lightblue">value</span>=<span className="blue">&#123;<span
                                    className="orange">"Verzenden"</span>&#125;</span> <span className="grey">&#0047;&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">p</span>&gt;</span><span
                            className="darkblue">&#38;#0042;</span> verplicht veld<span className="grey">&lt;&#0047;<span
                                className="darkblue">p</span>&gt;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">form</span>&gt;</span>
                    </p>
                    <p className="code indention"><span className="purple">&#0041;</span>;</p>
                    <p className="code noline"><span className="yellow">&#125;</span>;</p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">MijnFormulier</span>;
                    </p>
                </div >
                <p className="smallmarginbottom">Output:</p>
                <FormInput />
            </section >
        </>
    );
};

export default MyForm;