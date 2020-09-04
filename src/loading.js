import React, {Component} from "react";

export default function loading(OldComponent) {
    return class NewComponent extends Component {
        render() {
            let output = <OldComponent {...this.props}/>
            if (this.props.contacts.length === 0) {
                output = <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" disabled>
                        <span className="spinner-border spinner-border-sm"></span>
                        Loading..
                    </button>
                </div>
            }
            return output
        }
    }
}