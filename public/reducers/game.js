import {gameConstants} from '../actions/gameActions'

var question1="Что мужчина делает утром?"
var answers1=[
    {
        text: "Завтракает",
        points: 36,
        show: false
    },{
        text: "Бреется",
        points: 24,
        show: false
    },{
        text: "Принимает душ",
        points: 18,
        show: false
    }
    ,{
        text: "Едет на работу",
        points: 14,
        show: false
    }
    ,{
        text: "Дрочит",
        points: 6,
        show: false
    }
    ,{
        text: "Спит",
        points: 2,
        show: false
    }
]

var question2="Как различают близнецов?"
var answers2=[
    {
        text: "Имя",
        points: 30,
        show: false
    },{
        text: "Запах",
        points: 26,
        show: false
    },{
        text: "Одежда",
        points: 18,
        show: false
    }
    ,{
        text: "Характер",
        points: 16,
        show: false
    }
    ,{
        text: "Голос",
        points: 8,
        show: false
    }
    ,{
        text: "Шляпа",
        points: 2,
        show: false
    }
]

var question3="С какой птицей часто сравнивают человека?"
var answers3=[
    {
        text: "Дятел",
        points: 28,
        show: false
    },{
        text: "Орел",
        points: 26,
        show: false
    },{
        text: "Петух",
        points: 20,
        show: false
    }
    ,{
        text: "Гусь",
        points: 16,
        show: false
    }
    ,{
        text: "Индюк",
        points: 6,
        show: false
    }
    ,{
        text: "Ворона",
        points: 4,
        show: false
    }
]

var question4="Какая карточная игра самая популярная?"
var answers4=[
    {
        text: "Дурак",
        points: 15,
        show: false
    },{
        text: "Покер",
        points: 30,
        show: false
    },{
        text: "Очко",
        points: 60,
        show: false
    }
    ,{
        text: "Пасьянс",
        points: 120,
        show: false
    }
    ,{
        text: "Мафия",
        points: 180,
        show: false
    }
    ,{
        text: "Преферанс",
        points: 240,
        show: false
    }
]

var question5="Какая карточная игра самая популярная?"
var answers5=[
    {
        text: "Дурак",
        points: 37,
        show: false
    },{
        text: "Покер",
        points: 24,
        show: false
    },{
        text: "Очко",
        points: 17,
        show: false
    }
    ,{
        text: "Пасьянс",
        points: 15,
        show: false
    }
    ,{
        text: "Мафия",
        points: 6,
        show: false
    }
    ,{
        text: "Преферанс",
        points: 1,
        show: false
    }
]

const initialState = {
    question: question1,
    pointsCount: 0,
    pointsTeamLeft: 0,
    pointsTeamRight: 0,
    modifier: 1,
    gameType: 1,
    answers:answers1
}


export function gameReducer(state=initialState, action){
    switch (action.type){
        case gameConstants.SET_SHOW:
            return {...state, answers: state.answers.map(answer => answer.text === action.text ?
                { ...answer, show: action.payload } : 
                answer
            ) }
        case gameConstants.SET_POINTS_COUNT:
                return{...state, pointsCount: state.pointsCount + state.modifier * action.payload}
        case gameConstants.POINTS_TO_LEFT:
                return {...state, pointsTeamLeft: state.pointsTeamLeft + state.pointsCount, pointsCount:0}
        case gameConstants.POINTS_TO_RIGHT:
                return {...state, pointsTeamRight: state.pointsTeamRight + state.pointsCount, pointsCount:0}
        case gameConstants.SET_GAME_TYPE:
                return {...state, gameType: action.payload,
                     modifier: (action.payload === 4 || action.payload === 5) ? 1 : action.payload,
                     pointsCount: 0,
                     question: action.payload === 1 ? question1 : 
                               action.payload === 2 ? question2 :
                               action.payload === 3 ? question3 :
                               action.payload === 4 ? question4 :
                                                      question5,
                     answers: action.payload === 1 ? answers1 :
                              action.payload === 2 ? answers2 : 
                              action.payload === 3 ? answers3 : 
                              action.payload === 4 ? answers4 :
                                                     answers5 
                    }
        default:
            return state
    }
}