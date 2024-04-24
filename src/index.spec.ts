import { main } from "./index"
import Grid from "./classes/Grid"
import { ASCII_TITLE, HELP_TEXT } from "./utils/constants"

describe('render', () => {
    const grid = new Grid(5, 5)
    it('should log the title and help text to the console', () => {
        const logSpy = jest.spyOn(console, 'log')
        main(grid)
        expect(logSpy).toHaveBeenCalledWith(ASCII_TITLE)
        expect(logSpy).toHaveBeenCalledWith(HELP_TEXT)
    })

    it('should also render the grid', () => {
        const logSpy = jest.spyOn(console, 'log')
        main(grid)
        expect(logSpy).toHaveBeenCalledWith(grid.render())
    })
})