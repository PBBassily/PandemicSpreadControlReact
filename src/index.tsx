import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { motion } from "framer-motion"





class Box extends React.Component {
  state = { isVisible: true };
  render() {
    return (
      <div>
      <motion.div
      className = "persona"
      animate={
        {
          x: 200,
          y: 200
        }
      }
      transition={{ ease: "easeOut", duration: 5 }}
      />
      </div>
    )
  }
}

ReactDOM.render(<Box />, document.getElementById('root'));
