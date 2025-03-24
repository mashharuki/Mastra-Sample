
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { cursorRulesAgent } from "./agents";

/*
export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
*/

export const mastra = new Mastra({
  agents: {
    cursorRulesAgent,
  },
  logger: createLogger({
      name: "GitHub Cursor Rules Agent",
      level: "info",
  }),
});
