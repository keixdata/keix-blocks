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
    returnType: "ndarray",
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
    returnType: "ndarray",
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
    returnType: "ndarray",
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
];
export default library;
