// quais pastas ignorar nos teste

module.exports = {
  testIgnorePattern: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom", // quando renderiza o html ele vai criar uma representação da dom em js
};
