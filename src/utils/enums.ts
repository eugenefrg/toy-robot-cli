enum ROBOT_ACTIVE {
    WEST = '◀',
    EAST = '▶',
    NORTH = '▲',
    SOUTH = '▼'
}

enum ROBOT_INACTIVE {
    WEST = '◁',
    EAST = '▷',
    NORTH = '△',
    SOUTH = '▽'
}

enum ROBOT_DIRECTIONS {
    WEST = 'WEST',
    EAST = 'EAST',
    NORTH = 'NORTH',
    SOUTH = 'SOUTH'
}

enum ROBOT_DIRECTION_INPUT {
    WEST = 'W',
    EAST = 'E',
    NORTH = 'N',
    SOUTH = 'S'
}

export {
    ROBOT_ACTIVE,
    ROBOT_INACTIVE,
    ROBOT_DIRECTIONS,
    ROBOT_DIRECTION_INPUT
}