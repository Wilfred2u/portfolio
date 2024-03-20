import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';

const Props1 = () => {
    return (
        <>
            <p className="largemarginbottom">
                In onderstaand voorbeeld zitten nog geen props; alle code is hard-gecodeerd.
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
                <p className="code noline">
                    <span className="purple">import <span className="lightblue">Card</span> from</span> <span
                        className="orange">".&#0047;Components&#0047;Card"</span>;
                </p>
                <p className="code">
                    <span className="darkblue">const</span> <span className="lightyellow">App</span> = <span
                        className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
                            className="yellow">&#123;</span>
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
                    <span className="grey">&lt;<span className="lightgreen">Card</span> &#0047;&gt;</span>
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
                <p className="code">
                    <span className="purple">import <span className="lightblue">katie</span> from</span> <span
                        className="orange">".&#0047;Images&#0047;katie-zaferes.png"</span>;
                </p>
                <p className="code noline">
                    <span className="purple">import <span className="lightblue">star</span> from</span> <span
                        className="orange">".&#0047;Images&#0047;star.png"</span>;
                </p>
                <p className="code">
                    <span className="darkblue">const</span> <span className="lightyellow">Card</span> = <span
                        className="yellow">&#0040;&#0041;</span> <span className="darkblue">=&gt;</span> <span
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
                                    className="lightblue">katie</span>&#125;</span> <span
                                        className="lightblue">alt</span><span className="white">=</span><span
                                            className="orange">"katie_zaferes"</span>&#0047;&gt;</span>
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
                    <span className="grey">&lt;<span className="darkblue">span</span>&gt;</span><span className="white">5.0</span><span
                        className="grey">&lt;&#0047;<span className="darkblue">span</span>&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="grey">&lt;<span className="darkblue">span</span>&gt;</span><span
                        className="darkblue">&#0040;<span className="white">6</span>&#0041;</span><span
                            className="white">&#8226;</span><span className="grey">&lt;&#0047;<span
                                className="darkblue">span</span>&gt;</span>
                </p>
                <p className="code quadrupleindention">
                    <span className="grey">&lt;<span className="darkblue">span</span>&gt;</span><span
                        className="white">USA</span><span className="grey">&lt;&#0047;<span
                            className="darkblue">span</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">p</span>&gt;</span>Life lessons with Katie Zaferes<span
                        className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>
                </p>
                <p className="code tripleindention">
                    <span className="grey">&lt;<span className="darkblue">p</span>&gt;&lt;</span><span
                        className="darkblue">span</span> <span className="lightblue">className</span>=<span
                            className="orange">"bold"</span><span className="grey">&gt;</span>From $136<span
                                className="grey">&lt;&#0047;<span className="darkblue">span</span>&gt;</span> &#0047; person
                    <span className="grey">&lt;&#0047;<span className="darkblue">p</span>&gt;</span>
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
            <p className="smallmarginbottom">Output:</p>
            <div className="codeblock width100percent bglightgrey verylargemarginbottom roundradii">
                <Navbar />
                <Hero />
                <Card />
            </div>
        </>
    );
};

export default Props1;