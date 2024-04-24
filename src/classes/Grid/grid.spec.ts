import Grid from "."
import { ROBOT_DIRECTIONS, ROBOT_INACTIVE } from "../../utils/enums"

describe('Grid', () => {
    const grid = new Grid(5, 5)
    const north = ROBOT_DIRECTIONS.NORTH

    it('should be created correctly', () => {
        expect(grid.x).toBe(5)
        expect(grid.y).toBe(5)
        expect(grid.cells).toBeTruthy()
    })

    grid.initializeCells()

    describe("initializeCells", () => {
        it("should initialize cells", () => {
            grid.initializeCells()
            expect(grid.cells).toBeTruthy()
        })
    })

    describe("formatGrid", () => {
        it("should format grid", () => {
            expect(grid.formatGrid(grid.cells)).toBeTruthy()
        })
    })

    describe("initializeCells", () => {
        it("should initialize cells", () => {
            grid.initializeCells()
            expect(grid.cells.length).toBeGreaterThan(0)
        })
    })

    describe("placeRobot", () => {
        it("should place robot", () => {
            grid.placeRobot(0, 0, north)
            expect(grid.robot).toBeTruthy()
        })
    })

    describe("formatGrid", () => {
        it("should not contain robot when no robot is placed", () => {
            expect(grid.formatGrid(grid.cells)).not.toContain("0 0")
        })

        const robotMarker = ROBOT_INACTIVE[north]

        it("should contain robot when robot is placed", () => {
            grid.placeRobot(0, 0, north)
            expect(grid.formatGrid(grid.cells)).toContain(robotMarker)
        })

        it("should only have one robot", () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)
            expect(grid.formatGrid(grid.cells).split("").filter(char => char === robotMarker).length).toBe(1)
        })
    })

    describe("render", () => {
        it("should render grid", () => {
            expect(grid.render()).toBeTruthy()
        })
    })
})