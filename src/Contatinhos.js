import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContatoDoCrush extends Component{
  render(){
    return(
      <div>
        <h3>O contato do crush é:</h3>
        <h1>{this.props.contato}</h1>
      </div>
    )
  }
}

class Crush extends Component{
  render(){
    return <button onClick={() => this.props.onClick(this.props.whatsapp)}>{this.props.nome}</button>
  }
}

class Contatinhos extends Component {
  constructor(props){
    super(props)
    this.state={
      whatsapp:''
    }
  }

  setWhatsAppState = whatsapp => {
    this.setState({whatsapp})
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <ContatoDoCrush contato={this.state.whatsapp}/>
        <Crush onClick={this.setWhatsAppState} nome="Rafael" whatsapp="98899885"/>
        <Crush onClick={this.setWhatsAppState} nome="Brunão" whatsapp="954661200"/>
        <Crush onClick={this.setWhatsAppState} nome="Ronaldo" whatsapp="965455544"/>
        <Crush onClick={this.setWhatsAppState} nome="Fernandão" whatsapp="988558024"/>
      </div>
    );
  }
}

export default Contatinhos;
