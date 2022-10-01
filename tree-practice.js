const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  let current = rootNode;
  while (current.left !== null) {
    current = current.left;
  }
  return current.val;
}

function findMaxBST(rootNode) {
  let current = rootNode;
  while (current.right) {
    current = current.right;
  }
  return current.val;
}

function findMinBT(rootNode) {
  let queue = [rootNode];

  let arr = [];

  while (queue.length) {
    let node = queue.shift();

    arr.push(node.val);

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }
  return Math.min(...arr);
}

function findMaxBT(rootNode) {
  let queue = [rootNode];

  let arr = [];

  while (queue.length) {
    let node = queue.shift();

    arr.push(node.val);

    if (node.left) queue.push(node.left);

    if (node.right) queue.push(node.right);
  }
  return Math.max(...arr);
}

function getHeight(rootNode) {}

function balancedTree(rootNode) {
  if (rootNode.left)
    Math.log2(countNodes(rootNode.left)) >= getHeight(rootNode.left);
  return Math.log2(countNodes(rootNode)) >= getHeight(rootNode);
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode(rootNode, target) {
  if (rootNode.val === target) return null;

  let stack = [rootNode];

  while (stack.length > 0) {
    let current = stack.pop();

    if (
      (current.left && current.left.val === target) ||
      (current.right && current.right.val === target)
    ) {
      return current;
    }

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return undefined;
}

function inOrderPredecessor(rootNode, target) {
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else if (!current && stack.length > 0) {
      current = stack.pop();
      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;
    } else {
      break;
    }
  }
}

function deleteNodeBST(rootNode, target) {}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
