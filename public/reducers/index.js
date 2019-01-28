import {combineReducers} from 'redux'
import {teamReducer} from './team'
import {team2Reducer} from './team2'
import {gameReducer} from './game'

export const rootReducer = combineReducers({
    team: teamReducer,
    team2: team2Reducer,
    game: gameReducer
})