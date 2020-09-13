import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppFooter from "./AppFooter";
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from "react-redux";
import {createStore} from "redux"
import rootReducer from "./reducer/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import FormComponentContainer from "./FormComponentContainer";
import ContactListContainer from "./ContactListContainer";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import AppHeader from "./AppHeader";
import ContactDetails from "./ContactDetails";
import HomeComponent from "./HomeComponent";

const store = createStore(rootReducer, composeWithDevTools())

class App extends Component {

    state = {
        contacts: []
    }

    async componentDidMount() {
        let resp = await fetch("/data.json");
        let contacts = await resp.json();
        this.setState({contacts: contacts.contacts})
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
            <AppHeader title="React Application" subtitle="Learning Props"/>
            <Router>
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
                        <Route path={"/add-new-contact"} component={() => <FormComponentContainer/>}/>
                        <Route path={"/all-contacts"} component={() => <ContactListContainer/>}/>
                        <Route path={`/contact-details/:id`} exact={true}
                               component={(props) => <ContactDetails {...props} getByID={this.getByID}/>}/>
                    </div>
                </div>
            </Router>
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))