export class PersonaModel {
    position: PositionPoint;
    health: PersonaHealthState;
    constructor (position : PositionPoint = defualtPosition(), health: PersonaHealthState = PersonaHealthState.SUSPIOUS) {
        this.position = position;
        this.health = health;
    }
 }
 
 export interface PositionPoint {
     x : number,
     y: number
 }

 export interface MovementBoundry {
    upperLeft : PositionPoint,
    bottomRight: PositionPoint
}

export enum PersonaHealthState {
    SUSPIOUS,
    INFECTED, 
    RECOVERED
}

var defualtPosition: () => PositionPoint = function () {
    return {
        x: Math.random() * 1000 - 500,
        y: Math.random() * 1000 - 500
    }
}