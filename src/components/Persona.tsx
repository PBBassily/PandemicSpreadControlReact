import React from 'react';
import './Persona.css';
import { motion } from "framer-motion";
import { PositionPoint } from '../modules/PersonaModel';

const MOVEMENT_DELTA = 50;




interface PersonaProps {
  position: PositionPoint,
  transitionTime: number
}

export class Persona extends React.Component <PersonaProps, []>{
  constructor(props: PersonaProps){
    super(props)
  }
  

  getNewRandomConstrainedGradualValueForAxis(value: number, max: number, min: number, delta: number) {
    const valueDelta = Math.random() >= 0.5 ? delta : -1 * delta;
    let newValue = value + valueDelta;
    if (newValue > max) {
      return max;
    } else if (newValue < min){
      return min;
    }
    return newValue;
  }
  
  render() {
    return (<div>
      <motion.div className="persona" animate={{
        x: this.props.position.x,
        y: this.props.position.y
      }} transition={{ ease: "easeOut", duration: this.props.position }} />
    </div>);
  }
}
