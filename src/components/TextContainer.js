import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    console.log('heeereee', this.props)
    let styles = {
      color: this.props.fontColor,
      fontSize: this.props.fontSize,
      fontFamily: this.props.fontFamily,
    }
    return (
      <div className="textContainer">
        <textarea 
          style={styles}
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}

//if a class inside of component, need to call this.props, if not a class can use props.... without this




