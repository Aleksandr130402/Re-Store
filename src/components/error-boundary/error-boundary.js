import React, { Component } from "react";



export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }
    

    render() {
        if (hasError) {
            return <h3>Something has gone wrong!</h3>
        }
        return this.props.children
    }
}