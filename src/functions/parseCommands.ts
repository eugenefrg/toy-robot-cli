import Grid from "../classes/Grid";
import { getParams, patternWithText } from "../utils";
import placeCommand from "./place";

/**
 * Parses the user's input and executes the corresponding action.
 * @param {string} answer - The user's input.
 * @param {Grid} grid - The game board.
 * @returns {string} The message to be logged.
 */
export function parseCommands(answer: string, grid: Grid): string | undefined {
    const params: any = getParams(answer);
    const getCommand = (command: string) => patternWithText(command).test(answer);
    let log: string | undefined;

    if (getCommand("place")) {
        // Place the robot on the board.
        try {
            placeCommand(params, grid);
        } catch (error: any) {
            log = error.message;
        }
    } else if (getCommand("move")) {
        // Move the robot one unit.
        if (!grid.robot) {
            log = "No robot placed";
        } else {
            try {
                grid.robot.move();
            } catch (error: any) {
                log = error.message;
            }
        }

    } else if (getCommand("left")) {
        // Turn the robot left.
        if (!grid.robot) {
            log = "No robot placed";
        } else {
            grid.robot.turnLeft();
        }

    } else if (getCommand("right")) {
        // Turn the robot right.
        if (!grid.robot) {
            log = "No robot placed";
        } else {
            grid.robot.turnRight();
        }

    } else if (getCommand("report")) {
        // Report the robot's location.
        if (!grid.robot) {
            log = "No robot placed";
        } else {
            log = grid.robot.report();
        }

    } else if (getCommand("quit")) {
        // Exit the program.
        process.exit();
    } else {
        log = "Invalid Command";
    }
    return log;
}
