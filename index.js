class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // by convention a node with no children has height 1
  }

  hasLeftChild() {
    return this.left !== null;
  }

  hasRightChild() {
    return this.right !== null;
  }

  add(value) {
    if (value <= this.value) {

      if (!this.hasLeftChild()) {
        this.left = new Node(value);
      } else {
        this.left.add(value);
      }

      // checks whether adding a node to the left side changed the current node's height
      // the height of a node is defined as the length of the longest path from the node itself to a leaf

      if (!this.hasRightChild() || this.left.height >= this.right.height) {
        this.height = this.left.height + 1; // remember that the node itself adds 1 to its own height
      }

    } else {

      if (!this.hasRightChild()) {
        this.right = new Node(value);
      } else {
        this.right.add(value);
      }

      // checks whether adding a node to the right side changed the current node's height
      // the height of a node is defined as the length of the longest path from the node itself to a leaf

      if (!this.hasLeftChild() || this.right.height >= this.left.height) {
        this.height = this.right.height + 1; // remember that the node itself adds 1 to its own height
      }
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root == null) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  toObject() {
    return this.root;
  }
}

exports.Node = Node;
exports.Tree = Tree;