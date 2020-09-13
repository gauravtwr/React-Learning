import {addContact} from "./actions/contactAction";
import {connect} from "react-redux";
import FormComponent from "./FormComponent";

const mapDispatchToProps = dispatch => ({
    addContact: contact => addContact(contact)(dispatch)
})

export default connect(null, mapDispatchToProps)(FormComponent)