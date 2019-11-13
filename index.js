class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }

  add(value) {
    throw new Error("Not implemented yet");
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