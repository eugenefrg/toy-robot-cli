import { render } from "..";
import Grid from "../classes/Grid";
import { parseCommands } from "./parseCommands";

const fs = require('fs');

/**
 * Reads a file, processes its content line by line, and renders the commands on the provided grid.
 *
 * @param {string} file - The path of the file to be processed.
 * @param {Grid} grid - The game board grid to apply the commands on.
 */
export function processFile(file: string, grid: Grid) {
    fs.open(file, 'r', (err: any, fd: any) => {
        if (err) throw new Error(err)

        fs.readFile(fd, 'utf8', async (err: any, data: any) => {
            if (err) throw new Error(err)
            const lines = data.split('\n').map((line: string) => line.trim())

            for (const line of lines) {
                render(grid, parseCommands(line, grid))
                await sleep(1000)
            }

            fs.close(fd, (err: any) => { if (err) throw new Error(err) })
        })
    })
}


function sleep(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}