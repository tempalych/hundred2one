import {team2Constants} from '../actions/team2Actions'

const initialState = {
    name: "Команда 2",
    nameUpdating: false
}

export function team2Reducer(state=initialState, action){
    console.log("teamReducer action:"+action.type+"; payload: "+action.payload)
    switch (action.type){
        case team2Constants.SET_NAME2:
            return {...state, name: action.payload}
        case team2Constants.SET_NAME_UPDATING2:
            return {...state, nameUpdating: action.payload}
        default:
            return state
    }
}