import Grid from "../Grid";
import { ROBOT_ACTIVE, ROBOT_DIRECTIONS, ROBOT_INACTIVE } from "../../utils/enums";

/**
 * Mapping of directions to their corresponding x and y changes
 */
const DIRECTION_VALUES: {
    [key: string]: number[];
} = {
    WEST: [0, -1],
    EAST: [0, 1],
    NORTH: [-1, 0],
    SOUTH: [1, 0]
}

/**
 * Class representing the robot that moves around on the grid
 */
class Robot {
    /**
     * Direction the robot is currently facing
     */
    direction: ROBOT_DIRECTIONS;

    /**
     * Grid the robot is currently on
     */
    grid: Grid;

    /**
     * Character used to represent the robot on the grid
     */
    marker: string;

    /**
     * X Coordinate of the robot
     */
    x: number;

    /**
     * Y Coordinate of the robot
     */
    y: number;

    constructor(x: number, y: number, direction: ROBOT_DIRECTIONS, grid: Grid) {
        this.x = x;
        this.y = y;
        this.coordinates = [x, y];
        this.direction = direction;
        this.marker = ROBOT_INACTIVE[this.direction];
        this.grid = grid;
    }

    /**
     * Set the coordinates of the robot
     */
    set coordinates(coordinates: number[]) {
        this.x = coordinates[0];
        this.y = coordinates[1];
    }

    /**
     * Get the coordinates of the robot
     * @returns Coordinates of the robot as a two element array
     */
    get coordinates() {
        return [Number(this.x), Number(this.y)];
    }

    /**
     * Determine if the robot can move forward in a given direction
     * @param direction Direction to check
     * @returns True if the robot can move forward, false otherwise
     */
    canMoveForward(direction: ROBOT_DIRECTIONS): boolean {
        const potentialDirection = this.coordinates.map((coord, index) => coord + DIRECTION_VALUES[direction][index]);
        if (this.grid.cells[potentialDirection[1]] && this.grid.cells[potentialDirection[1]][potentialDirection[0]]) {
            return true;
        }
        return false;
    }

    /**
     * Draw the robot to the grid
     * @returns The character used to represent the robot on the grid
     */
    draw(): string {
        if (this.canMoveForward(this.direction)) {
            this.marker = ROBOT_ACTIVE[this.direction];
            return this.marker;
        }
        return ROBOT_INACTIVE[this.direction];
    }

    /**
     * Move the robot forward in its current direction
     */
    move() {
        if (this.canMoveForward(this.direction)) {
            const newLocation = this.coordinates.map((coord, index) => coord + DIRECTION_VALUES[this.direction][index]);
            this.coordinates = newLocation;
        } else {
            throw new Error('cannot move forward');
        }
    }

    /**
     * Turn the robot left
     */
    turnLeft() {
        switch (this.direction) {
            case ROBOT_DIRECTIONS.WEST:
                this.direction = ROBOT_DIRECTIONS.SOUTH;
                break;
            case ROBOT_DIRECTIONS.SOUTH:
                this.direction = ROBOT_DIRECTIONS.EAST;
                break;
            case ROBOT_DIRECTIONS.EAST:
                this.direction = ROBOT_DIRECTIONS.NORTH;
                break;
            case ROBOT_DIRECTIONS.NORTH:
                this.direction = ROBOT_DIRECTIONS.WEST;
                break;
        }
    }

    /**
     * Turn the robot right
     */
    turnRight() {
        switch (this.direction) {
            case ROBOT_DIRECTIONS.WEST:
                this.direction = ROBOT_DIRECTIONS.NORTH;
                break;
            case ROBOT_DIRECTIONS.NORTH:
                this.direction = ROBOT_DIRECTIONS.EAST;
                break;
            case ROBOT_DIRECTIONS.EAST:
                this.direction = ROBOT_DIRECTIONS.SOUTH;
                break;
            case ROBOT_DIRECTIONS.SOUTH:
                this.direction = ROBOT_DIRECTIONS.WEST;
                break;
        }
    }

    /**
     * Report the robot's location and direction
     * @returns A string with the robot's location and direction
     */
    report(): string {
        return `Robot: I am at ${this.coordinates} facing ${this.direction}`;
    }
}

export default Robot