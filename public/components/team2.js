import React from 'react'
import PropTypes from 'prop-types'

export class Team2 extends React.Component {
    onNameEnter = e => {
        if (e.key === "Enter") {
            const name = e.target.value
            this.props.setName(name)
            this.props.setNameUpdating(false)
        }
    }

    onNameClick = e => {
        this.props.setNameUpdating(true)
    }

    render() {
        const {name, nameUpdating} = this.props
        if (nameUpdating === false){
            return (
                <div onClick={this.onNameClick}>
                    {name}
                </div>
            )
        } else{
            return (
                <div>
                    <input
                        className="input-team-name"
                        type="text" 
                        defaultValue={name} 
                        onKeyPress = {this.onNameEnter} 
                        autoFocus={true}
                    />
                </div>
            )
        }
    }
}

Team2.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setNameUpdating: PropTypes.func.isRequired
}