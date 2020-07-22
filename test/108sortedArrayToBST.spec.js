import { expect } from "chai";

import BinaryTree from "../utils/BinaryTree";
import sortedArrayToBST from "../src/108sortedArrayToBST.js";

var arrData = [1, 2, 2, 3, null, null, 3, 4, null, null, 4];
var bTree = BinaryTree.from(arrData);

var isBalanced = function (root) {
  if (!root) return true;

  var leftLv = 0;
  var rightLv = 0;

  function hasChild(node, lv) {
    var len = node.length;
    var index = 0;
    var nextNodes = [];

    while (index < len) {
      if (node[index]) {
        if (node[index].left) nextNodes.push(node[index].left);
        if (node[index].right) nextNodes.push(node[index].right);
      }
      index++;
    }

    lv++;
    if (lv === 2) {
      console.log(nextNodes);
    }
    if (nextNodes.length > 0) {
      return hasChild(nextNodes, lv);
    } else return lv;
  }

  if (root.left) leftLv = hasChild([root.left], leftLv);

  if (root.right) rightLv = hasChild([root.right], rightLv);

  console.log(leftLv, rightLv);
  return Math.abs(leftLv - rightLv) <= 1;
};

console.log(isBalanced(bTree));

describe("sortedArrayToBST", (_) => {
  it(`Default Test`, (done) => {
    done();
  });
});
