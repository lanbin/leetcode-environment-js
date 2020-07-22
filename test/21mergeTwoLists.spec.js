/*
 * @Author: lanbin
 * @Date:   2018-12-17 19:28:08
 * @Last Modified by: lanbin
 * @Last Modified time: 2020-07-22 20:52:03
 */
import { expect, assert } from "chai";

import mergeTwoLists from "../src/21mergeTwoLists.js";
import List from "../utils/list.js";

describe("mergeTwoLists", (_) => {
  var list1 = List.from([1, 2, 4]);
  var list2 = List.from([1, 3, 4]);
  var list3 = List.from([1, 2, 3]);
  var list4 = List.from([1, 2, 3, 4]);
  var list5 = List.from([1, 2, 3, 8, 9, 10]);
  var list6 = List.from([4, 5, 6]);

  it("List compareValue", (done) => {
    expect(List.compareValue(list1, list2)).to.not.be.ok;
    expect(List.compareValue(list2, list3)).to.not.be.ok;
    expect(List.compareValue(list3, list4)).to.not.be.ok;
    done();
  });

  it("short merge", (done) => {
    expect(
      List.compareValue(
        mergeTwoLists(list1, list2),
        List.from([1, 1, 2, 3, 4, 4])
      )
    ).to.be.ok;

    done();
  });

  // List.display(mergeTwoLists(list5, list6))
  it("long merge", (done) => {
    expect(
      List.compareValue(
        mergeTwoLists(list5, list6),
        List.from([1, 2, 3, 4, 5, 6, 8, 9, 10])
      )
    ).to.be.ok;

    done();
  });

  it("empty merge", (done) => {
    expect(
      List.compareValue(
        mergeTwoLists(List.from([]), List.from([0])),
        List.from([0])
      )
    ).to.be.ok;

    done();
  });

  it("one merge", (done) => {
    expect(
      List.compareValue(
        mergeTwoLists(List.from([2]), List.from([1])),
        List.from([1, 2])
      )
    ).to.be.ok;

    done();
  });
});
