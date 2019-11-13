class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
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

      // l'aggiunta di un nodo a sx può modificare la altezza del nodo corrente se e solo se 
      // la altezza del figlio di sx è >= della altezza del figlio di dx

      if (!this.hasRightChild() || this.left.height >= this.right.height) {
        this.height = this.left.height + 1;
      }

    } else {

      if (!this.hasRightChild()) {
        this.right = new Node(value);
      } else {
        this.right.add(value);
      }

      // l'aggiunta di un nodo a dx può modificare la altezza del nodo corrente se e solo se 
      // la altezza del figlio di dx è >= della altezza del figlio di sx

      if (!this.hasLeftChild() || this.right.height >= this.left.height) {
        this.height = this.right.height + 1;
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