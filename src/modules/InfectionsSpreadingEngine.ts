import { PersonaModel, PersonaHealthState, PositionPoint } from "./PersonaModel";

export  class InfectionSpreadingEngine {
    
    mock(population: Array<PersonaModel>, infectionProb: number, infectionRadius: number): Array<PersonaModel> {
        for (let i = 0; i < population.length ; i ++) {
            let persona = population[i];
            if (persona.health === PersonaHealthState.SUSPIOUS && !persona.toBeInfectedNextFrame) {
                for (let j = 0 ; j < population.length ; j++) {
                    if (j == i) {
                        continue;
                    }
                    let threat = population[j];
                    if (threat.health === PersonaHealthState.INFECTED && 
                        this.isInfectiousDistance(persona,threat, infectionRadius) && 
                        !this.didTheirMotherPrayeFor(1 - infectionProb)) {
                            population[i].toBeInfectedNextFrame = true;
                            break;
                    }
                }
            } else {
                continue;
            }
        }
        population.map(p => {
            if (p.toBeInfectedNextFrame) {
                p.toBeInfectedNextFrame = false;
                p.health = PersonaHealthState.INFECTED;
            }
            return p;
        });
        return population
    }

    isInfectiousDistance(p1: PersonaModel, p2: PersonaModel, infectionRadius: number): boolean {
        return this.getEculideanDistance(p1.position,p2.position) <= infectionRadius
    }

    getEculideanDistance(p1: PositionPoint, p2: PositionPoint): number {
        return Math.sqrt( Math.pow((p1.x-p2.x), 2) + Math.pow((p1.y-p2.y), 2) );
    }

    didTheirMotherPrayeFor(prob: number): boolean {
        return Math.random() <= prob;
    }


}