import { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest for TypeScript support
  testEnvironment: "node", // Use Node.js environment
  moduleFileExtensions: ["ts", "js"], // Support both .ts and .js files
  roots: ["<rootDir>/src"], // Point to your source directory
};

export default config;
