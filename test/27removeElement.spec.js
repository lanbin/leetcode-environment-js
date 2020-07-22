/*
 * @Author: lanbin
 * @Date:   2018-12-19 11:50:51
 * @Last Modified by: lanbin
 * @Last Modified time: 2020-07-22 20:52:40
 */
import { expect } from "chai";
import removeElement from "../src/27removeElement.js";

describe("removeElement", (_) => {
  it("[3,2,2,3]", (done) => {
    var array = [3, 2, 2, 3];
    var remainNum = removeElement(array, 3);
    expect(array.slice(0, remainNum)).to.be.deep.equal([2, 2]);
    done();
  });

  it("[2,0]", (done) => {
    var array = [2, 0];
    var remainNum = removeElement(array, 2);
    expect(array.slice(0, remainNum)).to.be.deep.equal([0]);
    done();
  });

  it("[1]", (done) => {
    var array = [];
    var remainNum = removeElement(array, 1);
    expect(array.slice(0, remainNum)).to.be.deep.equal([]);
    done();
  });

  it("[0,1,2,2,3,0,4,2]", (done) => {
    var array = [0, 1, 2, 2, 3, 0, 4, 2];
    var remainNum = removeElement(array, 2);
    expect(array.slice(0, remainNum)).to.be.deep.equal([0, 1, 3, 0, 4]);
    done();
  });
});
