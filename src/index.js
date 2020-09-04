import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import ContactList from "./ContactList";

class App extends Component {

    state = {
        contacts: []
    }

    async componentDidMount() {
        let resp = await fetch("/data.json");
        let contacts = await resp.json();
        this.setState({contacts: contacts.contacts})
    }

    render() {
        let footerProps = {
            website: "https://google.com",
            year: new Date().getFullYear(),
            company: "Prayas Group PVT. LTD."
        }

        return <div className="app">
            <AppHeader title="React Application" subtitle="Learning Props"/>
            <ContactList contacts={this.state.contacts}/>
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))