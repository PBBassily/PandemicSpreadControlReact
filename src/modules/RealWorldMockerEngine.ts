import { PositionPoint, MovementBoundry, PersonaModel } from "./PersonaModel";

export class RealWorldMockerEngine {
    population: Array<PersonaModel>;

    constructor(worldConfiguration: WorldConfiguration) {
        this.population = this.populateWorld(worldConfiguration.personaNumber);
    }

    getPopulationDistrubutionSnapShot() : Array<PersonaModel> {
        return this.population;
    }

    populateWorld(personaNumber: number) : Array<PersonaModel> {
        let population: Array<PersonaModel> = [];
        for (let i = 0; i  < personaNumber ; i ++) {
             population.push (new PersonaModel());
         }
         return population;
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



