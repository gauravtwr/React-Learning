import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import ContactList from "./ContactList";
import FormComponent from "./FormComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import ContactDetails from "./ContactDetails";

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

    getByID = (id) => {
        let {contacts} = this.state
        let index = contacts.findIndex(contact => contact.id === id)
        console.log(index)
        return contacts[index]
    }

    render() {
        let footerProps = {
            website: "https://google.com",
            year: new Date().getFullYear(),
            company: "Prayas Group PVT. LTD."
        }

        return <div className="app">
            <Router>
                <AppHeader title="React Application" subtitle="Learning Props"/>
                <div className="row ">
                    <div className={"col-md-3"}>
                        <ul className={"list-group"}>
                            <li className={"list-group-item"}>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className={"list-group-item"}>
                                <Link to={"/add-new-contact"}>Add Contact</Link>
                            </li>
                            <li className={"list-group-item"}>
                                <Link to={"/all-contacts"}>Show All Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={"col-md-9"}>
                        <Route exact={true} path={"/"} component={HomeComponent}/>
                        <Route path={"/add-new-contact"}
                               component={() => <FormComponent addContact={this.addContact}/>}/>
                        <Route path={"/all-contacts"} component={() => <ContactList contacts={this.state.contacts}
                                                                                    deleteContact={this.deleteContact}/>}/>
                        <Route path={`/contact-details/:id`} exact={true}
                               component={(props) => <ContactDetails {...props} getByID={this.getByID}/>}/>
                    </div>
                </div>
            </Router>
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))