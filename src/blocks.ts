import { LibraryBlock } from "@keix/workflow-types";
import { blocks as base } from "./blocks/base";
import { library as chart } from "./blocks/chart";
import { library as numpy } from "./blocks/numpy";
import { library as pandas } from "./blocks/pandas";
import { library as survey } from "./blocks/survey";
import { library as openai } from "./blocks/openai";

export const blocks: LibraryBlock[] = [
  ...base,
  ...chart,
  ...numpy,
  ...pandas,
  ...survey,
  ...openai,
];
