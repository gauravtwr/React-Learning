import React, {Component} from "react";

export default class ContactDetails extends Component {
    render() {
        let {id} = this.props.match.params
        let selectedUserDetail = this.props.getByID(parseInt(id));
        if (selectedUserDetail !== undefined) {
            console.log(selectedUserDetail)
        }
        return <div>
            <h3> Details of the selected Contact</h3>
            <div className="row">
                <div className={"col-md-4"}>
                    <img src={selectedUserDetail.picture} alt={selectedUserDetail.name}/>
                </div>
                <div className={"col-md-7"}>
                    <table className="table table-bordered">
                        <tr>
                            <th>Name</th>
                            <td>{selectedUserDetail.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{selectedUserDetail.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{selectedUserDetail.phone}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    }
}