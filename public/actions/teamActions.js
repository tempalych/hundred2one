export const teamConstants = {
    SET_NAME: 'SET_NAME',
    SET_NAME_UPDATING: 'SET_NAME_UPDATING'
}

export function setName(name){
    return {
        type: teamConstants.SET_NAME,
        payload: name
    }
}

export function setNameUpdating(value){
    return{
        type: teamConstants.SET_NAME_UPDATING,
        payload: value
    }
}