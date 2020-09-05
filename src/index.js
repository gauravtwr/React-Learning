import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import ContactList from "./ContactList";
import FormComponent from "./FormComponent";

class App extends Component {

    state = {
        contacts: []
    }

    async componentDidMount() {
        let resp = await fetch("/data.json");
        let contacts = await resp.json();
        this.setState({contacts: contacts.contacts})
    }

    addContact = (contact) => {
        let {contacts} = this.state
        contacts.unshift(contact)
        this.setState({contacts})
    }

    deleteContact = (contactId) => {
        let {contacts} = this.state
        let index = contacts.findIndex(c => (c.id === contactId))
        if (index !== -1) {
            contacts.splice(index, 1)
        }
        this.setState({contacts})
    }

    render() {
        let footerProps = {
            website: "https://google.com",
            year: new Date().getFullYear(),
            company: "Prayas Group PVT. LTD."
        }

        return <div className="app">
            <AppHeader title="React Application" subtitle="Learning Props"/>

            <div className={"row"}>
                <div className={"col"}>
                    <FormComponent addContact={this.addContact}/>
                </div>
                <div className={"col"}>
                    <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact}/>
                </div>
            </div>
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))