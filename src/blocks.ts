import { LibraryBlock } from "@keix/workflow-types";

const blocks: LibraryBlock[] = [
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
];

export default blocks;
