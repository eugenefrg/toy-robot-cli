import Grid from "../classes/Grid"
import placeCommand from "./place"

describe("placeCommand", () => {
    const grid = new Grid(5, 5)
    it("Throws an error when the command is incomplete", () => {
        const params = ["5", "5"]
        expect(() => placeCommand(params, grid)).toThrow()
    })

    it("Throws an error when the direction is invalid", () => {
        const params = ["5", "5", "A"]
        expect(() => placeCommand(params, grid)).toThrow()
    })

    it("Throws an error when the coordinates are invalid", () => {
        const params = ["A", "5", "N"]
        expect(() => placeCommand(params, grid)).toThrow()
    })

    it("Throws an error when the coordinates are out of bounds", () => {
        const params = ["6", "5", "N"]
        expect(() => placeCommand(params, grid)).toThrow()
    })

})