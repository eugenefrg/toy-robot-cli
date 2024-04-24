import { ROBOT_DIRECTIONS, ROBOT_DIRECTION_INPUT } from "./enums";


/**
 * Returns a regular expression pattern that matches a string starting with the given `text`
 * followed by either a space, or the end of the string.
 *
 * @param {string} text - The text to match at the start of the string.
 * @return {RegExp} The constructed RegExp.
 */
export const patternWithText = (text: string): RegExp => {
    return new RegExp(`^${text}(?: |$)`, 'i');
}

/**
 * Extracts the parameters from a command string by splitting it into an array and removing the first element.
 *
 * @param {string} command - The command string from which to extract the parameters.
 * @return {string[]} An array of strings representing the parameters.
 */
export const getParams = (command: string) => {
    const commandParts = command.split(" ")
    commandParts.shift()
    return commandParts
}

/**
 * Checks if the given direction is valid.
 *
 * @param {string} direction - The direction to check.
 * @return {boolean} True if the direction is valid, false otherwise.
 */
export function isValidDirection(direction: string): boolean {
    return Object.values(ROBOT_DIRECTION_INPUT).includes(direction as ROBOT_DIRECTION_INPUT);
}

/**
 * Returns the corresponding ROBOT_DIRECTIONS enum value for the given ROBOT_DIRECTION_INPUT enum value.
 *
 * @param {ROBOT_DIRECTION_INPUT} direction - The input direction to convert.
 * @return {ROBOT_DIRECTIONS} The corresponding ROBOT_DIRECTIONS enum value.
 */
export function getRobotDirection(direction: ROBOT_DIRECTION_INPUT): ROBOT_DIRECTIONS {
    switch (direction) {
        case ROBOT_DIRECTION_INPUT.NORTH:
            return ROBOT_DIRECTIONS.NORTH
        case ROBOT_DIRECTION_INPUT.SOUTH:
            return ROBOT_DIRECTIONS.SOUTH
        case ROBOT_DIRECTION_INPUT.WEST:
            return ROBOT_DIRECTIONS.WEST
        case ROBOT_DIRECTION_INPUT.EAST:
            return ROBOT_DIRECTIONS.EAST
    }
}

/**
 * Retrieves the file parameter from the command line arguments.
 *
 * @return {string | null} The value of the file parameter, or null if it is not found.
 */
export function getFileParam() {
    const args = process.argv.slice(2);
    const fileArgIndex = args.findIndex(arg => arg.startsWith('--file='));
    return args[fileArgIndex]?.split('=')[1] || null;
}