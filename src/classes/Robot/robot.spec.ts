import { ROBOT_ACTIVE, ROBOT_DIRECTIONS, ROBOT_INACTIVE } from '../../utils/enums'
import Grid from '../Grid'
describe('Robot', () => {
    const grid = new Grid(5, 5)
    grid.initializeCells() // ensures the grid is created.
    grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)

    it('should be created correctly', () => {
        expect(grid.robot).toBeTruthy()
        expect(grid.robot!.x).toBe(0)
        expect(grid.robot!.y).toBe(0)
        expect(grid.robot!.coordinates).toEqual([0, 0])
        expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.NORTH)
        expect(grid.robot!.marker).toBe(ROBOT_INACTIVE[grid.robot!.direction]) // to initialize it with inactive as default.
    })

    describe('canMoveForward', () => {
        it("should return false outside of bounds", () => {
            grid.placeRobot(4, 4, ROBOT_DIRECTIONS.NORTH)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.EAST)).toBe(false)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.SOUTH)).toBe(false)

            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)

            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.NORTH)).toBe(false)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.WEST)).toBe(false)
        })

        it("should return true inside of bounds", () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.EAST)).toBe(true)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.SOUTH)).toBe(true)

            grid.placeRobot(4, 4, ROBOT_DIRECTIONS.NORTH)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.NORTH)).toBe(true)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.WEST)).toBe(true)

            grid.placeRobot(2, 2, ROBOT_DIRECTIONS.NORTH)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.NORTH)).toBe(true)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.WEST)).toBe(true)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.EAST)).toBe(true)
            expect(grid.robot!.canMoveForward(ROBOT_DIRECTIONS.SOUTH)).toBe(true)
        })
    })

    describe('draw', () => {
        it('should return inactive marker if the robot cannot move forward', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)
            grid.robot!.draw()
            expect(grid.robot!.draw()).toBe(ROBOT_INACTIVE[grid.robot!.direction])
        })

        it('should return active marker if the robot can move forward', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.EAST)
            console.log(grid.robot?.canMoveForward(ROBOT_DIRECTIONS.EAST))
            grid.robot!.draw()
            expect(grid.robot!.marker).toBe(ROBOT_ACTIVE[grid.robot!.direction])
        })
    })

    describe('move', () => {
        it('should move the robot when it can', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.EAST)
            grid.robot!.draw()
            grid.robot!.move()
            expect(grid.robot!.coordinates).toEqual([0, 1])
        })

        it('should throw an error if the robot cannot move', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)
            expect(() => grid.robot!.move()).toThrow()
        })
    })

    describe('turnLeft', () => {
        it('should turn the robot left', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.EAST)
            grid.robot!.turnLeft()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.NORTH)


            grid.robot!.turnLeft()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.WEST)

            grid.robot!.turnLeft()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.SOUTH)

            grid.robot!.turnLeft()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.EAST)
        })
    })

    describe('turnRight', () => {
        it('should turn the robot right', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)
            grid.robot!.turnRight()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.EAST)

            grid.robot!.turnRight()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.SOUTH)

            grid.robot!.turnRight()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.WEST)

            grid.robot!.turnRight()
            expect(grid.robot!.direction).toBe(ROBOT_DIRECTIONS.NORTH)
        })
    })

    describe('report', () => {
        it('should report the robot location and direction', () => {
            grid.placeRobot(0, 0, ROBOT_DIRECTIONS.NORTH)
            expect(grid.robot!.report()).toBe(`Robot: I am at 0,0 facing ${ROBOT_DIRECTIONS.NORTH}`)
        })
    })
})