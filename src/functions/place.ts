import Grid from "../classes/Grid"
import { getRobotDirection, isValidDirection } from "../utils"
import { GRID_DIMENSIONS } from "../utils/constants"
import { ROBOT_DIRECTION_INPUT } from "../utils/enums"

/**
 * Executes the place command with the given parameters on the provided grid.
 *
 * @param {string[]} params - An array of three strings representing the x, y, and direction of the robot.
 * @param {Grid} grid - The grid on which the robot will be placed.
 * @throws {Error} If the parameters are invalid or the robot is out of bounds.
 */
function placeCommand(params: string[], grid: Grid) {
    /**
     * validate params
     */
    if (params.length !== 3) {
        throw new Error("Incomplete Command. Use 'place {x:number} {y:number} {direction (N|S|W|E)}'")
    }

    const x = Number(params[0])
    const y = Number(params[1])
    const direction = params[2] as ROBOT_DIRECTION_INPUT

    if (!isValidDirection(direction)) {
        // invalid direction
        throw new Error("Invalid Direction. Use 'place {x:number} {y:number} {direction (N|S|W|E)}'")
    }
    if (isNaN(x) || isNaN(y)) {
        // invalid coordinates
        throw new Error("Invalid Coordinates. Use 'place {x:number} {y:number} {direction (N|S|W|E)}'")
    }
    if (x >= GRID_DIMENSIONS.x || y >= GRID_DIMENSIONS.y || x < 0 || y < 0) {
        // invalid coordinates
        throw new Error("Out of bounds. Use 'place {x:number} {y:number} {direction (N|S|W|E)}'")
    }

    // test each to throw correctly.
    const robotDirection = getRobotDirection(direction)
    grid.placeRobot(x, y, robotDirection)
}

export default placeCommand