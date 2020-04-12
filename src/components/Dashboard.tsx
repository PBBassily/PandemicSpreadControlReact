import React from 'react';
import './Dashboard.css';
import  {Persona} from "./Persona";


export class Dashboard extends React.Component {
  state = { isVisible: true };
  render() {
    return (
        <div className = "dashboard">
            <Persona xMax = {1500} yMax = {1500} xMin = {-1500} yMin = {-1500} />
        </div>
    ) ;
  }
}