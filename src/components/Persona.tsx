import React from 'react';
import './Persona.css';
import { motion } from "framer-motion";
import { PositionPoint } from '../modules/PersonaModel';

const MOVEMENT_DELTA = 50;




interface PersonaProps {
  key: number,
  position: PositionPoint,
  transitionTime: number,
  color: string
}

export class Persona extends React.Component <PersonaProps, []>{
  constructor(props: PersonaProps){
    super(props)
  }
  
  render() {
    return (<div>
      <motion.div className="persona" style  = {{backgroundColor: this.props.color}}  animate= {{
        x: this.props.position.x,
        y: this.props.position.y
      }} transition={{ ease: "easeOut", duration: this.props.transitionTime }} />
    </div>);
  }
}
