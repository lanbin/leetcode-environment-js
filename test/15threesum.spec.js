import { expect } from "chai";

import func from "../src/15threesum.js";

describe("15threesum", (_) => {
  it(`[-1, 0, 1, 2, -1, -4]，`, (done) => {
    expect(func([-1, 0, 1, 2, -1, -4])).to.be.eql([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    done();
  });

  it(`[0,0,0,0]`, (done) => {
    expect(func([0, 0, 0, 0])).to.be.eql([[0, 0, 0]]);
    done();
  });
});
