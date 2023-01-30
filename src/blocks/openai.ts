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
    name: "openai_completion",
    uri: `openai.completion`,
    async: true,
    code: `
from pyodide.http import pyfetch
from json import dumps

async def openai_completion(api_key, model, prompt, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, raw_response):
    endpoint = 'https://api.openai.com/v1/completions'
    headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {}'.format(api_key)  
    }
    response = await pyfetch(endpoint, headers=headers, method='POST', body=dumps({
      'model': model,
      'prompt': prompt,
      'temperature': temperature,
      'max_tokens': max_tokens,
      'top_p': top_p,
      'frequency_penalty': frequency_penalty,
      'presence_penalty': presence_penalty
    }))

    respose_body = await response.json()
    if raw_response:
      return respose_body
    else:
      return respose_body.get('choices')[0].get('text')

`,
    arguments: [
      {
        name: "api_key",
        type: "python.string",
      },
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
        name: "raw_response",
        type: "python.bool",
        defaultValue: false,
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

    returnType: "python.string",
    style: {
      icon: "predictive-analysis",
      bg: {
        color: "orange",
        opacity: 500,
      },
    },
  },
];
export default library;
