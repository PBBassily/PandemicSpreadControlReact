import React from 'react';
import './Persona.css';
import { motion } from "framer-motion";

const MOVEMENT_DELTA = 1500;


interface PositionState {
  x: number,
  y: number
}

interface PositionProps {
  xMax: number,
  yMax: number,
  xMin: number,
  yMin: number
}

export class Persona extends React.Component <PositionProps, PositionState>{

  

  constructor(props: any){
    super(props)
    this.state = { x: 0, y : 0 };

    this.startTimer = this.startTimer.bind(this)
  }

  componentDidMount() {
    this.startTimer()
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
  
  startTimer() {
   
    setInterval(() => {
    const newX = this.getNewRandomConstrainedGradualValueForAxis(
      this.state.x, 
      this.props.xMax, 
      this.props.xMin,
      MOVEMENT_DELTA);
    const newY = this.getNewRandomConstrainedGradualValueForAxis(
      this.state.y, 
      this.props.yMax, 
      this.props.yMin,
      MOVEMENT_DELTA);
      this.setState({
        x: newX,
        y: newY
      });
    }, 0.25);
    console.log("start")
  }
  render() {
    return (<div>
      <motion.div className="persona" animate={{
        x: this.state.x,
        y: this.state.y
      }} transition={{ ease: "easeOut", duration: 0.25 }} />
    </div>);
  }
}
