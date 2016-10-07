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

Hello.propTypes ={
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

Hello.defaultProps={
  txt: 'this is the default';
}
export default Hello
