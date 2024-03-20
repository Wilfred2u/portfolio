import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Data from "./data";

const Props3 = () => {
    const cardElements = Data.map(element =>
        <Card
            key={element.id}
            img={element.coverImg}
            rating={element.stats.rating}
            reviewCount={element.stats.reviewCount}
            location={element.location}
            title={element.title}
            price={element.price}
        />)

    return (
        <>
            <p className="largemarginbottom">
                In het volgende voorbeeld zijn de waarden van de props variabel en zitten ze in een apart .jsx-bestand.
                Zo worden functie en inhoud gescheiden.<br />
                Nog een voordeel is dat ze kunnen worden <i>gemapped</i>, zodat je meerdere <i>instances</i>
                van dezelfde component kunt maken.
            </p>

            <p className="smallmarginbottom">De JSX-bestanden:</p>
            <p className="smallmarginbottom">App.jsx:</p>
            <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                <p className="code">
                    <span className="purple">import <span className="lightblue">Navbar</span> from</span> <span
                        className="orange">".&#0047;Components&#0047;Navbar"</span>;
                </p>
                <p className="code">
                    <span className="purple">import <span className="lightblue">Hero</span> from</span> <span
                        className="orange">".&#0047;Components&#0047;Hero"</span>;
                </p>
                <p className="code">
                    <span className="purple">import <span className="lightblue">Card</span> from</span> <span
                        className="orange">".&#0047;Components&#0047;Card"</span>;
                </p>
                <p className="code noline">
                    <span className="purple">import <span className="lightblue">Data</span> from</span> <span
                        className="orange">".&#0047;data"</span>;
                </p>
                <p className="code">
                    <span className="darkblue">const</span> <span className="lightyellow">App</span> = <span
                        className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                            className="yellow">&#123;</span>
                </p>
                <p className="code indention">
                    <span className="darkblue">const</span> <span className="blue">cardElements</span> = <span
                        className="blue">Data</span>.<span className="lightyellow">map</span><span
                            className="purple">&#0040;</span><span className="lightblue">element</span> <span
                                className="darkblue">=&gt;</span>
                </p>
                <p className="code doubleindention">
                    <span className="grey">&lt;</span><span className="lightgreen">Card</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">key</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>id</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">img</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>coverImg</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">rating</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>stats<span className="white">.</span>rating</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">reviewCount</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>stats<span className="white">.</span>reviewCount</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">location</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>location</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">title</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>title</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">price</span>=<span className="blue">&#123;<span className="lightblue">element<span
                        className="white">.</span>price</span>&#125;</span>
                </p>
                <p className="code doubleindention noline">
                    <span className="grey">&#0047;&gt;</span><span className="purple">&#0041;</span>
                </p>
                <p className="code indention purple">return &#0040;</p>
                <p className="code doubleindention">
                    <span className="grey">&lt;<span className="darkblue">div</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="lightgreen">Navbar</span> &#0047;&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="lightgreen">Hero</span> &#0047;&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;</span><span className="darkblue">section</span> <span
                        className="lightblue">className</span>=<span className="orange">"card--list"</span><span
                            className="grey">&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="darkblue">&#123;<span className="blue">cardElements</span>&#125;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">section</span>&gt;</span>
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
            </div >

            <p className="smallmarginbottom">Navbar.jsx:</p>
            <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                <p className="code noline">
                    <span className="purple">import <span className="lightblue">airbnb_logo</span> from</span> <span
                        className="orange">".&#0047;Images&#0047;Airbnb-logo.png"</span>;
                </p>
                <p className="code">
                    <span className="darkblue">const</span> <span className="lightyellow">Navbar</span> = <span
                        className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                            className="yellow">&#123;</span>
                </p>
                <p className="code indention purple">return &#0040;</p>
                <p className="code doubleindention">
                    <span className="grey">&lt;<span className="darkblue">nav</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">img</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"navbar--logo"</span> <span className="lightblue">src</span><span
                                className="white">=</span><span className="darkblue">&#123;<span
                                    className="lightblue">airbnb_logo</span>&#125;</span> <span
                                        className="lightblue">alt</span><span className="white">=</span><span
                                            className="orange">"airbnb-logo"</span> &#0047;&gt;</span>
                </p>
                <p className="code doubleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">nav</span>&gt;</span>
                </p>
                <p className="code indention purple">&#0041;</p>
                <p className="code noline">
                    <span className="yellow">&#125;</span>;
                </p>
                <p className="code">
                    <span className="purple">export default</span> <span className="lightyellow">Navbar</span>;
                </p>
            </div>

            <p className="smallmarginbottom">Hero.jsx:</p>
            <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                <p className="code noline">
                    <span className="purple">import <span className="lightblue">hero</span> from</span> <span
                        className="orange">".&#0047;Images&#0047;photo-grid.png"</span>;
                </p>
                <p className="code">
                    <span className="darkblue">const</span> <span className="lightyellow">Hero</span> = <span
                        className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                            className="yellow">&#123;</span>
                </p>
                <p className="code indention purple">return &#0040;</p>
                <p className="code doubleindention">
                    <span className="grey">&lt;<span className="darkblue">section</span> <span
                        className="lightblue">className</span><span className="white">=<span
                            className="orange">"hero"</span></span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">img</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"hero--photo"</span> <span className="lightblue">src</span><span
                                className="white">=</span><span className="darkblue">&#123;<span
                                    className="lightblue">hero</span>&#125;</span> <span
                                        className="lightblue">alt</span><span className="white">=</span><span
                                            className="orange">"hero"</span> &#0047;&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">h1</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"hero--title"</span>&gt;</span>Online Experiences<span
                                className="grey">&lt;&#0047;<span className="darkblue">h1</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">p</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"hero--text"</span>&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>
                </p>
                <p className="code doubleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">section</span>&gt;</span>
                </p>
                <p className="code indention purple">&#0041;</p>
                <p className="code noline">
                    <span className="yellow">&#125;</span>;
                </p>
                <p className="code">
                    <span className="purple">export default</span> <span className="lightyellow">Hero</span>;
                </p>
            </div >

            <p className="smallmarginbottom">Card.jsx:</p>
            <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                <p className="code noline">
                    <span className="purple">import <span className="lightblue">star</span> from</span> <span
                        className="orange">".&#0047;Images&#0047;star.png"</span>;
                </p>
                <p className="code">
                    <span className="darkblue">const</span> <span className="lightyellow">Card</span> = <span
                        className="lightblue">props</span> <span className="darkblue">=&gt;</span> <span
                            className="yellow">&#123;</span>
                </p>
                <p className="code indention purple">return &#0040;</p>
                <p className="code doubleindention">
                    <span className="grey">&lt;<span className="darkblue">div</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"card"</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">img</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"card--photo"</span> <span className="lightblue">src</span><span
                                className="white">=</span><span className="darkblue">&#123;<span
                                    className="lightblue">props<span className="white">.</span>img</span>&#125;</span> <span
                                        className="lightblue">alt</span><span className="white">=</span><span
                                            className="orange">"card"</span>&#0047;&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">div</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"card--stats"</span>&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="grey">&lt;<span className="darkblue">img</span> <span
                        className="lightblue">className</span><span className="white">=</span><span
                            className="orange">"card--star"</span> <span className="lightblue">src</span><span
                                className="white">=</span><span className="darkblue">&#123;<span
                                    className="lightblue">star</span>&#125;</span> <span
                                        className="lightblue">alt</span><span className="white">=</span><span
                                            className="orange">"star"</span>&#0047;&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="grey">&lt;<span className="darkblue">span</span>&gt;</span><span
                        className="darkblue">&#123;<span className="lightblue">props<span
                            className="white">.</span>rating</span>&#125;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">span</span>&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="grey">&lt;<span className="darkblue">span</span>&gt;</span><span
                        className="darkblue">&#123;<span className="lightblue">props<span
                            className="white">.</span>reviewCount</span>&#125;</span><span
                                className="grey">&lt;&#0047;<span className="darkblue">span</span>&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="grey">&lt;<span className="darkblue">span</span>&gt;</span> <span
                        className="white">&#8226;</span> <span className="darkblue">&#123;<span
                            className="lightblue">props<span className="white">.</span>location</span>&#125;</span><span
                                className="grey">&lt;&#0047;<span className="darkblue">span</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">p</span>&gt;</span><span
                        className="darkblue">&#123;<span className="lightblue">props<span
                            className="white">.</span>title</span>&#125;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">p</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">p</span>&gt;&lt;</span><span
                        className="darkblue">span</span> <span className="lightblue">className</span>=<span
                            className="orange">"bold"</span><span className="grey">&gt;</span>From $<span
                                className="darkblue">&#123;<span className="lightblue">props<span
                                    className="white">.</span>price</span>&#125;</span><span className="grey">&lt;&#0047;<span
                                        className="darkblue">span</span>&gt;</span> &#0047; person<span
                                            className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>
                </p>
                <p className="code doubleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                </p>
                <p className="code indention purple">&#0041;</p>
                <p className="code noline">
                    <span className="yellow">&#125;</span>;
                </p>
                <p className="code">
                    <span className="purple">export default</span> <span className="lightyellow">Card</span>;
                </p>
            </div >

            <p className="smallmarginbottom">data.jsx:</p>
            <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                <p className="code">
                    <span className="darkblue">const</span> <span className="blue">data</span> = <span
                        className="yellow">&#091;</span>
                </p>
                <p className="code indention purple">&#0123;</p>
                <p className="code doubleindention">
                    <span className="lightblue">id:</span> <span className="digit">1</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">title:</span> <span className="orange">"Life Lessons with Katie Zaferes"</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">description:</span> <span className="orange">"I will share with you what I call "Positively Impactful Moments of ...</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">price:</span> <span className="digit">136</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">coverImg:</span> <span className="orange">"&#0047;Images&#0047;katie-zaferes.png"</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">stats:</span> <span className="darkblue">&#123;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">rating:</span> <span className="digit">5.0</span>,
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">reviewCount:</span> <span className="digit">6</span>
                </p>
                <p className="code doubleindention">
                    <span className="blue">&#125;</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">location:</span> <span className="orange">"Online"</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">openSpots:</span> <span className="digit">0</span>,
                </p>
                <p className="code indention">
                    <span className="purple">&#125;</span>,
                </p>
                <p className="code indention purple">&#0123;</p>
                <p className="code doubleindention">
                    <span className="lightblue">id:</span> <span className="digit">2</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">title:</span> <span className="orange">"Learn Wedding Photography"</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">description:</span> <span className="orange">"Interested in becoming a wedding photographer? For beginner and ...</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">price:</span> <span className="digit">125</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">coverImg:</span> <span className="orange">"&#0047;Images&#0047;wedding-photography.png"</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">stats:</span> <span className="darkblue">&#123;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">rating:</span> <span className="digit">5.0</span>,
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">reviewCount:</span> <span className="digit">30</span>
                </p>
                <p className="code doubleindention">
                    <span className="blue">&#125;</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">location:</span> <span className="orange">"Online"</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">openSpots:</span> <span className="digit">27</span>,
                </p>
                <p className="code indention">
                    <span className="purple">&#125;</span>,
                </p>
                <p className="code indention purple">&#0123;</p>
                <p className="code doubleindention">
                    <span className="lightblue">id:</span> <span className="digit">3</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">title:</span> <span className="orange">"Group Mountain Biking"</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">description:</span> <span className="orange">"Experience the beautiful Norwegian landscape and meet new friends all ...</span>;
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">price:</span> <span className="digit">50</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">coverImg:</span> <span className="orange">"&#0047;Images&#0047;mountain-bike.png"</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">stats:</span> <span className="darkblue">&#123;</span>
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">rating:</span> <span className="digit">4.8</span>,
                </p>
                <p className="code tripleindention">
                    <span className="lightblue">reviewCount:</span> <span className="digit">2</span>
                </p>
                <p className="code doubleindention">
                    <span className="blue">&#125;</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">location:</span> <span className="orange">"Norway"</span>,
                </p>
                <p className="code doubleindention">
                    <span className="lightblue">openSpots:</span> <span className="digit">0</span>,
                </p>
                <p className="code indention">
                    <span className="purple">&#125;</span>,
                </p>
                <p className="code noline">
                    <span className="yellow">&#093;</span>;
                </p>
                <p className="code">
                    <span className="purple">export default</span> <span className="blue">data</span>;
                </p>
            </div>
            <p className="smallmarginbottom">Output:</p>
            <div className="codeblock width100percent bglightgrey verylargemarginbottom roundradii">
                <Navbar />
                <Hero />
                <section className='cards_list'>
                    {cardElements}
                </section>
            </div>
        </>
    );
};

export default Props3;