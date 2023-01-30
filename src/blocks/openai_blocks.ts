import { LibraryBlock } from "@keix/workflow-types";

const zeroLike = ["empty", "ones", "zeros"];

export const library: LibraryBlock[] = [
  /* ...zeroLike.map<LibraryBlock>((name) => ({
    name: name,
    uri: `openai.${name}`,
    code: `import openai`,
    requires: ["os"],
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
  })), */
  {
    name: "openai.Completion.create",
    uri: `openai.Completion.create`,
    code: `
import openai
openai.api_key = "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"`,
    requires: ["openai"],
    arguments: [
      {
        name: "model",
        type: "python.string",
        defaultValue: "text-davinci-003",
        options: [
          "text-davinci-003",
          "text-curie-001",
          "text-babbage-001",
          "text-ada-001",
        ],
      },
      {
        name: "prompt",
        type: "python.string",
      },
      {
        name: "temperature",
        type: "python.int",
        defaultValue: 0,
      },
      {
        name: "max_tokens",
        type: "python.int",
        defaultValue: 50,
      },
      {
        name: "top_p",
        type: "python.float",
        defaultValue: 1.0,
      },
      {
        name: "frequency_penalty",
        type: "python.float",
        defaultValue: 0.0,
      },
      {
        name: "presence_penalty",
        type: "python.float",
        defaultValue: 0.0,
      },
    ],

    returnType: "python.dictionary",
    style: {
      icon: "array-numeric",
      bg: {
        color: "red",
        opacity: 500,
      },
    },
  },
];
export default library;
