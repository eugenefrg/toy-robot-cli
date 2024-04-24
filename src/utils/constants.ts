const ASCII_TITLE = `
@@@@@@@   @@@@@@   @@@ @@@     @@@@@@@    @@@@@@   @@@@@@@    @@@@@@   @@@@@@@
@@@@@@@  @@@@@@@@  @@@ @@@     @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@
  @@!    @@!  @@@  @@! !@@     @@!  @@@  @@!  @@@  @@!  @@@  @@!  @@@    @@!
  !@!    !@!  @!@  !@! @!!     !@!  @!@  !@!  @!@  !@   @!@  !@!  @!@    !@!
  @!!    @!@  !@!   !@!@!      @!@!!@!   @!@  !@!  @!@!@!@   @!@  !@!    @!!
  !!!    !@!  !!!    @!!!      !!@!@!    !@!  !!!  !!!@!!!!  !@!  !!!    !!!
  !!:    !!:  !!!    !!:       !!: :!!   !!:  !!!  !!:  !!!  !!:  !!!    !!:
  :!:    :!:  !:!    :!:       :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!    :!:
   ::    ::::: ::     ::       ::   :::  ::::: ::   :: ::::  ::::: ::     ::
   :      : :  :      :         :   : :   : :  :   :: : ::    : :  :      :
                                                          - by Eugene R.
`

const FRAME_TOP = `╔════════════════════════════════════════════════════════════════════════════╗`
const FRAME_BOTTOM = `╚════════════════════════════════════════════════════════════════════════════╝`
const FRAME_WALL = `║`

const HELP_TEXT = `
${FRAME_TOP}
${FRAME_WALL}Commands:                                                                   ${FRAME_WALL}
${FRAME_WALL}* place {x:number} {y:number} {direction (N|S|W|E)}                         ${FRAME_WALL}
${FRAME_WALL}* move - move forward where you are facing                                  ${FRAME_WALL}
${FRAME_WALL}* left - turn left                                                          ${FRAME_WALL}
${FRAME_WALL}* right - turn right                                                        ${FRAME_WALL}
${FRAME_WALL}* report - report current location                                          ${FRAME_WALL}
${FRAME_WALL}* quit - end program                                                        ${FRAME_WALL}
${FRAME_BOTTOM}`

const GRID_CELL = "_"

const GRID_DIMENSIONS = {
  x: 5,
  y: 5
}

export { GRID_CELL, ASCII_TITLE, FRAME_TOP, FRAME_BOTTOM, FRAME_WALL, HELP_TEXT, GRID_DIMENSIONS }