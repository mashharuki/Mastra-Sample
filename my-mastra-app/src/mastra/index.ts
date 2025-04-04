import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { cheatsheetAgent } from "./agents";
import { cursorRulesWorkflow } from "./workflows";

export const mastra = new Mastra({
  agents: {
    cheatsheetAgent
  },
  workflows: {
    cursorRulesWorkflow,
  },
  logger: createLogger({
    name: "GitHub Cursor Rules Agent",
    level: "info",
  }),
});
