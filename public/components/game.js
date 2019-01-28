import React from 'react'
import PropTypes from 'prop-types'

export class Game extends React.Component{
    handleShow = (text, points) => {
        this.props.setShow(text, true)
        this.props.setPointsCount(points)
    }

    onBtnLeftClick = e =>{
        this.props.pointsToLeft()
    }
    onBtnRightClick = e =>{
        this.props.pointsToRight()
    }

    onGameTypeClick = (type) =>{
        this.props.setGameType(type)
    }

    render(){
        const {question, answers, modifier, pointsCount, pointsTeamLeft, pointsTeamRight, gameType} = this.props
        var showAnswers = answers.map(answer => {
        if (answer.show === true){
                return (<div className="answer"
                            key={answer.text}
                        >
                            {answer.text + " " + answer.points}
                        </div>)
            }else {
                return (<div className="answer"
                            key={answer.text} 
                            onClick = {() => this.handleShow(answer.text, answer.points)}
                        >
                            ***
                        </div>)
            }
        })

        return(
            <div>
                <table className="table-game-types">
                    <tbody>
                        <tr>
                            <td className={this.props.gameType === 1 ? "td-game-type-selected" : "td-game-type-unselected"}
                                onClick={() => this.onGameTypeClick(1)}
                            >x1</td>
                            <td className={this.props.gameType === 2 ? "td-game-type-selected" : "td-game-type-unselected"}
                                onClick={() => this.onGameTypeClick(2)}
                            >x2</td>
                            <td className={this.props.gameType === 3 ? "td-game-type-selected" : "td-game-type-unselected"}
                                onClick={() => this.onGameTypeClick(3)}
                            >x3</td>
                            <td className={this.props.gameType === 4 ? "td-game-type-selected" : "td-game-type-unselected"}
                                onClick={() => this.onGameTypeClick(4)}
                            >&#8596;</td>
                            {/*<td className={this.props.gameType === 5 ? "td-game-type-selected" : "td-game-type-unselected"}
                                onClick={() => this.onGameTypeClick(5)}
        >XX</td>*/}
                        </tr>
                    </tbody>
                </table>
                <div>
                <table className="table-game">
                    <tbody>
                        <tr>
                            <td className="td-points-team">
                                {pointsTeamLeft}
                            </td>
                            <td className="td-arrow-left">
                                <div onClick={this.onBtnLeftClick}>&larr;</div>
                            </td>
                            <td className="td-points-total">
                                {pointsCount}
                            </td>
                            <td className="td-arrow-right">
                                <div onClick={this.onBtnRightClick}>&rarr;</div>
                            </td>
                            <td className="td-points-team">
                                {pointsTeamRight}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="question">
                    {question}
                </div>
                {showAnswers}
            </div>
        )
    }
}

Game.propTypes = {
    question: PropTypes.string.isRequired,
    //handleShow: PropTypes.func.isRequired
}

