/*
 * @Author: lanbin
 * @Date:   2018-12-17 18:39:46
 * @Last Modified by: lanbin
 * @Last Modified time: 2020-07-22 20:51:18
 */

import { expect } from "chai";

import isValid from "../src/20isValid.js";

const INPUTS = [
  {
    input: "()",
    result: true,
  },
  {
    input: "()[]{}",
    result: true,
  },
  {
    input: "([)",
    result: false,
  },
  {
    input: "[)",
    result: false,
  },
  {
    input: "([)]",
    result: false,
  },
  {
    input: "([])",
    result: true,
  },
  {
    input: "[",
    result: false,
  },
  {
    input: "",
    result: true,
  },
  {
    input: "((",
    result: false,
  },
];

describe("isValid", (_) => {
  INPUTS.map((input) => {
    it(`Test "${input.input}"`, (done) => {
      expect(isValid(input.input)).to.equal(input.result);
      done();
    });
  });
});
