import {ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT} from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            let contacts = state
            let newId = 1;
            if (contacts.length > 0) {
                newId = Math.max(...contacts.map(contact => contact.id)) + 1
            }
            action.data.id = newId
            return [...contacts,...[action.data]]
        }
        case FETCH_CONTACT:
            return action.data
        case DELETE_CONTACT: {
            let contacts = state
            let index = contacts.findIndex((contact) => contact.id === action.data)
            if (index !== -1) {
                contacts.splice(index, 1)
            }
            return [...contacts]
        }
        default:
            return state
    }
}