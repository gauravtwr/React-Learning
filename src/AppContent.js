import React, {Component} from "react";
import './css/appContent.css'

export default class AppContent extends Component {

    state = {num: 0}

    incrementOrDecrement = (incVal) => {
            this.setState({num: this.state.num + incVal})
    }

    render() {
        return <div className='app-content'>
            <h3>This is content Area</h3>
            <CustomButton caption={"Increment"} handler={() => this.incrementOrDecrement(1)}/>
            <CustomButton caption={"Decrement"} handler={() => this.incrementOrDecrement(-1)}/>
            <h3>The value of counter is : {this.state.num}</h3>
        </div>
    }
}

const CustomButton = ({handler, caption}) => (
    <button onClick={handler} className="btn btn-primary">{caption}</button>
)