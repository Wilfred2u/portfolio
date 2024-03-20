import { useState } from "react";

import user from "../../../Images/user.png"
import starFilled from "../../../Images/star-filled.png";
import starEmpty from "../../../Images/star-empty.png";

const UseState6 = () => {

    const [contact] = useState({
        firstName: "Jan",
        lastName: "de Vries",
        phone: "+31 6 123 456 78",
        email: "jandevries@email.com",
        isFavorite: true
    });

    const [output, setOuput] = useState("");

    let starIcon = contact.isFavorite ? starFilled : starEmpty;

    const toggleFavorite = () => {
        setOuput("Toggle favorite")
        console.log("Toggle favorite")
    };

    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="usestate_object_zonder_update">useState - object zonder update</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    In dit voorbeeld is de staat een object, een verzameling van &eacute;&eacute;n of meerdere <i>key-value pairs</i>.
                    Er wordt er geen functie geretourneerd welke de staat vernieuwt, en daarom verandert de staat niet.
                    Er wordt alleen een string naar de console gelogd.
                </p>

                <p className="smallmarginbottom">Het JSX-bestand:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code noline">
                        <span className="purple">import <span className="yellow">&#123; <span
                            className="lightblue">useState</span> &#125;</span> from</span> <span className="orange">"react"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">user</span> from</span> <span
                            className="orange">".&#0047;Images&#0047;user.png"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">starFilled</span> from</span> <span
                            className="orange">".&#0047;Images&#0047;star-filled.png"</span>;
                    </p>
                    <p className="code noline">
                        <span className="purple">import <span className="lightblue">starEmpty</span> from</span> <span
                            className="orange">".&#0047;Images&#0047;star-empty.png"</span>;
                    </p>
                    <p className="code noline">
                        <span className="darkblue">const</span> <span className="lightyellow">App</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="purple">&#0091;<span
                            className="blue">contact</span>&#0093;</span> = <span className="lightyellow">useState</span><span
                                className="purple">&#0040;</span><span className="blue">&#123;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">firstName:</span> <span className="orange">"Jan"</span>,
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">lastName:</span> <span className="orange">"de Vries"</span>,
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">phone:</span> <span className="orange">"+31 6 123 456 78"</span>,
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">email:</span> <span className="orange">"jandevries@email.com"</span>,
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">isFavorite:</span> <span className="darkblue">true</span>
                    </p>
                    <p className="code indention noline">
                        <span className="blue">&#125;</span><span className="purple">&#0041;</span>;
                    </p>
                    <p className="code indention noline">
                        <span className="darkblue">let</span> <span className="lightblue">starIcon</span> = <span
                            className="blue">contact</span>.<span className="lightblue">isFavorite</span> ? <span
                                className="lightblue">starFilled</span> : <span className="lightblue">starEmpty</span>;
                    </p>
                    <p className="code indention">
                        <span className="darkblue">const</span> <span className="lightyellow">toggleFavorite</span> = <span
                            className="purple">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="lightblue">console</span>.<span className="lightyellow">log</span><span
                            className="blue">&#0040;<span className="orange">"Toggle favorite"</span>&#0041;</span>
                    </p>
                    <p className="code indention noline">
                        <span className="purple">&#125;</span>;
                    </p>
                    <p className="code indention purple">return &#0040;</p>
                    <p className="code doubleindention grey">&lt;&gt;</p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"card"</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">img</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">scr</span>=<span className="blue">&#123;<span
                            className="lightblue">user</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">className</span>=<span className="orange">"card--image"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">alt</span>=<span className="orange">"user"</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="lightblue">width</span>=<span className="blue">&#123;<span
                            className="digit">200</span>&#125;</span>
                    </p>
                    <p className="code quadrupleindention grey">&#0047;&gt;</p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"card--info"</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="darkblue">img</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">scr</span>=<span className="blue">&#123;<span
                            className="lightblue">starIcon</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">className</span>=<span className="orange">"card--favorite"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">alt</span>=<span className="orange">"star"</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">width</span>=<span className="blue">&#123;<span
                            className="digit">100</span>&#125;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="lightblue">onClick</span>=<span className="blue">&#123;<span
                            className="lightyellow">toggleFavorite</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention grey">&#0047;&gt;</p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">h2</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"card--name"</span>&gt;</span>
                    </p>
                    <p className="code sextupleindention">
                        <span className="blue">&#123;<span className="blue">contact</span><span
                            className="white">.</span><span className="lightblue">firstName</span>&#125; &#123;<span
                                className="blue">contact</span><span className="white">.</span><span
                                    className="lightblue">lastName</span>&#125;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">h2</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">p</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"card--contact"</span>&gt;</span><span className="blue">&#123;contact<span
                                    className="white">.</span><span className="lightblue">phone</span>&#125;</span><span
                                        className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;<span className="darkblue">p</span> <span
                            className="lightblue">className</span><span className="white">=</span><span
                                className="orange">"card--contact"</span>&gt;</span><span className="blue">&#123;contact<span
                                    className="white">.</span><span className="lightblue">email</span>&#125;</span><span
                                        className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code doubleindention grey">&lt;&#0047;&gt;</p>
                    <p className="code indention purple">&#0041;</p>
                    <p className="code">
                        <span className="yellow">&#125;</span>;
                    </p>
                </div>
                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock flex texthorizontalcentered1 width100percent bglightgrey darkgrey mediummarginbottom roundradii">
                    <div className="usestate_card">
                        <img
                            src={user}
                            className="usestate_card_image"
                            alt="user"
                            width={200}
                        />
                        <div className="usestate_card_info">
                            <img
                                src={starIcon}
                                className="usestate_card_favorite"
                                alt="star"
                                width={100}
                                onClick={toggleFavorite}
                            />
                            <h2 className="usestate_card_name">
                                {contact.firstName} {contact.lastName}
                            </h2>
                            <p className="usestate_card_contact">{contact.phone}</p>
                            <p className="usestate_card_contact">{contact.email}</p>
                        </div>
                    </div>
                </div>
                <div className="codeblock width100percent bgdarkgrey verylargemarginbottom roundradii">
                    <p className="code green" >&#0047;&#0047; {output}</p>
                </div>
            </section>
        </>
    );
};

export default UseState6;