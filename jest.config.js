const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   verbose: true,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   testMatch: ["**/src/lib/**/*.spec.{ts,tsx}"],
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   collectCoverage: true,
   collectCoverageFrom: ["src/lib/**/*.{ts,tsx}", "!**/mocks/msw/**"],
   coverageDirectory: "./coverage/jest",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 0, // 🔥
         functions: 0, // 🔥
         lines: 0, // 🔥
         statements: 0 // 🔥
      }
   },
   moduleNameMapper: {}
};

module.exports = createJestConfig(customJestConfig);
