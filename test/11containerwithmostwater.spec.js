import { expect } from "chai";

import func from "../src/11containerwithmostwater.js";

describe("11containerwithmostwater", (_) => {
  it(`[1]`, (done) => {
    expect(func([1])).to.be.equal(0);
    done();
  });

  it(`[1,8,6,2,5,4,8,3,7]`, (done) => {
    expect(func([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.be.equal(49);
    done();
  });
});
