import {deleteContact} from "./actions/contactAction";
import {connect} from "react-redux";
import ContactList from "./ContactList";

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    deleteContact: id => deleteContact(id)(dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList)