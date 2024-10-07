"use strict";

module.exports = {
  transform: {
    "^.+\\.(m?j|t)s$": "@swc/jest",
  },
  transformIgnorePatterns: [],
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        addFileAttribute: "true",
        ancestorSeparator: " › ",
        classNameTemplate: "{classname}",
        titleTemplate: "{title}",
      },
    ],
  ],
};
