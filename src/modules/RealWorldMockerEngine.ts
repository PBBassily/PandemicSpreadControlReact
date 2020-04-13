import { PositionPoint, MovementBoundry, PersonaModel, PersonaHealthState } from "./PersonaModel";
import { Persona } from "../components/Persona";
import { InfectionSpreadingEngine } from "./InfectionsSpreadingEngine";

export class RealWorldMockerEngine {
    population: Array<PersonaModel>;
    configuration: WorldConfiguration;
    infectionEngine: InfectionSpreadingEngine;
    constructor(worldConfiguration: WorldConfiguration) {
        this.configuration = worldConfiguration;
        this.population = this.populateWorld(this.configuration.personaNumber);
        this.infectionEngine = new InfectionSpreadingEngine();
    }

    getPopulationDistrubutionSnapShot() : Array<PersonaModel> {
        this.updatePopulationMovement()
        this.population = this.infectionEngine.mock(
            this.population, 
            this.configuration.infectionProbability, 
            this.configuration.infectionRadius);
        return this.population;
    }

    populateWorld(personaNumber: number) : Array<PersonaModel> {
        let population: Array<PersonaModel> = [];
        for (let i = 0; i  < personaNumber ; i ++) {
             population.push (new PersonaModel( {
                 x: Math.random() * this.configuration.movementBoundry.bottomRight.x,
                 y: Math.random() * this.configuration.movementBoundry.bottomRight.y
             } ));
         }
          // choosing the lucky one
         population[Math.floor(Math.random() * population.length)].health = PersonaHealthState.INFECTED
         return population;
     }

     updatePopulationMovement() {
         this.population.map(element => {
             element.oldPosition = element.position;
             element.position = this.getNewRandomConstrainedGradualPosition(element.position)
             return element;
         });
     }

     getNewRandomConstrainedGradualPosition(oldPosition: PositionPoint) : PositionPoint {
        const newX = this.getNewRandomConstrainedGradualValueForAxis(
            oldPosition.x, 
            this.configuration.personaMovmentDelta,
            this.configuration.movementBoundry.bottomRight.x,
            this.configuration.movementBoundry.upperLeft.x);

        const newY = this.getNewRandomConstrainedGradualValueForAxis(
            oldPosition.y, 
            this.configuration.personaMovmentDelta,
            this.configuration.movementBoundry.bottomRight.y,
            this.configuration.movementBoundry.upperLeft.y);
                
        return {
             x: newX,
             y:newY
         }   
      }
     getNewRandomConstrainedGradualValueForAxis(oldAxisValue: number, delta: number, max: number, min: number) {
        const valueDelta = Math.random() >= 0.5 ? delta : -1 * delta;
        let newValue = oldAxisValue + valueDelta;
        if (newValue > max) {
          return max;
        } else if (newValue < min){
          return min;
        }
        return newValue;
      }
}

export interface WorldConfiguration {
    personaNumber: number,
    movementBoundry: MovementBoundry, 
    infectionRadius: number,
    infectionProbability: number,
    FPS: number,
    personaMovmentDelta: number
}



