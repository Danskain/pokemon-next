import { Component } from 'react'
import Renderer from './Renderer'

export default class background extends Component {
  
  componentDidMount(): void {
    new Renderer() 
  }


  render() {
    return <canvas id="bg" />
  }
}
