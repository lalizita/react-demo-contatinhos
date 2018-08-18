import React, { Component } from 'react';
import './App.css';

class PerfilDoCrush extends Component{
  render(){
    return(
      <div>
        <h3>O contato do crush é:</h3>
        <img width={300} src={this.props.foto}/>
        <h1>{this.props.contato}</h1>
      </div>
    )
  }
}

class Crush extends Component{
  render(){
    return <button onClick={() => this.props.onClick(this.props.whatsapp, this.props.foto)}>{this.props.nome}</button>
  }
}

class Contatinhos extends Component {
  constructor(props){
    super(props)
    this.state={
      whatsapp:'',
      foto:''
    }
  }

  setWhatsAppState = (whatsapp, foto) => {
    this.setState({whatsapp, foto})
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Crush onClick={this.setWhatsAppState} nome="Alisson" whatsapp="98899885" foto="https://cdn.mpasho.co.ke/wp-content/uploads/2018/07/alisson-becker.jpg"/>
        <Crush onClick={this.setWhatsAppState} nome="Cris" whatsapp="954661200" foto="https://ep01.epimg.net/elpais/imagenes/2017/09/04/icon/1504539080_394451_1504539217_noticia_normal.jpg"/>
        <Crush onClick={this.setWhatsAppState} nome="Ronaldo" whatsapp="965455544" foto="https://image.redbull.com/rbcom/052/2017-11-16/1ef33604-7767-4cef-94cb-f31500c63017/0012/0/0/0/640/960/1500/1/ronaldinho.jpg"/>
        <Crush onClick={this.setWhatsAppState} nome="Carlão" whatsapp="988558024" foto="http://2.bp.blogspot.com/_9EQwVWPdVNo/TQpGxwPKg5I/AAAAAAAAABA/YkpY1X_FcQA/s1600/Carlos+daniel+abertura.jpg"/>
        <PerfilDoCrush contato={this.state.whatsapp} foto={this.state.foto}/>
      </div>
    );
  }
}

export default Contatinhos;
