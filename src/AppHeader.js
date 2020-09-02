import React, {Component, Fragment} from "react";

export default class AppHeader extends Component {
    render() {
        return <Fragment>
            <h1>
                <center>{this.props.title}.</center>
            </h1>
            <p>{this.props.subtitle}</p>
            <hr/>
        </Fragment>
    }
}