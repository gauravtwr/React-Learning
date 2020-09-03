import React, {Component} from "react";

export default class FormComponent extends Component {

    state = {
        name: "",
        phone: "",
        email: "",
        picture: "",
        formErrors: {
            name: "Name is Required",
            phone: "Phone is Required",
            email: "Email is Required",
        },
        errorMessages: ""
    }

    handler = (event) => {
        let {name, value} = event.target
        let {formErrors} = this.state

        switch (name) {
            case "name" :
                if (value.length === 0 || !value) {
                    this.state.formErrors.name = "Name is Required"
                } else if (value.length < 3 || value.length > 20) {
                    this.state.formErrors.name = "Name should be between 3 to 20 Characters"
                } else {
                    this.state.formErrors.name = ""
                }
                break
            case "email" :
                if (value.length === 0 || !value) {
                    this.state.formErrors.email = "Email is Required"
                } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    this.state.formErrors.email = "Enter Valid Email."
                } else {
                    this.state.formErrors.email = ""
                }
                break
            case "phone" :
                if (value.length === 0 || !value) {
                    this.state.formErrors.phone = "Phone is Required"
                } else if (!value.match(/^\d{10,12}$/)) {
                    this.state.formErrors.phone = "Enter valid Phone Number"
                } else {
                    this.state.formErrors.phone = ""
                }
                break
        }

        this.setState({[name]: value, formErrors})
    }

    isValid = (formErrors) => {
        let valid = true
        Object.values(formErrors).forEach(err => valid = valid && err.length === 0)
        return valid
    }


    onSubmitHandler = (event) => {
        event.preventDefault()
        let {formErrors} = this.state
        if (this.isValid(formErrors)) {
            alert("Everything is OK")
        } else {
            let errorMessages = Object.values(formErrors)
                .map((err, index) => <li key={index}>{err}</li>);
            this.setState({errorMessages})
        }

    }

    render() {
        return <div>
            <div className={"row"}>
                <div className={"col"}>
                    <form className="form form-component" onSubmit={this.onSubmitHandler}>
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
                                <input onChange={this.handler} type="Number" className="form-control" name={"phone"}/>
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
                    <ul>
                        {this.state.errorMessages}
                    </ul>
                </div>
                <div className={"col"}>
                    <h3>Current State</h3>
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>
                </div>
            </div>
        </div>

    }
}