import React, {Component} from "react";
import './error-boundry.css'
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        console.log(this.props);
        return this.props.children;
    }
}