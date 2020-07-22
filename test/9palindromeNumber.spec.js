import { expect } from "chai";

import pn from "../src/9palindromeNumber.js";

describe("9palindromeNumber", (_) => {
  it(`42`, (done) => {
    expect(pn("42")).to.be.equal(false);
    done();
  });

  it(`10`, (done) => {
    expect(pn("10")).to.be.equal(false);
    done();
  });

  it(`101`, (done) => {
    expect(pn("101")).to.be.equal(true);
    done();
  });

  it(`-101`, (done) => {
    expect(pn("-101")).to.be.equal(false);
    done();
  });
});
