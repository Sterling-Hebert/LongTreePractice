// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }
  // insert(val, currentNode = this.root) {
  //   let newNode = new TreeNode(val);
  //   // creating new node if root is null
  //   if (currentNode === null) {
  //     this.root = newNode;
  //     return this
  //   }
  //   // this is creating left node
  //   let curr = this.root
  //   while(curr){
  //     if (val === curr.val) return
  //     if (val < curr.val){
  //       if(curr.left === null){
  //         curr.left = newNode
  //         return this
  //       }
  //       curr = curr.left
  //       // this is creating right node
  //     } else {
  //       if (curr.right === null){
  //         curr.right = newNode
  //         return this
  //       }
  //       curr = curr.right
  //     }
  //   }
  // }
  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val);
    if (!currentNode) this.root = newNode;
    else if (currentNode.val > val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else this.insert(val, currentNode.left);
    } else if (currentNode.val < val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }
  search(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val === val) return true;

      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode === null) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const stack = [this.root];
    while (stack.length > 0) {
      const curr = stack.shift();
      console.log(curr.val);

      if (curr.left !== null) {
        stack.push(curr.left);
      }
      if (curr.right !== null) {
        stack.push(curr.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [this.root];
    while (stack.length > 0) {
      const curr = stack.pop();
      console.log(curr.val);
      if (curr.left !== null) {
        stack.push(curr.left);
      }
      if (curr.right !== null) {
        stack.push(curr.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
