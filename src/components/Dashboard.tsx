import React from 'react';
import './Dashboard.css';
import  {Persona} from "./Persona";
import { RealWorldMockerEngine, WorldConfiguration } from '../modules/RealWorldMockerEngine';
import { PersonaHealthState } from '../modules/PersonaModel';

export class Dashboard extends React.Component {
    worldConfiguration: WorldConfiguration;
    worldMockerEngine: RealWorldMockerEngine;
    constructor(props: any) {
        super(props);
        this.worldConfiguration = generateWorldConfiguration();
        this.worldMockerEngine = new RealWorldMockerEngine(this.worldConfiguration);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update()
    }

    update() {
        setInterval(() => {
            this.setState({});
        }, 1/FPS  * 1000);
    }
  
  render() {
    const newlyDistributedPopulation = this.worldMockerEngine.getPopulationDistrubutionSnapShot()
    const personasComponents = newlyDistributedPopulation.map(function(persona, index) {
        return <Persona 
        index = {index} 
        position = {persona.position} 
        oldPosition = { persona.oldPosition} 
        transitionTime = {1 / FPS} 
        color = {getProperColor(persona.health)}/>;
      });
    return (
        <div className = "dashboard">
            {personasComponents}
        </div>
    );
  }
}

const POPULATION_NUMBER: number = 50;
const FPS: number = 1;

function generateWorldConfiguration() : WorldConfiguration {
    return {
        personaNumber: POPULATION_NUMBER,
        movementBoundry: {
            bottomRight: {
                x: 500,
                y: 500
            },
            upperLeft: {
                x: 0,
                y: 0
            }
        },
        FPS: FPS,
        infectionProbability: 0.9,
        infectionRadius: 50,
        personaMovmentDelta: 20
    };
}

function getProperColor(state: PersonaHealthState): string {
    switch (state) {
        case PersonaHealthState.SUSPIOUS:
            return  "#4392F1";
        case PersonaHealthState.INFECTED: 
            return "#ff1c68";
        default:
            return "#291F1E";
    }

}