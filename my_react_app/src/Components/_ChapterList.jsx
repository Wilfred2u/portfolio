import React, { useState } from "react";
import { Link } from "react-router-dom";

const js = [
    "data%20types",
    "commentaar",
    "operatoren",
    "variabelen",
    "functies",
    "if%20else",
    "for%20loop",
    "while%20loop",
    "switch",
];

const jsx = [
    "intro",
    "componenten_",
    "_componenten_geen%20componenten",
    "_componenten_eenvoudige%20component",
    "_componenten_importeren",
    "_componenten_met%20props",
    "afbeeldingen",
    "router",
    "props_",
    "_props_geen%20props",
    "_props_vaste%20waarde",
    "_props_variabele%20waarde",
    "_props_samengevoegd",
    "formulieren",
    "centreren",
    "usestate_",
    "_usestate_eenmalige%20update",
    "_usestate_meermalige%20update",
    "_usestate_callback-functie",
    "_usestate_boolean",
    "_usestate_array",
    "_usestate_object%20zonder%20update",
    "_usestate_object%20met%20update",
];

const Chapter = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = index => {
        setActiveDropdown(index === activeDropdown ? null : index);
    };

    return (
        <>
            <h4 className="smallmarginbottom halfindention">JavaScript</h4>
            <ul className="noliststyle">
                {js.map((chapter, index) => (
                    <li className="mediummarginbottom indention lineheight80percent">
                        <Link to={chapter} key={"js_" + index}>
                            {chapter.replaceAll("%20", " ")}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr className="mediummarginbottom" />
            <h4 className="smallmarginbottom halfindention lineheight80percent">React</h4>
            <ul className="noliststyle">
                {jsx.map((chapter, index) => (
                    chapter.slice(0, 1) !== "_" && chapter.slice(-1) !== "_" ? (
                        <li className="mediummarginbottom indention lineheight80percent">
                            <Link to={chapter} key={"react_" + index}>
                                {chapter}
                            </Link>
                        </li>
                    ) : chapter.slice(-1) === "_" ? (
                        <li className="mediummarginbottom indention lineheight80percent">
                            <Link
                                className={`dropdown-btn ${activeDropdown === index ? 'active' : ''}`}
                                to={chapter.replaceAll("_", " ")}
                                key={"react_" + index}
                                onClick={() => toggleDropdown(index)}>
                                {chapter.slice(0, -1)}
                                <i className={`${activeDropdown === index ? 'fa fa-caret-up' : 'fa fa-caret-down'}`}></i>
                            </Link>

                            <div
                                className="dropdown-content mediummargintop"
                                style={{ display: activeDropdown === index ? 'block' : 'none' }}>
                                <ul className="noliststyle">
                                    {jsx
                                        .filter((subchapter) => subchapter.charAt(0) === "_")
                                        .filter((subchapter) => subchapter.slice(1, chapter.length) === chapter.slice(0, -1))
                                        .map((subchapter, subIndex) => (
                                            <li className="mediummarginbottom halfindention lineheight80percent fontsize0875em">
                                                <Link
                                                    to={chapter.slice(0, -1) + "/" + subchapter.slice(chapter.length + 1)}
                                                    key={"react_" + index + "." + subIndex}>
                                                    {subchapter
                                                        .slice(chapter.length + 1)
                                                        .replaceAll("%20", " ")
                                                        .replaceAll("definieren", "defini\u00EBren")}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
        </>
    );
};

export default Chapter;