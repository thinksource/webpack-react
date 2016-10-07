class Jswidget extends React.Component{
  constructor(){
    super();
    this.state ={txt: ''};
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({txt: e.target.value});
  }
  render(){
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update}/>
      </div>
    );
  }
}

const Widget=(props)=>{
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h1>{this.state.txt}</h1>
    </div>
  );
}

export default JsWidget;
