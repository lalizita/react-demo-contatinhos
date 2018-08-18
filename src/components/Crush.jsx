import React, {Component} from 'react'

class Crush extends Component{
    render(){
        const {olhos, altura, cilios} = this.props
      // return <button onClick={() => this.props.onClick(this.props.whatsapp)}>{this.props.nome}</button>
      return (
          <div>
              <h3>props do crush</h3>
              <h3>{olhos}</h3>
              <h3>{altura}</h3>
              <h3>{cilios}</h3>
          </div>
      )
    }
  }

export default Crush