import Grid from "../classes/Grid"
import { parseCommands } from "./parseCommands"

describe('parseCommands', () => {
    const grid = new Grid(5, 5)
    it('should log an error if the command is invalid', () => {
        expect(parseCommands("random command", grid)).toBe("Invalid Command")
    })

    it('should log no robot placed if the robot is not placed', () => {
        expect(parseCommands("move", grid)).toBe("No robot placed")
        expect(parseCommands("left", grid)).toBe("No robot placed")
        expect(parseCommands("right", grid)).toBe("No robot placed")
        expect(parseCommands("report", grid)).toBe("No robot placed")
    })
})