import React from 'react';
import './Persona.css';
import { motion } from "framer-motion";
import { PositionPoint } from '../modules/PersonaModel';

const MOVEMENT_DELTA = 50;




interface PersonaProps {
  index: number,
  position: PositionPoint,
  oldPosition: PositionPoint,
  transitionTime: number,
  color: string
}

export class Persona extends React.Component <PersonaProps>{
  constructor(props: PersonaProps){
    super(props)
  }
  
  render() {
    return (
      <motion.div  className="persona" 
        style = {
          { 
            backgroundColor: this.props.color, 
            x: this.props.oldPosition.x, 
            y: this.props.oldPosition.y
          }
        }  
        animate = {
          {
            x: this.props.position.x,
            y: this.props.position.y
          }
        } 
        transition = {
          { 
            type : "tween",
            duration: this.props.transitionTime 
          }
          
        } 
        children = {
          <p>{this.props.index}</p>
        }
        />

    );
  }
}
