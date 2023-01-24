import { LibraryBlock } from "@keix/workflow-types";

export const blocks: LibraryBlock[] = [
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
      {
        name: "defaultValue",
        isPort: false,
        type: "{{parameters.type}}",
      },
      {
        name: "options",
        isPort: false,
        type: "keix.options",
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
  {
    name: "format",
    code: "",
    uri: "string.format",
    returnType: "python.string",
    style: {
      bg: { color: "red", opacity: 500 },
      icon: "variable",
    },
    arguments: [
      {
        name: "self",
        isPort: true,
        type: "python.string",
      },
    ],
    functionType: "method",
  },
  {
    name: "divide",
    code: `
def divide(a, b):
  return a / b    
    `,
    uri: "python.divide",
    returnType: "python.float",
    style: {
      bg: { color: "blue", opacity: 500 },
      icon: "divide",
    },
    arguments: [
      {
        name: "a",
        isPort: true,
        type: ["python.int", "python.float"],
      },
      {
        name: "b",
        isPort: true,
        type: ["python.int", "python.float"],
      },
    ],
  },
  {
    name: "multiply",
    code: `
def multiply(a, b):
  return a * b    
    `,
    uri: "python.multiply",
    returnType: "python.float",
    style: {
      bg: { color: "blue", opacity: 500 },
      icon: "small-cross",
    },
    arguments: [
      {
        name: "a",
        isPort: true,
        type: ["python.int", "python.float"],
      },
      {
        name: "b",
        isPort: true,
        type: ["python.int", "python.float"],
      },
    ],
  },
  {
    name: "to_int",
    code: `
def to_int(_in):
  return int(_in)    
    `,
    uri: "python.to_int",
    returnType: "python.int",
    style: {
      bg: { color: "blue", opacity: 500 },
      icon: "numeric",
    },
    arguments: [
      {
        name: "in",
        isPort: true,
        type: "python.string",
      },
    ],
  },
];
