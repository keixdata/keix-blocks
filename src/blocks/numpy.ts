import { LibraryBlock } from "@keix/workflow-types";

const zeroLike = ["empty", "ones", "zeros"];

export const library: LibraryBlock[] = [
  ...zeroLike.map<LibraryBlock>((name) => ({
    name: name,
    uri: `numpy.${name}`,
    code: `from numpy import ${name}`,
    arguments: [
      {
        name: "shape",
        type: "python.int",
      },
      {
        name: "dtype",
        type: "code",
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  })),
  {
    name: "item",
    uri: "numpy.ndarray.item",
    code: "from numpy.ndarray import item",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "*args",
        type: "python.int",
      },
    ],
    returnType: "any",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "itemset",
    uri: "numpy.ndarray.itemset",
    code: "from numpy.ndarray import itemset",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "*args",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "*args",
        type: "python.int",
        optional: true,
        defaultValue: null,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "getfield",
    uri: "numpy.ndarray.getfield",
    code: "from numpy.ndarray import getfield",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "dtype",
        type: "python.string",
        defaultValue: null,
      },
      {
        name: "offset",
        type: "python.int",
        defaultValue: null,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "fill",
    uri: "numpy.ndarray.fill",
    code: "from numpy.ndarray import fill",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "resize",
    uri: "numpy.ndarray.resize",
    code: "from numpy.ndarray import resize",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "new_shape",
        type: "python.int_array",
        defaultValue: null,
      },
      {
        name: "refcheck",
        type: "python.bool",
        optional: true,
        defaultValue: true,
      },
    ],
    returnType: "none", //TYPE NONE Change shape and size of array in-place.
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "transpose",
    uri: "numpy.ndarray.transpose",
    code: "from numpy.ndarray import transpose",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "axes",
        type: ["none", "python.int_array"], // TYPE NONE None or no argument: reverses the order of the axes.
        optional: true,
        defaultValue: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "swapaxes", //CONTROLLARE SE VA BENE DOPO AVER VISTO QUELLA DI NUMPY
    uri: "numpy.ndarray.swapaxes",
    code: "from numpy.ndarray import swapaxes",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "copy",
    uri: "numpy.ndarray.copy",
    code: "from numpy.ndarray import copy",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "order",
        type: ["C", "F", "A", "K"],
        defaultValue: "C",
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "flatten",
    uri: "numpy.ndarray.flatten",
    code: "from numpy.ndarray import flatten",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "order",
        type: ["C", "F", "A", "K"],
        defaultValue: "C",
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "partition",
    uri: "numpy.ndarray.partition",
    code: "from numpy.ndarray import partition",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "kth",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "axis",
        type: "python.int",
        defaultValue: null,
      },
      {
        name: "kind",
        type: [
          "introselect",
          "floatroselect",
          "intargroselect",
          "floatargroselect",
        ],
        defaultValue: "introselect",
        optional: true,
      },
      {
        name: "order",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "sort",
    uri: "numpy.ndarray.sort",
    code: "from numpy.ndarray import sort",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "axis",
        type: "python.int",
        defaultValue: -1,
        optional: true,
      },
      {
        name: "kind",
        type: ["quicksort", "mergesort", "heapsort", "stable"],
        defaultValue: "quicksort",
        optional: true,
      },
      {
        name: "order",
        type: ["python.string", "python.string_array"],
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "tobytes",
    uri: "numpy.ndarray.tobytes",
    code: "from numpy.ndarray import tobytes",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "order",
        type: ["C", "F", "A"],
        defaultValue: "C",
      },
    ],
    returnType: "python.bytes", //TYPE BITES
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "ndim",
    uri: "numpy.ndarray.ndim",
    code: "from numpy.ndarray import ndim",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "*args",
        type: "numpy.ndarray",
        defaultValue: null,
      },
    ],
    returnType: "python.int",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "itemset",
    uri: "numpy.ndarray.itemset",
    code: "from numpy.ndarray import itemset",
    arguments: [
      {
        name: "self",
        type: "numpy.ndarray",
        isPort: true,
      },
      {
        name: "*args",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "*args",
        type: "python.int",
        optional: true,
        defaultValue: null,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "empty_like",
    uri: "numpy.empty_like",
    code: "from numpy import empty_like",
    arguments: [
      {
        name: "prototype",
        type: "numpy.ndarray",
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "order",
        type: ["C", "F", "A", "K"],
        defaultValue: "C",
        optional: true,
      },
      {
        name: "subok",
        type: "python.bool",
        defaultValue: true,
        optional: true,
      },
      {
        name: "shape",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "eye",
    uri: "numpy.eye",
    code: "from numpy import eye",
    arguments: [
      {
        name: "N",
        type: "python.int",
        defaultValue: null,
      },
      {
        name: "M",
        type: "python.int",
        defaultValue: null,
        optional: true,
      },
      {
        name: "k",
        type: "python.int",
        defaultValue: 0,
        optional: true,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "order",
        type: ["C", "F"],
        defaultValue: "C",
        optional: true,
      },
      {
        name: "like",
        type: "numpy.ndarray",
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "ones_like",
    uri: "numpy.ones_",
    code: "from numpy import ones_",
    arguments: [
      {
        name: "a",
        type: "numpy.ndarray",
        defaultValue: null,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "order",
        type: ["C", "F", "A", "K"],
        defaultValue: "C",
        optional: true,
      },
      {
        name: "subok",
        type: "python.bool",
        defaultValue: true,
        optional: true,
      },
      {
        name: "shape",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "identity",
    uri: "numpy.identity",
    code: "from numpy import identity",
    arguments: [
      {
        name: "n",
        type: "python.int",
        defaultValue: null,
      },
      {
        name: "M",
        type: "python.int",
        defaultValue: null,
        optional: true,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "like",
        type: "numpy.ndarray",
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "zeros_like",
    uri: "numpy.zeros_like",
    code: "from numpy import zeros_like",
    arguments: [
      {
        name: "a",
        type: "numpy.ndarray",
        defaultValue: null,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "order",
        type: ["C", "F", "A", "K"],
        defaultValue: "C",
        optional: true,
      },
      {
        name: "subok",
        type: "python.bool",
        defaultValue: true,
        optional: true,
      },
      {
        name: "shape",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "full",
    uri: "numpy.full",
    code: "from numpy import full",
    arguments: [
      {
        name: "shape",
        type: ["python.int", "python.int_array"],
        defaultValue: null,
      },
      {
        name: "fill_value",
        type: "numpy.ndarray",
        defaultValue: null,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "order",
        type: ["C", "F"],
        defaultValue: "C",
        optional: true,
      },
      {
        name: "like",
        type: "numpy.ndarray",
        defaultValue: null,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "full_like",
    uri: "numpy.full_like",
    code: "from numpy import full_like",
    arguments: [
      {
        name: "a",
        type: "numpy.ndarray",
        defaultValue: null,
      },
      {
        name: "fill_value",
        type: "numpy.ndarray",
        defaultValue: null,
      },
      {
        name: "dtype",
        type: "any", //TYPE ANY
        defaultValue: null,
        optional: true,
      },
      {
        name: "order",
        type: ["C", "F", "A", "K"],
        defaultValue: "C",
        optional: true,
      },
      {
        name: "subok",
        type: "python.bool",
        defaultValue: true,
        optional: true,
      },
      {
        name: "shape",
        type: ["python.int", "python.int_array"],
        defaultValue: true,
        optional: true,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "multiply",
    uri: "numpy.multiply",
    code: "from numpy import multiply",
    arguments: [
      {
        name: "x1",
        type: "numpy.ndarray",
      },
      {
        name: "x2",
        type: "numpy.ndarray",
      },
      {
        name: "out",
        type: "numpy.ndarray",
      },
      {
        name: "where",
        type: "numpy.ndarray",
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "randint",
    uri: "numpy.random.randint",
    code: "from numpy.random import randint",
    arguments: [
      {
        name: "low",
        type: "python.int",
        defaultValue: 1,
      },
      {
        name: "high",
        type: "python.int",
        defaultValue: 100,
      },
      {
        name: "size",
        type: "python.int",
        defaultValue: 8,
      },
    ],
    returnType: "numpy.ndarray",
    style: {
      icon: "array-numeric",
      bg: {
        color: "yellow",
        opacity: 500,
      },
    },
  },
  {
    name: "full",
    uri: "numpy.full",
    code: "from numpy import full",
    returnType: "numpy.ndarray",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "shape",
        type: ["python.int", "python.int_array"],
        description: "Shape of the new array, e.g., (2, 3) or 2",
      },
      {
        name: "fill_value",
        type: ["python.int", "python.int_array"],
      },
      {
        name: "dtype",
        type: ["numpy.type", "python.type"],
        optional: true,
      },
      {
        name: "order",
        type: "python.string",
        optional: true,
        defaultValue: "C",
        options: [
          {
            label:
              "Whether to store multidimensional data in C order in memory",
            value: "C",
          },
          {
            label:
              "Whether to store multidimensional data in Fortran-contiguous order in memory",
            value: "F",
          },
        ],
      },
      {
        name: "array_like",
        type: ["python.array", "numpy.array"],
        optional: true,
      },
    ],
  },
  {
    name: "sin",
    uri: "numpy.sin",
    code: "from numpy import sin",
    returnType: "numpy.ndarray",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "x",
        positional: true,
        type: ["python.float", "python.float_array", "numpy.ndarray"],
        description: "Angle, in radians",
      },
      /* {
        name: "out",
        type: "string",
        optional: true,
        defaultValue: "None",
        options: ["ndarray", "None"],
      },
      {
        name: "where",
        type: "python.bool",
        optional: true,
        description:
          "At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value.",
      },
      {
        name: "casting",
        type: "pyghon.string",
        optional: true,
        defaultValue: "same_kind",
      },
      {
        name: "order",
        type: "char",
        optional: true,
        defaultValue: "K",
      },
      {
        name: "dtype",
        type: ["numpy.type", "python.type"],
        optional: true,
        defaultValue: null,
      },*/
    ],
  },
  {
    name: "cos",
    uri: "numpy.cos",
    code: "from numpy import cos",
    returnType: "numpy.ndarray",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "x",
        positional: true,
        type: ["python.float", "python.float_array", "numpy.ndarray"],
        description: "Angle, in radians",
      } /*
      {
        name: "out",
        type: "string",
        optional: true,
        defaultValue: "None",
        options: ["ndarray", "None"],
      },
      {
        name: "where",
        type: "python.bool",
        optional: true,
        description:
          "At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value.",
      },
      {
        name: "casting",
        type: "pyghon.string",
        optional: true,
        defaultValue: "same_kind",
      },
      {
        name: "order",
        type: "char",
        optional: true,
        defaultValue: "K",
      },
      {
        name: "dtype",
        type: ["numpy.type", "python.type"],
        optional: true,
        defaultValue: null,
      }, */,
    ],
  },
  {
    name: "tan",
    uri: "numpy.tan",
    code: "from numpy import tan",
    returnType: "python.float", //"numpy.ndarray",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "x",
        positional: true,
        type: ["python.float", "python.float_array", "numpy.ndarray"],
        description: "Angle, in radians",
      },
      /* {
        name: "out",
        type: "string",
        optional: true,
        defaultValue: "None",
        options: ["ndarray", "None"],
      },
      {
        name: "where",
        type: "python.bool",
        optional: true,
        description:
          "At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value.",
      },
      {
        name: "casting",
        type: "pyghon.string",
        optional: true,
        defaultValue: "same_kind",
      },
      {
        name: "order",
        type: "char",
        optional: true,
        defaultValue: "K",
      },
      {
        name: "dtype",
        type: ["numpy.type", "python.type"],
        optional: true,
        defaultValue: null,
      }, */
    ],
  },
  {
    name: "arctan",
    uri: "numpy.arctan",
    code: "from numpy import arctan",
    returnType: "numpy.ndarray",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "x",
        positional: true,
        type: ["python.float", "python.float_array", "numpy.ndarray"],
        description: "Angle, in radians",
      },
      /* {
        name: "out",
        type: "string",
        optional: true,
        defaultValue: "None",
        options: ["ndarray", "None"],
      },
      {
        name: "where",
        type: "python.bool",
        optional: true,
        description:
          "At locations where the condition is True, the out array will be set to the ufunc result. Elsewhere, the out array will retain its original value.",
      },
      {
        name: "casting",
        type: "pyghon.string",
        optional: true,
        defaultValue: "same_kind",
      },
      {
        name: "order",
        type: "char",
        optional: true,
        defaultValue: "K",
      },
      {
        name: "dtype",
        type: ["numpy.type", "python.type"],
        optional: true,
        defaultValue: null,
      }, */
    ],
  },
  {
    name: "sqrt",
    uri: "numpy.emath.sqrt",
    code: "from numpy import emath.sqrt",
    returnType: "python.float",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "x",
        type: "python.float",
        positional: true,
      },
    ],
  },
  {
    name: "logn",
    uri: "numpy.emath.logn",
    code: "from numpy import emath.logn",
    returnType: "python.float",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "n",
        type: "python.int",
        positional: true,
        description: "log base",
      },
      {
        name: "x",
        type: "python.float",
        positional: true,
      },
    ],
  },
  {
    name: "power",
    uri: "numpy.emath.power",
    code: "from numpy import emath.power",
    returnType: "python.float",
    style: {
      bg: { color: "yellow", opacity: 500 },
      icon: "array-numeric",
    },
    arguments: [
      {
        name: "x",
        type: "python.float",
        positional: true,
      },
      {
        name: "p",
        type: "python.int",
        positional: true,
        description: "The power to which x is raised.",
      },
    ],
  },
];
export default library;
