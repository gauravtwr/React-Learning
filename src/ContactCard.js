import React, {Component} from "react";
import "./css/contactCard.css"

export default class ContactCard extends Component {
    render() {
        return <div className="card card-dimen">
            <div className={"row"}>
                <div className="col-md-4">
                    <img src={this.props.contact.picture} className="card-img image-dimen" alt="user_image"/>
                </div>
                <div className="col-md-8">
                    <div className={"card-body"}>
                        <h3 className={"card-title"}>{this.props.contact.name}</h3>
                        <div className={"card-text"}>{this.props.contact.email}</div>
                        <div className={"card-text"}>{this.props.contact.phone}</div>
                        <div className={"card-text"}>{this.props.contact.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    }
}