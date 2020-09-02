import React, {Component} from "react";

export default class FormComponent extends Component {

    state = {
        name: "",
        phone: "",
        email: "",
        picture: ""
    }

    handler = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }

    render() {
        return <div>
            <div className={"row"}>
                <div className={"col"}>
                    <form className="form form-component" onSubmit={this.addNewContact}>
                        <div className="form-group row ">
                            <label htmlFor="" className="control-label col-md-4">
                                Name
                            </label>
                            <div className="col-md-8 ">
                                <input onChange={this.handler} type="text" className="form-control" name={"name"}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Phone Number
                            </label>
                            <div className="col-md-8">
                                <input onChange={this.handler} type="text" className="form-control" name={"phone"}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4 ">
                                Email
                            </label>
                            <div className="col-md-8">
                                <input onChange={this.handler} type="text" className="form-control" name={"email"}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Picture
                            </label>
                            <div className="col-md-8">
                                <input onChange={this.handler} type="text" className="form-control" name={"picture"}/>
                            </div>
                        </div>
                        <button className="btn btn-success">Save Data</button>
                    </form>
                </div>
                <div className={"col"}>
                    <h3>Current State</h3>
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>
                </div>
            </div>
        </div>

    }
}