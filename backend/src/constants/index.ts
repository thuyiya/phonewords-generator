const ROUTES = {
    CONVERTOR: '/convertor'
}

const CONVERSIONS_NUMBER_AND_WORD_CONFIG: Array<Array<string>> = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
]

const STRINGS = {
    MESSAGES: {
        NOT_WORKING: "not working",
        VALUE_QUERY_NOT_DEFINED: "value query is not defind",
        PROVIDE_TWO_TO_NINE_NUMBERS: "Please provide 2 to 9 numbers combinations",
        NO_TWOZERO_TOAND_ONE_NUMBERS: "Number combinations can not contain 0 or 1",
        API_VERSION: "Version",
        ENDPOINT_NOT_FOUND: "Endpoint not found",
        SOMETHING_WENT_WRONG: "Oops!, Somethings is wrong"
    }
}

const NUMBER_CONFIG = {
    MAX_LENGTH: 9,
    REGEX: '^[2-9]+$'
}

export {
    ROUTES,
    STRINGS,
    CONVERSIONS_NUMBER_AND_WORD_CONFIG,
    NUMBER_CONFIG
}