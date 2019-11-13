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