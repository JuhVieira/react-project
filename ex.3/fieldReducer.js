const INITIAL_STATE = {value: 'Opa'}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUA_CHANGED':
            return {value: action.payload}
        default:
            return state
    }
}