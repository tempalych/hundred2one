export const team2Constants = {
    SET_NAME2: 'SET_NAME2',
    SET_NAME_UPDATING2: 'SET_NAME_UPDATING2'
}

export function setName(name){
    return {
        type: team2Constants.SET_NAME2,
        payload: name
    }
}

export function setNameUpdating(value){
    return{
        type: team2Constants.SET_NAME_UPDATING2,
        payload: value
    }
}