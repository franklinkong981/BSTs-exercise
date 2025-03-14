class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration.
   * If root is node with value = val becomes new root. */

  insert(val) {
    let newNode = new Node(val);
    let currentNode = this.root;
    if (!currentNode) {
      this.root = newNode;
      return this;
    }

    let hasBeenInserted = false;
    while (!hasBeenInserted) {
      if (val < currentNode.val && currentNode.left) {
        currentNode = currentNode.left;
        continue;
      } else if (val >= currentNode.val && currentNode.right) {
        currentNode = currentNode.right;
        continue;
      } else if (val < currentNode.val) {
        currentNode.left = newNode;
      } else {
        currentNode.right = newNode;
      }
      hasBeenInserted = true;
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, this.root.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, this.root.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) {
      return undefined;
    } else if (current.val === val) {
      return current;
    } else if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(nodes = [], currentNode = this.root) {
    if (currentNode) nodes.push(currentNode.val);

    if (currentNode.left) this.dfsPreOrder(nodes, currentNode.left);
    if (currentNode.right) this.dfsPreOrder(nodes, currentNode.right);

    return nodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(nodes = [], currentNode = this.root) {
    if (currentNode.left) this.dfsInOrder(nodes, currentNode.left);
    if (currentNode) nodes.push(currentNode.val);
    if (currentNode.right) this.dfsInOrder(nodes, currentNode.right);

    return nodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(nodes = [], currentNode = this.root) {
    if (currentNode.left) this.dfsPostOrder(nodes, currentNode.left);
    if (currentNode.right) this.dfsPostOrder(nodes, currentNode.right);
    if (currentNode) nodes.push(currentNode.val);

    return nodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visitedNodes = [];
    let stack = [this.root];

    while (stack) {
      let currentNode = stack.shift();
      if (currentNode) {
        visitedNodes.push(currentNode.val);
        stack.push(currentNode.left);
        stack.push(currentNode.right);
      }
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
