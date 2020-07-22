import { expect } from "chai";

import List from "../utils/list.js";
import deleteDuplicates from "../src/83deleteDuplicates.js";

describe("deleteDuplicates", (_) => {
  it(`[]`, (done) => {
    let list = List.from([]);

    expect(List.compareValue(deleteDuplicates(list), List.from([]))).to.be.ok;
    done();
  });

  it(`[1, 1, 1]`, (done) => {
    let list = List.from([1, 1, 1]);

    expect(List.compareValue(deleteDuplicates(list), List.from([1]))).to.be.ok;
    done();
  });

  it(`[1,1,2]`, (done) => {
    let list = List.from([1, 1, 2]);

    expect(List.compareValue(deleteDuplicates(list), List.from([1, 2]))).to.be
      .ok;
    done();
  });

  it(`[1, 1, 2, 3, 3]`, (done) => {
    let list = List.from([1, 1, 2, 3, 3]);

    expect(List.compareValue(deleteDuplicates(list), List.from([1, 2, 3]))).to
      .be.ok;
    done();
  });
});
