import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
export default class Pokedex extends Component {

    
  render() {
    
    return (
      <div className='Pokedex'>
     <h1>Total Experience: {this.props.exp}</h1>
     <h2 className={this.props.isWinner?'Pokedex-winner':'Pokedex-loser'}>
       {this.props.isWinner?'WINNER!':'LOSER'}</h2>
        <div className="Pokedex-cards">
         
        {this.props.pokemon.map((p)=>{
          if(p.id>0 && p.id<10){
            p.id="00"+p.id;
          }else if(p.id>9 && p.id<100){
            p.id="0"+p.id;
          }
           return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>

        })}
        </div>
      </div>
    )
  }
}
