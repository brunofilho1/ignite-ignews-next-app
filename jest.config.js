module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // quais pastas ignorar nos teste
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom", // quando renderiza o html ele vai criar uma representação da dom em js
};
