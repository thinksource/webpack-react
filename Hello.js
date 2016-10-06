import React from 'react';
class Hello extends React.Component {
  render(){
    return (
      <div>
      <h1>{this.props.txt}</h1>
      <b>Bold</b>
      </div>
    );
  }
};
export default Hello
