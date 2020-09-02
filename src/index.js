import React, {Component} from "react";
import ReactDOM from 'react-dom'
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent"
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    render() {
        let footerProps = {
            website: "https://google.com",
            year: new Date().getFullYear(),
            company: "Prayas Group PVT. LTD."
        }
        return <div className="app">
            <AppHeader title="React Application" subtitle="Learning Props"/>
            <AppContent/>
            <AppFooter{...footerProps}/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))