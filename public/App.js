import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Team} from './components/team'
import {Team2} from './components/team2'
import {Game} from './components/game'
import * as teamActions from './actions/teamActions'
import * as team2Actions from './actions/team2Actions'
import * as gameActions from './actions/gameActions'
import './containers/App.css'

class App extends Component {
    render() {
        const {team, team2, game} = this.props
        const {setName, setNameUpdating} = this.props.teamActions
        const {setShow, setPointsCount, pointsToLeft, pointsToRight, setGameType} = this.props.gameActions
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">100 к 1</h1>
                </header> 
                <table className = "table-teams">
                    <tbody>
                        <tr>
                            <td className = "td-team">
                                <div>
                                    <Team
                                        key="t1"
                                        name = {team.name}
                                        nameUpdating = {team.nameUpdating}
                                        setName = {setName}
                                        setNameUpdating = {setNameUpdating}
                                    />
                                </div>
                            </td>
                            <td className = "td-vs">
                                vs
                            </td>
                            <td className = "td-team">
                                <div>
                                    <Team2
                                        key="t1"
                                        name = {team2.name}
                                        nameUpdating = {team2.nameUpdating}
                                        setName = {this.props.team2Actions.setName}
                                        setNameUpdating = {this.props.team2Actions.setNameUpdating}
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className = "table-game">
                    <tbody>
                        <tr>
                            <td>
                                <Game 
                                    question = {game.question}
                                    answers = {game.answers}
                                    pointsCount = {game.pointsCount}
                                    modifier = {game.modifier}
                                    pointsTeamLeft = {game.pointsTeamLeft}
                                    pointsTeamRight = {game.pointsTeamRight}
                                    gameType = {game.gameType}
                                    setShow = {setShow}
                                    setPointsCount = {setPointsCount}
                                    pointsToLeft = {pointsToLeft}
                                    pointsToRight = {pointsToRight}
                                    setGameType = {setGameType}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        team: store.team,
        team2: store.team2,
        game: store.game
    }
}

const mapDispatchToProps = dispatch => {
    return{
        teamActions: bindActionCreators(teamActions, dispatch),
        team2Actions: bindActionCreators(team2Actions, dispatch),
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)