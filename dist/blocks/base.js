export const blocks = [
    {
        name: "input",
        uri: "keix.input",
        code: ``,
        returnType: "{{parameters.type}}",
        arguments: [
            {
                name: "name",
                isPort: false,
                type: "python.string",
            },
            {
                name: "type",
                isPort: false,
                type: "keix.type",
                defaultValue: "float",
            },
            {
                name: "static",
                isPort: false,
                type: "python.bool",
            },
        ],
        style: {
            icon: "import",
            bg: {
                color: "blue",
                opacity: 500,
            },
        },
    },
    {
        name: "output",
        uri: "keix.output",
        code: ``,
        arguments: [
            {
                name: "in",
                type: "{{parameters.type}}",
                isPort: true,
            },
            {
                name: "name",
                isPort: false,
                type: "python.string",
                defaultValue: "out",
            },
            {
                name: "type",
                isPort: false,
                type: "keix.type",
                defaultValue: "float",
            },
        ],
        style: {
            icon: "export",
            bg: {
                color: "blue",
                opacity: 500,
            },
        },
    },
    {
        uri: "string.format",
        returnType: "python.string",
        code: ``,
        functionType: "method",
        name: "format",
        style: {
            icon: "array-floating-point",
            bg: { color: "red", opacity: 400 },
        },
        arguments: [{ name: "self", type: "python.string", isPort: false }],
    },
    {
        name: "json_path",
        uri: "keix.json_path",
        code: `
from jsonpath_ng import jsonpath, parse 
from json import loads, dumps
def json_path(_in, path):
    jsonpath_expr = parse(path)
    jsonpath_res = jsonpath_expr.find(loads(_in))
    values = list(map(lambda x: x.value, jsonpath_res))
    return dumps(values)
    `,
        requires: ["jsonpath_ng"],
        returnType: "python.string",
        arguments: [
            {
                name: "in",
                type: "python.string",
                isPort: true,
            },
            {
                name: "path",
                isPort: false,
                type: "python.string",
            },
        ],
        style: {
            icon: "export",
            bg: {
                color: "blue",
                opacity: 500,
            },
        },
    },
];
