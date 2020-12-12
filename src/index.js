import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/Primeiro";
import Card from "./layout/Card";
import Parametros from "./components/Parametros";
import Loop from "./components/Loop";
import Condicional from "./components/Condicional";
import Parent from "./components/Parent";
import Super from "./components/Super";
import Input from "./form/Input";
import Contador from "./contador/Contador";
import Mega from "./megasena/Mega";
import Footer from './components/Footer';

ReactDOM.render(
    <div>
        <h1>React Fundamentos</h1>
        <div className="card-box">
            <Card footer="Simple Component" color="#61A6B3">
                <Primeiro></Primeiro>
            </Card>
            <Card footer="Parametres with React" color="#ab9556">
                <Parametros
                    title="JSX language"
                    subtitle="Code in web"
                ></Parametros>
            </Card>
            <Card footer="Parametres with React" color="#1c3946">
                <Loop></Loop>
            </Card>
            <Card footer="Condicional Code" color="#f05d5f" number={11}>
                <Condicional></Condicional>
            </Card>
            <Card footer="Direct communication" color="#01a89c">
                <Parent></Parent>
            </Card>
            <Card footer="Indirect communication" color="#3f95f1">
                <Super></Super>
            </Card>
            <Card footer="Controlled component" color="#ee1b52">
                <Input></Input>
            </Card>
            <Card footer="Contador" color="#5b006b">
                <Contador step={10} value={2}></Contador>
            </Card>
            <Card footer="Megasena" color="#5b2307">
                <Mega numberFields={15}></Mega>
            </Card>
        </div>
            <Footer></Footer>
    </div>,
    document.getElementById("root")
);
