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
                    formErrors.name = "Name is Required"
                } else if (value.length < 3 || value.length > 20) {
                    formErrors.name = "Name should be between 3 to 20 Characters"
                } else {
                    formErrors.name = ""
                }
                break
            case "email" :
                if (value.length === 0 || !value) {
                    formErrors.email = "Email is Required"
                } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    formErrors.email = "Enter Valid Email."
                } else {
                    formErrors.email = ""
                }
                break
            case "phone" :
                if (value.length === 0 || !value) {
                    formErrors.phone = "Phone is Required"
                } else if (!value.match(/^\d{10,12}$/)) {
                    formErrors.phone = "Enter valid Phone Number"
                } else {
                    formErrors.phone = ""
                }
                break
            default:
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
            let {name, phone, email, picture} = this.state
            let contact = {id: Math.random(), name, phone, email, picture}
            this.props.addContact(contact)
            this.setState({
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
            )
        } else {
            let errorMessages = Object.values(formErrors)
                .map((err, index) => <li key={index}>{err}</li>);
            this.setState({errorMessages})
        }

    }

    render() {
        console.log("render is called")
        return <div>
            <form className="form form-component" onSubmit={this.onSubmitHandler}>
                <div className="form-group row ">
                    <label htmlFor="" className="control-label col-md-4">
                        Name
                    </label>
                    <div className="col-md-8 ">
                        <input value={this.state.name} onChange={this.handler} type="text" className="form-control"
                               name={"name"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="control-label col-md-4">
                        Phone Number
                    </label>
                    <div className="col-md-8">
                        <input value={this.state.phone} onChange={this.handler} type="Number" className="form-control"
                               name={"phone"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="control-label col-md-4 ">
                        Email
                    </label>
                    <div className="col-md-8">
                        <input value={this.state.email} onChange={this.handler} type="text" className="form-control"
                               name={"email"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="control-label col-md-4">
                        Picture
                    </label>
                    <div className="col-md-8">
                        <input value={this.state.picture} onChange={this.handler} type="text" className="form-control"
                               name={"picture"}/>
                    </div>
                </div>
                <button onClick={this.onSubmitHandler} className="btn btn-success">Save Data</button>
            </form>
            <ul>
                {this.state.errorMessages}
            </ul>
        </div>

    }
}