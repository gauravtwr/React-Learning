import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import ContactCard from "./ContactCard";

class App extends Component {


    state = {
        contacts: []
    }

    componentDidMount() {
        fetch("/data.json")
            .then(resp => resp.json())
            .then(data => this.setState({contacts: data.contacts}))
            .catch(err => console.log(err))
    }

    render() {
        let footerProps = {
            website: "https://google.com",
            year: new Date().getFullYear(),
            company: "Prayas Group PVT. LTD."
        }
        const contactsCard = this.state.contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>)

        return <div className="app">
            <AppHeader title="React Application" subtitle="Learning Props"/>
            {contactsCard}
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))