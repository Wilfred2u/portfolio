import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="bold smallmarginbottom" id="router">router</h4>
                <hr className="smallmarginbottom" />
                <p className="largemarginbottom">
                    Hier komt info over routes.
                </p>

                <p className="smallmarginbottom">De JSX-bestanden:</p>
                <p className="smallmarginbottom">App.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="purple">import <span className="yellow">&#123; <span
                            className="lightblue">Routes<span className="white">,</span> Route</span> &#125;</span> from</span> <span
                                className="orange">"react-router-dom"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">Layout</span> from</span> <span
                            className="orange">"./pages/Layout"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">Home</span> from</span> <span
                            className="orange">"./pages/Home"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">Blogs</span> from</span> <span
                            className="orange">"./pages/Blogs"</span>;
                    </p>
                    <p className="code">
                        <span className="purple">import <span className="lightblue">Contact</span> from</span> <span
                            className="orange">"./pages/Contact"</span>;
                    </p>
                    <p className="code noline">
                        <span className="purple">import <span className="lightblue">NoPage</span> from</span> <span
                            className="orange">"./pages/NoPage"</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">App</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention purple">return &#0040;</p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;<span className="lightgreen">Routes</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="lightgreen">Route <span
                            className="lightblue">path</span><span className="white">=</span><span
                                className="orange">"&#0047;"</span> <span className="lightblue">element</span><span
                                    className="white">=</span><span className="blue">&#123;<span className="grey">&lt;<span
                                        className="lightgreen">Layout</span> &#0047;&gt;</span>&#125;</span></span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="lightgreen">Route <span
                            className="lightblue">index element</span><span className="white">=</span><span
                                className="blue">&#123;<span className="grey">&lt;<span
                                    className="lightgreen">Home</span> &#0047;&gt;</span>&#125;</span></span> &#0047;&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="lightgreen">Route <span
                            className="lightblue">path</span><span className="white">=</span><span
                                className="orange">"&#0047;blogs"</span> <span className="lightblue">element</span><span
                                    className="white">=</span><span className="blue">&#123;<span className="grey">&lt;<span
                                        className="lightgreen">Blogs</span> &#0047;&gt;</span>&#125;</span></span> &#0047;&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="lightgreen">Route <span
                            className="lightblue">path</span><span className="white">=</span><span
                                className="orange">"&#0047;contact"</span> <span className="lightblue">element</span><span
                                    className="white">=</span><span className="blue">&#123;<span className="grey">&lt;<span
                                        className="lightgreen">Contact</span> &#0047;&gt;</span>&#125;</span></span> &#0047;&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="lightgreen">Route <span
                            className="lightblue">path</span><span className="white">=</span><span
                                className="orange">"*"</span> <span className="lightblue">element</span><span
                                    className="white">=</span><span className="blue">&#123;<span className="grey">&lt;<span
                                        className="lightgreen">NoPage</span> &#0047;&gt;</span>&#125;</span></span> &#0047;&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="lightgreen">Route</span>&gt;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;&#0047;<span className="lightgreen">Routes</span>&gt;</span>
                    </p>
                    <p className="code indention purple">&#0041;</p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">App</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Layout.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code noline">
                        <span className="purple">import <span className="yellow">&#123; <span
                            className="lightblue">Outlet<span className="white">,</span> Link</span> &#125;</span> from</span> <span
                                className="orange">"react-router-dom"</span>;
                    </p>
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Layout</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention purple">return &#0040;</p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="darkblue">ul</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">li</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="lightgreen">Link</span> <span
                            className="lightblue">to</span>=<span className="orange">"&#0047;"</span><span
                                className="grey">&gt;</span>Home<span className="grey">&lt;&#0047;<span
                                    className="lightgreen">Link</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">li</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">li</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="lightgreen">Link</span> <span
                            className="lightblue">to</span>=<span className="orange">"&#0047;blogs"</span><span
                                className="grey">&gt;</span>Blogs<span className="grey">&lt;&#0047;<span
                                    className="lightgreen">Link</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">li</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;<span className="darkblue">li</span>&gt;</span>
                    </p>
                    <p className="code quintupleindention">
                        <span className="grey">&lt;</span><span className="lightgreen">Link</span> <span
                            className="lightblue">to</span>=<span className="orange">"&#0047;contact"</span><span
                                className="grey">&gt;</span>Contact<span className="grey">&lt;&#0047;<span
                                    className="lightgreen">Link</span>&gt;</span>
                    </p>
                    <p className="code quadrupleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">li</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">ul</span>&gt;</span>
                    </p>
                    <p className="code tripleindention">
                        <span className="grey">&lt;<span className="lightgreen">Outlet</span> &#0047;&gt;</span>
                    </p>
                    <p className="code doubleindention">
                        <span className="grey">&lt;&#0047;<span className="darkblue">div</span>&gt;</span>
                    </p>
                    <p className="code indention purple">&#0041;</p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Layout</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Home.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Home</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">h1</span>&gt;</span>Home<span className="grey">&lt;&#0047;<span
                                className="darkblue">h1</span>&gt;</span>;
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Home</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Blogs.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Blogs</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">h1</span>&gt;</span>Blog Articles<span className="grey">&lt;&#0047;<span
                                className="darkblue">h1</span>&gt;</span>;
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Blogs</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Contact.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">Contact</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">h1</span>&gt;</span>Contact Me<span className="grey">&lt;&#0047;<span
                                className="darkblue">h1</span>&gt;</span>;
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">Contact</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">NoPage.jsx:</p>
                <div className="codeblock width100percent bgdarkgrey largemarginbottom roundradii">
                    <p className="code">
                        <span className="darkblue">const</span> <span className="lightyellow">NoPage</span> = <span
                            className="yellow">&#0040;&#0041; <span className="darkblue">=&gt;</span> &#123;</span>
                    </p>
                    <p className="code indention">
                        <span className="purple">return</span> <span className="grey">&lt;<span
                            className="darkblue">h1</span>&gt;</span>404<span className="grey">&lt;&#0047;<span
                                className="darkblue">h1</span>&gt;</span>;
                    </p>
                    <p className="code noline">
                        <span className="yellow">&#125;</span>;
                    </p>
                    <p className="code">
                        <span className="purple">export default</span> <span className="lightyellow">NoPage</span>;
                    </p>
                </div>

                <p className="smallmarginbottom">Output:</p>
                <div className="codeblock width100percent height500 bglightgrey darkgrey mediummarginbottom roundradii">
                    <ul>
                        <li>
                            <Link to="/router/"><span className="darkgrey">Home</span></Link>
                        </li>
                        <li>
                            <Link to="/router/blogs"><span className="darkgrey">Blogs</span></Link>
                        </li>
                        <li>
                            <Link to="/router/contact"><span className="darkgrey">Contact</span></Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </section >
        </>
    )
};

export default Layout;