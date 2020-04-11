import React from 'react';
import './Persona.css';
import { motion } from "framer-motion";


export class Persona extends React.Component {
  state = { isVisible: true };
  render() {
    return (<div>
      <motion.div className="persona" animate={{
        x: 200,
        y: 200
      }} transition={{ ease: "easeOut", duration: 5 }} />
    </div>);
  }
}
