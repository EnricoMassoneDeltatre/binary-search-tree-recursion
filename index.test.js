const { Node, Tree } = require("./index");
const { assert } = require("chai");

test("It is possible to create new Node", () => {
  // ACT
  const result = new Node(13);

  // ASSERT
  assert.exists(result);
  assert.strictEqual(result.value, 13);
  assert.isNull(result.left);
  assert.isNull(result.right);
  assert.strictEqual(result.height, 1);
});


test("Newly created node has not left child", () => {
  // ARRANGE
  const target = new Node(13);

  // ACT
  const result = target.hasLeftChild();

  // ASSERT
  assert.isFalse(result);
});

test("Node with left child only has left child", () => {
  // ARRANGE
  const target = new Node(13);
  target.left = new Node(4);

  // ACT
  const result = target.hasLeftChild();

  // ASSERT
  assert.isTrue(result);
});

test("Node with right child only has not left child", () => {
  // ARRANGE
  const target = new Node(13);
  target.right = new Node(40);

  // ACT
  const result = target.hasLeftChild();

  // ASSERT
  assert.isFalse(result);
});

test("Node with both left and right children has left child", () => {
  // ARRANGE
  const target = new Node(13);
  target.right = new Node(40);
  target.left = new Node(10);

  // ACT
  const result = target.hasLeftChild();

  // ASSERT
  assert.isTrue(result);
});


test("Newly created node has not right child", () => {
  // ARRANGE
  const target = new Node(13);

  // ACT
  const result = target.hasRightChild();

  // ASSERT
  assert.isFalse(result);
});

test("Node with left child only has not right child", () => {
  // ARRANGE
  const target = new Node(13);
  target.left = new Node(4);

  // ACT
  const result = target.hasRightChild();

  // ASSERT
  assert.isFalse(result);
});

test("Node with right child only has right child", () => {
  // ARRANGE
  const target = new Node(13);
  target.right = new Node(40);

  // ACT
  const result = target.hasRightChild();

  // ASSERT
  assert.isTrue(result);
});

test("Node with both left and right children has right child", () => {
  // ARRANGE
  const target = new Node(13);
  target.right = new Node(40);
  target.left = new Node(10);

  // ACT
  const result = target.hasRightChild();

  // ASSERT
  assert.isTrue(result);
});


test("It is possible to create new Tree", () => {
  // ACT
  const result = new Tree();

  // ASSERT
  assert.exists(result);
  assert.isNull(result.root);
});

test("It is possible to add nodes to the tree", () => {
  // ARRANGE
  const target = new Tree();
  const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];

  // ACT
  nums.forEach(value => target.add(value));

  // ASSERT
  const objs = target.toObject();

  // root
  expect(objs.value).toEqual(3);
  expect(objs.height).toEqual(5);

  // left side
  expect(objs.left.value).toEqual(1);
  expect(objs.left.height).toEqual(2);
  expect(objs.left.left).toBeNull();

  expect(objs.left.right.value).toEqual(2);
  expect(objs.left.right.height).toEqual(1);
  expect(objs.left.right.left).toBeNull();
  expect(objs.left.right.right).toBeNull();

  // right side
  expect(objs.right.value).toEqual(7);
  expect(objs.right.height).toEqual(4);

  expect(objs.right.left.value).toEqual(4);
  expect(objs.right.left.height).toEqual(3);
  expect(objs.right.left.left).toBeNull();

  expect(objs.right.left.right.value).toEqual(6);
  expect(objs.right.left.right.height).toEqual(2);
  expect(objs.right.left.right.left.value).toEqual(5);
  expect(objs.right.left.right.left.height).toEqual(1);
  expect(objs.right.left.right.left.right).toBeNull();
  expect(objs.right.left.right.left.left).toBeNull();

  expect(objs.right.right.value).toEqual(10);
  expect(objs.right.right.height).toEqual(3);
  expect(objs.right.right.right).toBeNull();

  expect(objs.right.right.left.value).toEqual(9);
  expect(objs.right.right.left.height).toEqual(2);
  expect(objs.right.right.left.right).toBeNull();

  expect(objs.right.right.left.left.value).toEqual(8);
  expect(objs.right.right.left.left.height).toEqual(1);
  expect(objs.right.right.left.left.right).toBeNull();
  expect(objs.right.right.left.left.left).toBeNull();
});