import { expect } from "chai";

import atoi from "../src/8atoi.js";

describe("8atoi", (_) => {
  it(`-42`, (done) => {
    expect(atoi("-42")).to.be.equal(-42);
    done();
  });

  it(`-91283472332`, (done) => {
    expect(atoi("-91283472332")).to.be.equal(-2147483648);
    done();
  });

  it(`4193 with words`, (done) => {
    expect(atoi("4193 with words")).to.be.equal(4193);
    done();
  });

  it(`+`, (done) => {
    expect(atoi("+")).to.be.equal(0);
    done();
  });
});
