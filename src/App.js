import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Hiring from "./hiring/Hiring";
import MyWork from "./MyWork/MyWork";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <Hiring/>

        </div>
    );
}

export default App;
