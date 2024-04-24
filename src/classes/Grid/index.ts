import Robot from "../Robot"
import { ROBOT_DIRECTIONS } from "../../utils/enums"

/**
 * Represents a 2D grid of cells.
 */
class Grid {
    /**
     * length of the grid
     */
    x: number;
    /**
     * width of the grid
     */
    y: number;
    /**
     * robot present in the grid
     */
    robot: Robot | null;
    /**
     * 2D array of strings representing the grid
     */
    cells: string[][];

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.robot = null;
        this.cells = [];
    }

    /**
     * Formats the given 2D array of strings into a grid-like string representation.
     * If a robot is present in the grid, its coordinates are used to replace the corresponding cell with the robot's draw output.
     *
     * @param {string[][]} cells - The 2D array of strings to be formatted.
     * @return {string} The formatted grid-like string representation.
     */
    formatGrid(cells: string[][]) {
        let renderCells = cells
        if (this.robot) {
            const [robotX, robotY] = this.robot.coordinates
            renderCells[robotX][robotY] = this.robot.draw();
        }
        return renderCells.map((row) => row.join(" ")).join("\n")
    }

    /**
     * Initializes the grid cells with the specified dimensions by filling with the placeholder character "_".
     *
     * @return {void} - No return value.
     */
    initializeCells() {
        this.cells = new Array(this.y).fill(0).map(() => new Array(this.x).fill("_"));
    }

    /**
     * Places a robot on the grid at the specified coordinates and direction.
     *
     * @param {number} x - The x-coordinate where the robot is placed.
     * @param {number} y - The y-coordinate where the robot is placed.
     * @param {ROBOT_DIRECTIONS} direction - The direction the robot is facing.
     */
    placeRobot(x: number, y: number, direction: ROBOT_DIRECTIONS) {
        this.robot = new Robot(x, y, direction, this)
    }

    /**
     * Renders the grid by initializing cells and formatting the grid based on the current state.
     *
     * @return {string} The formatted grid string representation.
     */
    render() {
        this.initializeCells()
        return this.formatGrid(this.cells)
    }
}

export default Grid