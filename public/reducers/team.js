import {teamConstants} from '../actions/teamActions'

const initialState = {
    name: "Команда 1",
    nameUpdating: false
}

export function teamReducer(state=initialState, action){
    console.log("teamReducer action:"+action.type+"; payload: "+action.payload)
    switch (action.type){
        case teamConstants.SET_NAME:
            return {...state, name: action.payload}
        case teamConstants.SET_NAME_UPDATING:
            return {...state, nameUpdating: action.payload}
        default:
            return state
    }
}