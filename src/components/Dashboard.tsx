import React from 'react';
import './Dashboard.css';
import  {Persona} from "./Persona";
import { RealWorldMockerEngine, WorldConfiguration } from '../modules/RealWorldMockerEngine';

const POPULATION_NUMBER: number = 5;
const FPS: number = 2;

export class Dashboard extends React.Component {
    worldConfiguration: WorldConfiguration;
    worldMockerEngine: RealWorldMockerEngine;

    constructor(props: any) {
        super(props);
        this.worldConfiguration = generateWorldConfiguration();
        this.worldMockerEngine = new RealWorldMockerEngine(this.worldConfiguration);
    }
  
  render() {
    const personasComponents = this.worldMockerEngine.population.map(function(persona, index){
        return <Persona key = {index} position = {persona.position} transitionTime = {1 / FPS}/>;
      });
    return (
        <div className = "dashboard">
            {personasComponents}
        </div>
    );
  }
}

function generateWorldConfiguration() : WorldConfiguration {
    return {
        personaNumber: POPULATION_NUMBER,
        movementBoundry: {
            bottomRight: {
                x: 500,
                y: 500
            },
            upperLeft: {
                x: -500,
                y: -500
            }
        },
        FPS: FPS,
        infectionProbability: 0.5,
        infectionRadius: 20,
        personaMovmentDelta: 50
    };
}