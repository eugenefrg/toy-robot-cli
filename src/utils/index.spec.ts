import { getParams, getRobotDirection, patternWithText } from "."
import { ROBOT_DIRECTIONS, ROBOT_DIRECTION_INPUT } from "./enums"

describe('patternWithText', () => {
    const pattern = patternWithText("test")

    it("should build a regexp pattern with the `text` parameter.", () => {
        expect(pattern.source).toBe("^test(?: |$)")
    })

    it("should be able to capture the correct text.", () => {
        expect(pattern.test("test")).toBe(true)
        expect(pattern.test("test ")).toBe(true)
        expect(pattern.test("test a b c")).toBe(true)

        expect(pattern.test("testhello")).toBe(false)
    })
})

describe('getParams', () => {
    it("should return the correct params", () => {
        expect(getParams("place 5 5 N")).toEqual(["5", "5", "N"])
    })
})

describe('getRobotDirection', () => {
    it("should return the correct direction", () => {
        expect(getRobotDirection(ROBOT_DIRECTION_INPUT.NORTH)).toBe(ROBOT_DIRECTIONS.NORTH)
        expect(getRobotDirection(ROBOT_DIRECTION_INPUT.SOUTH)).toBe(ROBOT_DIRECTIONS.SOUTH)
        expect(getRobotDirection(ROBOT_DIRECTION_INPUT.WEST)).toBe(ROBOT_DIRECTIONS.WEST)
        expect(getRobotDirection(ROBOT_DIRECTION_INPUT.EAST)).toBe(ROBOT_DIRECTIONS.EAST)
    })
})