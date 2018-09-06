import React, { Component } from 'react'

class QuizQuestionButton extends Component {

    render() {
        return <button onClick={this.handleClick.bind(this)}>
            {this.props.button_text}
        </button>
    }

    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
}

export default QuizQuestionButton