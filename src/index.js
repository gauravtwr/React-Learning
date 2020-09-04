import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import ContactCard from "./ContactCard";

class App extends Component {

    render() {
        let footerProps = {
            website: "https://google.com",
            year: new Date().getFullYear(),
            company: "Prayas Group PVT. LTD."
        }
        
        const contacts = [
            {
                "id": 1,
                "name": "Prayas Jain",
                "gender": "Male",
                "email": "p.jain3322@gmail.com",
                "phone": "9718495185",
                "picture": "https://avatars3.githubusercontent.com/u/21375373?s=460&u=16334b1fcf1ca2f32e95efbe8fbfd6fe0febdc55&v=4"
            },
            {
                "id": 2,
                "name": "Prayas Jain",
                "gender": "Male",
                "email": "p.jain3322@gmail.com",
                "phone": "9718495185",
                "picture": "https://avatars3.githubusercontent.com/u/21375373?s=460&u=16334b1fcf1ca2f32e95efbe8fbfd6fe0febdc55&v=4"
            },

            {
                "id": 3,
                "name": "Prayas Jain",
                "gender": "Male",
                "email": "p.jain3322@gmail.com",
                "phone": "9718495185",
                "picture": "https://avatars3.githubusercontent.com/u/21375373?s=460&u=16334b1fcf1ca2f32e95efbe8fbfd6fe0febdc55&v=4"
            },

            {
                "id": 4,
                "name": "Prayas Jain",
                "gender": "Male",
                "email": "p.jain3322@gmail.com",
                "phone": "9718495185",
                "picture": "https://avatars3.githubusercontent.com/u/21375373?s=460&u=16334b1fcf1ca2f32e95efbe8fbfd6fe0febdc55&v=4"
            },
        ]
        const contactsCard = contacts.map((contact) => <ContactCard key={contact.id} contact={contact}/>)

        return <div className="app">
            <AppHeader title="React Application" subtitle="Learning Props"/>
            {contactsCard}
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))