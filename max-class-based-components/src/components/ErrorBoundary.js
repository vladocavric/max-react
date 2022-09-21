import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <p>There is some error</p>
        }

        return this.props.children
    }
}

export default ErrorBoundary