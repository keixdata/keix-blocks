import { LibraryBlock } from "@keix/workflow-types";

const zeroLike = ["empty", "ones", "zeros"];

const library: LibraryBlock[] = [
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
