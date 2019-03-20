import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor = making an object, taking data entry to create
  constructor(props){
    super(props)

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  //update functions will take in values and call setState to update state in App.js with the values being passed in

  //setState will merge the object that is passed in with the currentState, it will then call a render when state has finished updating 

  // updateColor
  updateColor(val){
    this.setState({fontColor: val})
  }
  // updateSize
  updateSize(val){
    this.setState({fontSize: val})
  }
  // updateFamily
  updateFamily(val){
    this.setState({fontFamily: val})
  }
  // updateEditStatus
  updateEditStatus(val){
    this.setState({allowEdit: val})
  }

  render() {
    console.log(this)
    return (
      <div>
        <div className="headerBar">
          <EditToggle 
            update={this.updateEditStatus} />
          <ColorChanger 
            update={this.updateColor} 
            allowEdit={this.state.allowEdit}/>
          <SizeChanger 
            update={this.updateSize} 
            allowEdit={this.state.allowEdit}/>
          <FamilyChanger 
            update={this.updateFamily} 
            allowEdit={this.state.allowEdit}/>
        </div>
        
        <div className="textArea">
          <TextContainer 
            fontSize={this.state.fontSize}
            fontColor={this.state.fontColor}
            fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
