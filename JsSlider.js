import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state={txt:''};
    this.state={
      red:0,
      green:0,
      blue:0
    };
    this.update=this.update.bind(this);
  }
  update(e){
    this.setState({
      red:ReactDOM.findDOMNode(this.refs.red),
      green:ReactDOM.findDOMNode(this.refs.green),
      blue:ReactDOM.findDOMNode(this.refs.blue),
    });
  }

  render(){
    return (
      <div>
      {this.state.txt}
      <hr />
      <Slider ref="red" update={this.update} />
      {this.state.red}
      <br />
      <Slider ref="green" update={this.update}/>
      {this.state.green}
      <br />
      <Slider ref="blue" update={this.update}/>
      {this.state.blue}
      <br />
      </div>
    );
  }
}

class Slider extends React.Component {
  render(){
    return (
      <input type="range" min="0" max="255" onChange={this.props.update}/>
    );
  }
}
