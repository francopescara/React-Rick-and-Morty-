import React, { Component } from 'react'
import RickAndMortyServices from '../../services/RickAndMorty.services';
import Cards from './Cards'

export default class Main extends Component {
  constructor(props){
   super(props);
   this.state={mascotas:[]}
  }
  componentDidMount(){
    //RickAndMortyServices.getALLCharacter()
    //.then((data)=>this.setState({mascotas:data.results}))
    //.catch((error)=>console.log(error)) 
   }
  render() {
    return (
        <main>
         
        
        <Cards/>
        
        </main>
    )
  }
}


