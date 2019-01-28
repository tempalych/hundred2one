export const gameConstants = {
    SET_SHOW: 'SET_SHOW',
    SET_POINTS_COUNT: 'SET_POINTS_COUNT',
    POINTS_TO_LEFT: 'POINTS_TO_LEFT:',
    POINTS_TO_RIGHT: 'POINTS_TO_RIGHT',
    SET_GAME_TYPE: 'SET_GAME_TYPE',
}

export function setShow(text, show){
    return {
        type: gameConstants.SET_SHOW,
        text: text,
        payload: show
    }
}

export function setPointsCount(points){
    return {
        type: gameConstants.SET_POINTS_COUNT,
        payload: points
    }
}

export function pointsToLeft(points){
    return {
        type: gameConstants.POINTS_TO_LEFT,
        payload: points
    }
}

export function pointsToRight(points){
    return {
        type: gameConstants.POINTS_TO_RIGHT,
        payload: points
    }
}

export function setGameType(gametype){
    return{
        type: gameConstants.SET_GAME_TYPE,
        payload: gametype
    }
}