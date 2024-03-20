import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Components/_Layout";
import Home from "./Components/React/Home";
import DataTypes from "./Components/JavaScript/DataTypes";
import Boolean from "./Components/JavaScript/DataTypes_Boolean";
import Commentaar from "./Components/JavaScript/Commentaar";
import Operatoren from "./Components/JavaScript/Operatoren";
import Variabelen from "./Components/JavaScript/Variabelen";
import Functies from "./Components/JavaScript/Functies";
import IfElse from "./Components/JavaScript/IfElse";
import ForLoop from "./Components/JavaScript/ForLoop";
import WhileLoop from "./Components/JavaScript/WhileLoop";
import Switch from "./Components/JavaScript/Switch";

import Intro from "./Components/React/Intro";
import Componenten from "./Components/React/componenten/Componenten";
import Componenten1 from "./Components/React/componenten/Componenten1";
import Componenten2 from "./Components/React/componenten/Componenten2";
import Componenten3 from "./Components/React/componenten/Componenten3";
import Componenten4 from "./Components/React/componenten/Componenten4";
import Afbeeldingen from "./Components/React/Afbeeldingen";
import RouterComponent from "./Components/React/router/Router";
import HomeRouter from "./Components/React/router/pages/Home";
import Blogs from "./Components/React/router/pages/Blogs";
import Contact from "./Components/React/router/pages/Contact";
import NoPage from "./Components/React/router/pages/NoPage";
import Props from "./Components/React/props/Props";
import Props1 from "./Components/React/props/props1/Props1";
import Props2 from "./Components/React/props/props2/Props2";
import Props3 from "./Components/React/props/props3/Props3";
import Props4 from "./Components/React/props/props4/Props4";
import UseState from "./Components/React/useState/UseState";
import UseState1 from "./Components/React/useState/UseState1"
import UseState2 from "./Components/React/useState/UseState2";
import UseState3 from "./Components/React/useState/UseState3";
import UseState4 from "./Components/React/useState/UseState4";
import UseState5 from "./Components/React/useState/UseState5";
import UseState6 from "./Components/React/useState/UseState6";
import UseState7 from "./Components/React/useState/UseState7";
import Centreren from "./Components/React/Centreren";
import Formulieren from "./Components/React/Formulieren";

import './styles.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="data types" element={<DataTypes />} >
                        <Route path="data types/boolean" element={<Boolean />} />
                    </Route>
                    <Route path="commentaar" element={<Commentaar />} />
                    <Route path="operatoren" element={<Operatoren />} />
                    <Route path="variabelen" element={<Variabelen />} />
                    <Route path="functies" element={<Functies />} />
                    <Route path="if else" element={<IfElse />} />
                    <Route path="for loop" element={<ForLoop />} />
                    <Route path="while loop" element={<WhileLoop />} />
                    <Route path="switch" element={<Switch />} />

                    <Route path="intro" element={<Intro />} />
                    <Route path="componenten" element={<Componenten />} />
                    <Route path="componenten/geen componenten" element={<Componenten1 />} />
                    <Route path="componenten/eenvoudige component" element={<Componenten2 />} />
                    <Route path="componenten/importeren" element={<Componenten3 />} />
                    <Route path="componenten/met props" element={<Componenten4 />} />
                    <Route path="afbeeldingen" element={<Afbeeldingen />} />
                    <Route path="router" element={<RouterComponent />} >
                        <Route path="home" element={<HomeRouter />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                    <Route path="props" element={<Props />} />
                    <Route path="props/geen props" element={<Props1 />} />
                    <Route path="props/vaste waarde" element={<Props2 />} />
                    <Route path="props/variabele waarde" element={<Props3 />} />
                    <Route path="props/samengevoegd" element={<Props4 />} />
                    <Route path="usestate" element={<UseState />} />
                    <Route path="usestate/eenmalige update" element={<UseState1 />} />
                    <Route path="usestate/meermalige update" element={<UseState2 />} />
                    <Route path="usestate/callback-functie" element={<UseState3 />} />
                    <Route path="usestate/boolean" element={<UseState4 />} />
                    <Route path="usestate/array" element={<UseState5 />} />
                    <Route path="usestate/object zonder update" element={<UseState6 />} />
                    <Route path="usestate/object met update" element={<UseState7 />} />
                    <Route path="formulieren" element={<Formulieren />} />
                    <Route path="centreren" element={<Centreren />} />
                </Route>
            </Routes>
        </Router >
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);