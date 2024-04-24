import Grid from "./classes/Grid"
import { parseCommands } from "./functions/parseCommands";
import { processFile } from "./functions/processFile";
import { getFileParam } from "./utils";
import { ASCII_TITLE, GRID_DIMENSIONS, HELP_TEXT } from "./utils/constants"
import * as readline from 'node:readline';

/**
 * Renders the grid and logs the ASCII title, help text, and grid representation to the console.
 * If a message is provided, it is also logged to the console.
 *
 * @param {Grid} grid - The grid to be rendered.
 * @param {string} [message] - An optional message to be logged to the console.
 */
export const render = (grid: Grid, message?: string) => {
    console.log(ASCII_TITLE)
    console.log(HELP_TEXT)
    console.log(grid.render())
    message && console.log(message)
}

/**
 * Executes the main function of the program.
 *
 * @param {Grid} grid - The grid object representing the game board.
 * @param {string} [message] - An optional message to be displayed.
 * @return {Promise<void>} - A promise that resolves when the function completes.
 */
export const main = async (grid: Grid, message?: string) => {

    const file = getFileParam();

    if (file) {
        processFile(file, grid)
    } else {
        render(grid, message)
        const rl: readline.ReadLine = readline.createInterface(
            process.stdin, process.stdout, undefined, false);

        rl.question("", async (answer: string) => {
            const log = parseCommands(answer, grid);
            rl.close();
            main(grid, log)
        });
    }


}

const grid = new Grid(GRID_DIMENSIONS.x, GRID_DIMENSIONS.y)
main(grid)

