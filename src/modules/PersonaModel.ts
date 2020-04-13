export class PersonaModel {
    position: PositionPoint;
    oldPosition: PositionPoint;
    health: PersonaHealthState;
    toBeInfectedNextFrame: boolean = false;
    constructor (position : PositionPoint, health: PersonaHealthState = PersonaHealthState.SUSPIOUS) {
        this.position = position;
        this.oldPosition = position;
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