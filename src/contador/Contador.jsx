import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import StepForm from "./StepForm";
import ButtonGroup from './ButtonGroup';

export default class Contador extends Component {
    state = {
        step: this.props.step || 1,
        value: this.props.value || 0,
    };

    inc = () => {
        return this.setState({
            value: this.state.value + this.state.step,
        });
    };

    dec = () => {
        return this.setState({
            value: this.state.value - this.state.step,
        });
    };

    onChangeStepForm = (newValue) => {
        this.setState({step: newValue})
    };

    render() {
        return (
            <div>
                <Display value={this.state.value}></Display>
                <StepForm passo={this.state.step} changeStepForm={this.onChangeStepForm}></StepForm>
                <ButtonGroup inc={this.inc} dec={this.dec}></ButtonGroup>
            </div>
        );
    }
}
